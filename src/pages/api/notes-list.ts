import type { NextApiRequest, NextApiResponse } from "next";
import getFilesInFolder, { getSubfolders } from "./drive";
import type { DriveFile } from "@/lib/types/googleDrive";

// Main Notes folder ID
const MAIN_NOTES_FOLDER_ID = "1dZ8dAtcheiPCrL0ZJL75kpvrS8MJTctD";

// Map standards and subjects to folder names as in Google Drive
const STANDARD_MAP: Record<string, string> = {
  syjc: "HSC (12th)",
  fyjc: "FYJC (11th)",
  ssc: "SSC (10th)",
};

// For each standard, map subject param to folder name
const SUBJECT_MAP: Record<string, Record<string, string>> = {
  syjc: {
    physics: "Physics",
    chemistry: "Chemistry",
    mathematics: "Mathematics",
    biology: "Biology",
  },
  fyjc: {
    physics: "Physics",
    chemistry: "Chemistry",
    mathematics: "Mathematics",
    biology: "Biology",
  },
  ssc: {
    science: "Science",
    english: "English",
    mathematics: "Mathematics",
    history: "History",
    geography: "Geography",
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { standard, subject } = req.query;
  if (!standard || !subject) {
    return res.status(400).json({ error: "Missing standard or subject" });
  }
  const stdKey = String(standard).toLowerCase();
  const subjKey = String(subject).toLowerCase();
  const stdFolderName = STANDARD_MAP[stdKey];
  const subjFolderName = SUBJECT_MAP[stdKey]?.[subjKey];
  if (!stdFolderName || !subjFolderName) {
    return res.status(404).json({ error: "Standard or subject not found" });
  }

  try {
    // 1. Find the standard folder under main Notes
    const stdFolders = await getSubfolders(MAIN_NOTES_FOLDER_ID);
    const stdFolder = stdFolders.find((f: DriveFile) => f.name.toLowerCase().includes(stdKey));
    if (!stdFolder) {
      return res.status(404).json({ error: "Standard folder not found in Drive" });
    }
    // 2. Find the subject folder under standard
    const subjFolders = await getSubfolders(stdFolder.id);
    const subjFolder = subjFolders.find((f: DriveFile) => f.name.toLowerCase() === subjFolderName.toLowerCase());
    if (!subjFolder) {
      return res.status(404).json({ error: "Subject folder not found in Drive" });
    }
    // 3. List all PDF files in subject folder
    const files = await getFilesInFolder(subjFolder.id);
    const pdfFiles = files.filter((f: DriveFile) => f.name.toLowerCase().endsWith(".pdf"));
    return res.status(200).json({ files: pdfFiles });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
} 