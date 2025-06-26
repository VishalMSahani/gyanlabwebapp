
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubjectHeaderProps {
  standard: string;
  getClassTitle: (std: string) => string;
}

const SubjectHeader = ({ standard, getClassTitle }: SubjectHeaderProps) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <Link href="/notes">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Back
        </Button>
      </Link>
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          {getClassTitle(standard)}
        </h1>
        <p className="text-gray-600 mt-1">Select a subject to view available notes</p>
      </div>
    </div>
  );
};

export default SubjectHeader;
