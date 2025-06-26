
import { X } from "lucide-react";

interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ImageModal = ({ selectedImage, onClose }: ImageModalProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
        <img
          src={selectedImage}
          alt="Gallery image"
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;
