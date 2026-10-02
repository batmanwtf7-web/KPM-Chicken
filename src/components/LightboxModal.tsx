import React from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageSrc,
  title,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-10 p-2 rounded-full bg-black/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors cursor-pointer"
          aria-label="Close image modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl bg-black max-h-[80vh] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto max-h-[78vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        {title && (
          <div className="mt-4 px-6 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs sm:text-sm font-semibold text-amber-300 text-center">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};
