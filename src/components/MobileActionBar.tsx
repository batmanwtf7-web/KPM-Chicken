import React from 'react';
import { Phone, MessageSquare, Navigation } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick mobile contacts"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0b0d]/95 backdrop-blur-xl border-t border-amber-500/30 px-3 pt-2 safe-area-bottom sm:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* 1. CALL ACTION */}
        <a
          href={KPM_DATA.phoneUrl}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-neutral-900 border border-neutral-700/80 hover:border-amber-400 text-white active:scale-95 transition-all text-center min-h-[50px] shadow-sm"
          aria-label="Call KPM Fried Chicken directly"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
            CALL
          </span>
        </a>

        {/* 2. WHATSAPP ACTION */}
        <a
          href={KPM_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/80 border border-emerald-600/70 hover:border-emerald-400 text-white active:scale-95 transition-all text-center min-h-[50px] shadow-sm"
          aria-label="Open WhatsApp conversation with KPM"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
            WHATSAPP
          </span>
        </a>

        {/* 3. DIRECTIONS ACTION */}
        <a
          href={KPM_DATA.locationDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-950/80 border border-red-600/70 hover:border-red-400 text-white active:scale-95 transition-all text-center min-h-[50px] shadow-sm"
          aria-label="Get Google Maps directions to Komarapalayam stall"
        >
          <Navigation className="w-4 h-4 text-red-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-200">
            DIRECTIONS
          </span>
        </a>
      </div>
    </aside>
  );
};
