import React from "react";
import { NoteFileList, Note } from "./NoteFileList";

const subjects = ["Physics", "Chemistry", "Maths", "Biology"];

export default function HSCSection({ notesData }: { notesData: Record<string, Note[]> }) {
  return (
    <NoteFileList notesBySubject={notesData} subjects={subjects} defaultSubject={subjects[0]} />
  );
} 