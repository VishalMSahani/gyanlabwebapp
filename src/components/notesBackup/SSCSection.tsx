import React, { Suspense } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Skeleton } from "../ui/skeleton";
import { NoteFileList, Note } from "./NoteFileList";

const subjects = ["English", "Maths", "Science", "History", "Geography"];

export default function SSCSection({ notesData }: { notesData: Record<string, Note[]> }) {
  return (
    <NoteFileList notesBySubject={notesData} subjects={subjects} defaultSubject={subjects[0]} />
  );
} 