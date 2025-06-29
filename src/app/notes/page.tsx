import { BookOpen, GraduationCap, School } from "lucide-react";
import ClassCard from "@/components/notes/notes/ClassCard";
import NotesHeader from "@/components/notes/notes/NotesHeader";
import NotesFeatures from "@/components/notes/notes/NotesFeatures";


function page() {
    const classes = [
        {
          id: "ssc",
          title: "SSC (10th)",
          description: "Secondary School Certificate",
          icon: School,
          color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
          iconColor: "text-blue-600"
        },
        {
          id: "fyjc",
          title: "FYJC (11th Science)",
          description: "First Year Junior College",
          icon: BookOpen,
          color: "bg-green-50 hover:bg-green-100 border-green-200",
          iconColor: "text-green-600"
        },
        {
          id: "syjc",
          title: "SYJC (12th Science)",
          description: "Second Year Junior College",
          icon: GraduationCap,
          color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
          iconColor: "text-purple-600"
        }
      ];
    
      return (
        <div className="min-h-screen bg-gray-50 pt-20">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <NotesHeader />
    
            {/* Class Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classes.map((classItem) => (
                <ClassCard key={classItem.id} classItem={classItem} />
              ))}
            </div>
    
            <NotesFeatures />
          </div>
        </div>
      );
    };

export default page
