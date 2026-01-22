import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/256709773348?text=Hello,%20I%20would%20like%20to%20book%20a%20site%20visit."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="absolute left-full ml-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Book a Site Visit
      </span>
    </a>
  );
};

export default FloatingWhatsApp;