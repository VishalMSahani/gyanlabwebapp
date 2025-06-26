import React, { Suspense } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Skeleton } from "../ui/skeleton";
import { NoteFileList, Note } from "./NoteFileList";

const subjects = ["Physics", "Chemistry", "Maths", "Biology"];

export default function FYJCSection({ notesData }: { notesData: Record<string, Note[]> }) {
  return (
    <NoteFileList notesBySubject={notesData} subjects={subjects} defaultSubject={subjects[0]} />
  );
} 