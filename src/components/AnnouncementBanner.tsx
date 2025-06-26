"use client"

import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 
     bg-accent text-white py-2 px-6 rounded-2xl shadow-lg animate-slide-in-right">
      <p className="md:text-sm font-medium mr-4 ">
        🎉 Admissions Open for July 2025 Batch! Join Now for Early Bird Discounts | Call: +91 9876543210
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
