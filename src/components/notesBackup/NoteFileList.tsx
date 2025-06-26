"use client"
import { useState } from "react";
import { Card } from "../ui/card";

export type Note = {
  fileName: string;
  url: string;
  lastUpdated: string;
  fileSize: string;
  description?: string;
};

interface NoteFileListProps {
  notesBySubject: Record<string, Note[]>;
  subjects: string[];
  defaultSubject?: string;
}

export function NoteFileList({ notesBySubject, subjects, defaultSubject }: NoteFileListProps) {
  const [selectedSubject, setSelectedSubject] = useState(defaultSubject || subjects[0]);
  const notes = notesBySubject[selectedSubject] || [];

  return (
    <div className="flex flex-col gap-4">
      {/* Subject Tabs */}
      <div className="flex gap-2 mb-4 justify-center flex-wrap">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject)}
            className={`px-4 py-2 rounded-full font-semibold transition-all text-base border-2 focus:outline-none focus:ring-2 focus:ring-primary/60 ${selectedSubject === subject ? "bg-primary text-white border-primary" : "bg-white text-primary border-primary/30 hover:bg-primary/10"}`}
          >
            {subject}
          </button>
        ))}
      </div>
      {/* File List */}
      {notes.length === 0 ? (
        <div className="text-center text-base text-secondary py-8">No notes available for {selectedSubject}.</div>
      ) : (
        notes.map((note, idx) => (
          <Card key={idx} className="flex flex-col gap-2 p-4 bg-white/90 shadow-md rounded-xl transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="min-w-0 flex-1">
                <div className="font-medium text-base truncate text-primary">{note.fileName}</div>
                <div className="text-xs mt-0.5 text-secondary">Last updated: {note.lastUpdated} &bull; {note.fileSize}</div>
                <div className="text-xs mt-1 text-primary/80 italic truncate">
                  {note.description || "A concise summary or description of this note file."}
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
} 