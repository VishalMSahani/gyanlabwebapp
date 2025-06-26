
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotesListHeaderProps {
  standard: string;
  subject: string;
  getClassTitle: (std: string) => string;
  getSubjectTitle: (subj: string) => string;
  notesCount: number;
}

const NotesListHeader = ({ 
  standard, 
  subject, 
  getClassTitle, 
  getSubjectTitle, 
  notesCount 
}: NotesListHeaderProps) => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
        <Link href="/notes" className="hover:text-gray-900">Notes</Link>
        <span>›</span>
        <Link href={`/notes/${standard}`} className="hover:text-gray-900">
          {getClassTitle(standard)}
        </Link>
        <span>›</span>
        <span className="text-gray-900 font-medium">{getSubjectTitle(subject)}</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href={`/notes/${standard}`}>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {getSubjectTitle(subject)} Notes
          </h1>
          <p className="text-gray-600 mt-1">
            {getClassTitle(standard)} • {notesCount} study materials available
          </p>
        </div>
      </div>
    </>
  );
};

export default NotesListHeader;
