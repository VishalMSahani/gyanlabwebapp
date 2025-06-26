"use client"

import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Gyanlab</h4>
            <p className="text-white/80 text-sm">
              Providing quality education and comprehensive coaching for all major exams
              with a focus on conceptual clarity and practical knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-white/80 hover:text-secondary transition-colors text-sm">
                About Us
              </Link>
              <Link href="/courses" className="block text-white/80 hover:text-secondary transition-colors text-sm">
                Courses
              </Link>
              <Link href="/gallery" className="block text-white/80 hover:text-secondary transition-colors text-sm">
                Gallery
              </Link>
              <Link href="/youtube" className="block text-white/80 hover:text-secondary transition-colors text-sm">
                YouTube Channel
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Courses</h4>
            <div className="space-y-2">
              <p className="text-white/80 text-sm">SSC Foundation</p>
              <p className="text-white/80 text-sm">HSC Science</p>
              <p className="text-white/80 text-sm">JEE Foundation</p>
              <p className="text-white/80 text-sm">State Board</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-secondary transition-colors text-sm">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:info@gyanlab.com" className="text-white/80 hover:text-secondary transition-colors text-sm">
                  info@gyanlab.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <p className="text-white/80 text-sm">
                  Wadala, Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Gyanlab Tutorial. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-secondary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
