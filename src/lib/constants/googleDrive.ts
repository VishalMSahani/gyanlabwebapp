// Google Drive API Configuration
export const GOOGLE_DRIVE_CONFIG = {
  DRIVE_API: "https://www.googleapis.com/drive/v3/files",
  DEFAULT_FIELDS: "files(id,name)",
  TIMEOUT_MS: 8000, // 8 seconds
  MAX_RETRIES: 3,
} as const; 