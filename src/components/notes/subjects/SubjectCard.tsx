
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SubjectCardProps {
  subject: {
    id: string;
    name: string;
    icon: LucideIcon;
    color: string;
    iconColor: string;
  };
  standard: string;
}

const SubjectCard = ({ subject, standard }: SubjectCardProps) => {
  const Icon = subject.icon;
  
  return (
    <Link
      href={`/notes/${standard}/${subject.id}`}
      className="transform transition-all duration-200 hover:scale-105"
    >
      <Card className={`${subject.color} border-2 h-full cursor-pointer transition-colors`}>
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Icon size={28} className={subject.iconColor} />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {subject.name}
          </h3>
          <p className="text-sm text-gray-600">
            View study materials
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SubjectCard;
