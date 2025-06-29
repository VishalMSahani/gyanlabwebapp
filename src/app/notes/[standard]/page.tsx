'use client';

import { useParams } from "next/navigation";
import { Atom, Calculator, Microscope, FlaskConical, BookText, Globe, History, Users } from "lucide-react";
import SubjectCard from "@/components/notes/subjects/SubjectCard";
import SubjectHeader from "@/components/notes/subjects/SubjectHeader";
import SubjectInfo from "@/components/notes/subjects/SubjectInfo";

const SubjectSelection = () => {
  const params = useParams();
  const standard = params?.standard as string;

  const getClassTitle = (std: string) => {
    switch (std) {
      case "ssc": return "SSC (10th)";
      case "fyjc": return "FYJC (11th Science)";
      case "syjc": return "SYJC (12th Science)";
      default: return "Unknown Class";
    }
  };

  const getSubjects = (std: string) => {
    if (std === "ssc") {
      return [
        { id: "mathematics", name: "Mathematics", icon: Calculator, color: "bg-blue-50 hover:bg-blue-100 border-blue-200", iconColor: "text-blue-600" },
        { id: "science", name: "Science", icon: Atom, color: "bg-green-50 hover:bg-green-100 border-green-200", iconColor: "text-green-600" },
        { id: "english", name: "English", icon: BookText, color: "bg-purple-50 hover:bg-purple-100 border-purple-200", iconColor: "text-purple-600" },
        { id: "history", name: "History", icon: History, color: "bg-orange-50 hover:bg-orange-100 border-orange-200", iconColor: "text-orange-600" },
        { id: "geography", name: "Geography", icon: Globe, color: "bg-teal-50 hover:bg-teal-100 border-teal-200", iconColor: "text-teal-600" },
        { id: "civics", name: "Civics", icon: Users, color: "bg-pink-50 hover:bg-pink-100 border-pink-200", iconColor: "text-pink-600" }
      ];
    }

    return [
      { id: "physics", name: "Physics", icon: Atom, color: "bg-blue-50 hover:bg-blue-100 border-blue-200", iconColor: "text-blue-600" },
      { id: "chemistry", name: "Chemistry", icon: FlaskConical, color: "bg-green-50 hover:bg-green-100 border-green-200", iconColor: "text-green-600" },
      { id: "biology", name: "Biology", icon: Microscope, color: "bg-purple-50 hover:bg-purple-100 border-purple-200", iconColor: "text-purple-600" },
      { id: "mathematics", name: "Mathematics", icon: Calculator, color: "bg-orange-50 hover:bg-orange-100 border-orange-200", iconColor: "text-orange-600" }
    ];
  };

  const subjects = getSubjects(standard);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">

      <div className="max-w-4xl mx-auto px-4 py-8">
        <SubjectHeader standard={standard || ""} getClassTitle={getClassTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard 
              key={subject.id} 
              subject={subject} 
              standard={standard} 
            />
          ))}
        </div>
        <SubjectInfo />
      </div>
    </div>
  );
};

export default SubjectSelection;
