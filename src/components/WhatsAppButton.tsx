'use client';

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with your actual WhatsApp number
    const message = "Hello! I'm interested in your courses.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </Button>
  );
}
