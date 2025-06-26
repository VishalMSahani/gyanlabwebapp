"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import NoteCard from "@/components/notes/notes-list/NoteCard";
import NotesListHeader from "@/components/notes/notes-list/NotesListHeader";
import DownloadInfo from "@/components/notes/notes-list/DownloadInfo";
import {toast} from "sonner"

interface Note {
  id: string;
  title: string;
  description: string;
  type: string;
  previewUrl: string;
  downloadUrl: string;
  lastUpdated: string;
}

const NotesList = () => {
  const params = useParams();
  const standard = params?.standard as string;
  const subject = params?.subject as string;

  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getClassTitle = (std: string) => {
    switch (std) {
      case "ssc": return "SSC (10th)";
      case "fyjc": return "FYJC (11th Science)";
      case "syjc": return "SYJC (12th Science)";
      default: return "Unknown Class";
    }
  };

  const getSubjectTitle = (subj: string) => {
    return subj?.charAt(0).toUpperCase() + subj?.slice(1);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Chapter Notes": return "bg-blue-100 text-blue-800";
      case "Formula Sheet": return "bg-green-100 text-green-800";
      case "Question Bank": return "bg-purple-100 text-purple-800";
      case "Practice Set": return "bg-orange-100 text-orange-800";
      case "Revision": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleDownload = (noteTitle: string) => {
    toast.success(`Downloading: ${noteTitle}`);
  };
  const handlePreview = (noteTitle: string) => {
    toast.success(`Opening: ${noteTitle}`);
  };

  useEffect(() => {
    if (!standard || !subject) return;
    setLoading(true);
    setError(null);
    fetch(`/api/notes-list?standard=${standard}&subject=${subject}`)
      .then(async (res) => {
        if (!res.ok) throw new Error((await res.json()).error || "Failed to fetch notes");
        return res.json();
      })
      .then((data) => {
        // Map Google Drive files to NoteCard format
        const notes = (data.files || []).map((file: any) => ({
          id: file.id,
          title: file.name.replace(/\.pdf$/i, ""),
          description: "PDF Study Material", // You can enhance this if you store descriptions
          type: "PDF Note",
          downloadUrl: `https://drive.google.com/uc?id=${file.id}&export=download`,
          previewUrl: `https://drive.google.com/file/d/${file.id}/preview`,
          lastUpdated: file.modifiedTime ? new Date(file.modifiedTime).toLocaleDateString() : "-",
        }));
        setNotes(notes);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch notes");
        setLoading(false);
      });
  }, [standard, subject]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <NotesListHeader 
          standard={standard || ""}
          subject={subject || ""}
          getClassTitle={getClassTitle}
          getSubjectTitle={getSubjectTitle}
          notesCount={notes.length}
        />

        {loading && <div className="text-center py-8 text-gray-500">Loading notes...</div>}
        {error && <div className="text-center py-8 text-red-500">{error}</div>}
        {!loading && !error && (
          <div className="space-y-4">
            {notes.length === 0 ? (
              <div className="text-center text-gray-500 py-8">No notes found for this subject.</div>
            ) : (
              notes.map((note) => (
                <NoteCard 
                  key={note.id}
                  note={note}
                  getTypeColor={getTypeColor}
                  handleDownload={handleDownload}
                  handlePreview={handlePreview}
                />
              ))
            )}
          </div>
        )}

        <DownloadInfo />
      </div>
    </div>
  );
};

export default NotesList;
