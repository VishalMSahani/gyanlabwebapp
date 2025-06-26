import { Download, Eye, FileText, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NoteCardProps {
  note: {
    id: string;
    title: string;
    description: string;
    type: string;
    previewUrl: string;
    downloadUrl: string;
    lastUpdated: string;
  };
  getTypeColor: (type: string) => string;
  handleDownload: (noteTitle: string) => void;
  handlePreview: (noteTitle: string) => void;
}

const NoteCard = ({ note, getTypeColor, handleDownload }: NoteCardProps) => {
  return (
    <Card className="bg-white hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText size={20} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {note.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {note.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <Badge variant="secondary" className={getTypeColor(note.type)}>
                    {note.type}
                  </Badge>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    Updated {note.lastUpdated}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 sm:flex-col lg:flex-row">
          <a 
            href={note.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 flex-1 sm:flex-none"
              onClick={() => handlePreview(note.title)}
            >
              <Eye size={16} />
              Preview
            </Button>
            </a>
            <a 
            href={note.downloadUrl}
            >
            <Button
              size="sm"
              className="flex items-center gap-2 flex-1 sm:flex-none"
              onClick={() => handleDownload(note.title)}
            >
              <Download size={16} />
              Download
            </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
