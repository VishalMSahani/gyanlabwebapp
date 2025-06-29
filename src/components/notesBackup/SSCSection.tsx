import React from "react";
import { NoteFileList, Note } from "./NoteFileList";

const subjects = ["English", "Maths", "Science", "History", "Geography"];

export default function SSCSection({ notesData }: { notesData: Record<string, Note[]> }) {
  return (
    <NoteFileList notesBySubject={notesData} subjects={subjects} defaultSubject={subjects[0]} />
  );
} 