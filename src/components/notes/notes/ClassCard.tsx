
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ClassCardProps {
  classItem: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    iconColor: string;
  };
}

const ClassCard = ({ classItem }: ClassCardProps) => {
  const Icon = classItem.icon;
  
  return (
    <Link
      href={`/notes/${classItem.id}`}
      className="transform transition-all duration-200 hover:scale-105"
    >
      <Card className={`${classItem.color} border-2 h-full cursor-pointer transition-colors`}>
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Icon size={32} className={classItem.iconColor} />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {classItem.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {classItem.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ClassCard;
