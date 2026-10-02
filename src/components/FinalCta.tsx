import React from 'react';
import { ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface FinalCtaProps {
  onEnquireClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onEnquireClick }) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0b0d] via-black to-[#0a0b0d] relative overflow-hidden border-t border-neutral-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[300px] bg-gradient-to-r from-red-600/15 via-amber-500/15 to-red-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Official Logo Emblem */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-amber-400 p-0.5 bg-black shadow-2xl mb-6">
          <img
            src={KPM_DATA.images.logo}
            alt="KPM Fried Chicken Official Emblem"
            className="w-full h-full object-contain rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight leading-tight">
          YOUR KPM FRIED CHICKEN FRANCHISE<br />
          <span className="text-red-500">
            STARTS HERE
          </span>
        </h2>

        {/* Supporting text directly from PDF */}
        <p className="mt-4 text-xs sm:text-base text-neutral-300 font-medium max-w-xl text-balance px-2">
          Premium cart • Complete kitchen setup • Equipment • Startup masala • Brand support
        </p>

        {/* Buttons Stack */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onEnquireClick}
            className="min-h-[48px] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>START FRANCHISE ENQUIRY</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={KPM_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP KPM</span>
          </a>
        </div>

        <div className="mt-6 text-xs text-neutral-400">
          Direct management helpline:{' '}
          <a href={KPM_DATA.phoneUrl} className="text-amber-400 font-bold hover:underline">
            {KPM_DATA.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
};
