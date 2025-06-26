// Types for Google Drive API
export interface DriveFile {
  id: string;
  name: string;
  modifiedTime?: string;
}

export interface DriveFilesResponse {
  files: DriveFile[];
} 