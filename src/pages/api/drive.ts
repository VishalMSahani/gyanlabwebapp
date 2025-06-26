// No need to import fetch in Next.js API routes (Node 18+)

import { GOOGLE_DRIVE_CONFIG } from "@/lib/constants/googleDrive";
import type { DriveFile, DriveFilesResponse } from "@/lib/types/googleDrive";

const API_KEY = process.env.YOUTUBE_API_KEY;

// Helper to build the URL
const buildURL = (query: string, fields: string = GOOGLE_DRIVE_CONFIG.DEFAULT_FIELDS) =>
  `${GOOGLE_DRIVE_CONFIG.DRIVE_API}?q=${encodeURIComponent(query)}&key=${API_KEY}&fields=${fields}`;

// Helper to fetch with timeout and retries
async function fetchWithRetry(url: string, options: RequestInit = {}, retries = GOOGLE_DRIVE_CONFIG.MAX_RETRIES): Promise<unknown> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), GOOGLE_DRIVE_CONFIG.TIMEOUT_MS);
      const res = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) {
        // Retry on 429 or 5xx errors
        if ((res.status === 429 || res.status >= 500) && attempt < retries) {
          await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 500));
          continue;
        }
        throw new Error(`Google Drive API error: ${res.status} ${res.statusText}`);
      }
      return await res.json();
    } catch (err: unknown) {
      if (typeof err === "object" && err !== null && "name" in err && (err as { name: string }).name === "AbortError") {
        if (attempt < retries) {
          await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 500));
          continue;
        }
        throw new Error("Google Drive API request timed out");
      }
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 500));
        continue;
      }
      throw err;
    }
  }
  throw new Error("Failed to fetch from Google Drive API after retries");
}

function checkApiKey() {
  if (!API_KEY) {
    throw new Error("Google API key is not set in environment variables.");
  }
}

export async function getSubfolders(parentId: string): Promise<DriveFile[]> {
  checkApiKey();
  const query = `'${parentId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`;
  const url = buildURL(query);
  const data = await fetchWithRetry(url);
  return (data as DriveFilesResponse).files;
}

export default async function getFilesInFolder(folderId: string): Promise<DriveFile[]> {
  checkApiKey();
  const query = `'${folderId}' in parents and trashed = false`;
  const url = buildURL(query, "files(id,name,modifiedTime)");
  const data = await fetchWithRetry(url);
  return (data as DriveFilesResponse).files;
}
