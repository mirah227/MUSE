import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Share2, ZoomIn } from 'lucide-react';
import { PlateItem } from '../data/portfolioData';

interface ImageLightboxProps {
  plate: PlateItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  plate,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!plate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl">
      {/* Top Bar */}
      <div className="absolute top-0 inset-x-0 h-16 px-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e0c298] font-semibold">
            {plate.plateNumber}
          </span>
          <span className="text-xs text-[#929189]">·</span>
          <span className="text-xs text-[#e6e1df] font-light tracking-wide">{plate.publication} {plate.issue}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="w-10 h-10 flex items-center justify-center text-[#e6e1df] hover:text-[#e0c298] transition-colors border border-[#2b2a28] hover:border-[#e0c298]"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Navigation Arrows */}
      {hasPrev && onPrev && (
        <button
          onClick={onPrev}
          aria-label="Previous Plate"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 hidden sm:flex items-center justify-center bg-[#141312]/70 hover:bg-[#141312] border border-[#2b2a28] text-white hover:text-[#e0c298] transition-all"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={onNext}
          aria-label="Next Plate"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 hidden sm:flex items-center justify-center bg-[#141312]/70 hover:bg-[#141312] border border-[#2b2a28] text-white hover:text-[#e0c298] transition-all"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>
      )}

      {/* Main Image View */}
      <div className="relative max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
        <img
          src={plate.imageUrl}
          alt={plate.title}
          className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border border-[#2b2a28]/80"
        />

        {/* Captions Below */}
        <div className="mt-4 max-w-2xl text-center px-4 flex flex-col items-center gap-1.5">
          <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
            {plate.title}
          </h3>
          <p className="text-xs text-[#929189] font-light tracking-wide max-w-xl">
            {plate.description}
          </p>
          <div className="flex items-center gap-4 text-[10px] text-[#e0c298] uppercase tracking-widest mt-1">
            <span>{plate.location}</span>
            <span>·</span>
            <span>{plate.year}</span>
            {plate.photographer && (
              <>
                <span>·</span>
                <span>Photo: {plate.photographer}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
