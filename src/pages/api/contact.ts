import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Simple in-memory rate limiter (per IP)
const rateLimitWindowMs = 60 * 1000; // 1 minute
const maxRequestsPerWindow = 5;
const ipRequestCounts: Record<string, { count: number; lastRequest: number }> = {};

// Zod schema for input validation
const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(5).max(2000),
  phone: z.string().optional(),
  course: z.string().optional(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  if (!ipRequestCounts[ip]) {
    ipRequestCounts[ip] = { count: 1, lastRequest: now };
  } else {
    if (now - ipRequestCounts[ip].lastRequest > rateLimitWindowMs) {
      ipRequestCounts[ip] = { count: 1, lastRequest: now };
    } else {
      ipRequestCounts[ip].count++;
      ipRequestCounts[ip].lastRequest = now;
    }
  }
  if (ipRequestCounts[ip].count > maxRequestsPerWindow) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  // Input validation
  const parseResult = ContactSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ message: 'Invalid input', errors: parseResult.error.flatten() });
  }
  const { name, email, message, phone, course } = parseResult.data;

  // Check required environment variables
  const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_RECEIVER_EMAIL'];
  for (const envVar of requiredEnv) {
    if (!process.env[envVar]) {
      // Log the missing env var for server logs, but don't leak to client
      // TODO: Use a proper logger in production
      console.error(`Missing required env var: ${envVar}`);
      return res.status(500).json({ message: 'Server misconfiguration. Please try again later.' });
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: 'New Contact Form Submission',
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px;">
          <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 24px;">
            <h2 style="color: #2563eb; margin-bottom: 16px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="font-weight: bold; padding: 8px 0; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px 0;">Email:</td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px 0;">Phone:</td>
                <td style="padding: 8px 0;">${phone || '-'}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px 0;">Course:</td>
                <td style="padding: 8px 0;">${course || '-'}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px 0; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; white-space: pre-line;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; font-size: 12px; color: #888;">This message was sent from the Gyanlab Contact Us form.</div>
          </div>
        </div>
      `
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // TODO: Use a proper logger in production
    console.error('Email send error:', error);
    // Do not leak stack or error details to client
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
// TODO: For further hardening, add CAPTCHA/honeypot for spam protection, use a persistent rate limiter (e.g., Redis), and use a production logger (e.g., winston/pino). 