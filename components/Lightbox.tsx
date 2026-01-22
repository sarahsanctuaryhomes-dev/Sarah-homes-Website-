import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  startIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, isOpen, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2.5 transition-colors z-50 rounded-full bg-black/50 hover:bg-black/80"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        className="absolute left-4 text-white p-3 transition-colors z-50 bg-black/40 hover:bg-black/70 rounded-full"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <div className="relative w-full h-full flex items-center justify-center p-4" onClick={onClose}>
        <img 
          src={images[currentIndex]} 
          alt={`Gallery image ${currentIndex + 1}`} 
          className="max-w-full max-h-full object-contain select-none shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button 
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-4 text-white p-3 transition-colors z-50 bg-black/40 hover:bg-black/70 rounded-full"
        aria-label="Next image"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Lightbox;