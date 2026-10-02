import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0c0d10] relative border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-pink-400 mb-1.5">
              <Instagram className="w-3.5 h-3.5" />
              <span>OFFICIAL SOCIAL MEDIA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-royal font-bold text-white tracking-tight">
              FOLLOW @{KPM_DATA.instagram}
            </h2>
            <p className="mt-1 text-neutral-400 text-xs sm:text-sm">
              Behind-the-scenes cart builds, food videos, and franchise expansion updates.
            </p>
          </div>

          <a
            href={KPM_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all w-full sm:w-fit cursor-pointer"
          >
            <span>FOLLOW ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="group relative rounded-xl overflow-hidden aspect-square border border-neutral-800 bg-neutral-900">
            <img src={KPM_DATA.images.cartHero} alt="Cart Build Instagram" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden aspect-square border border-neutral-800 bg-neutral-900">
            <img src={KPM_DATA.images.heroChicken} alt="Crispy Fried Chicken Instagram" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden aspect-square border border-neutral-800 bg-neutral-900">
            <img src={KPM_DATA.images.equipmentSetup} alt="Kitchen Setup Instagram" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden aspect-square border border-neutral-800 bg-neutral-900">
            <img src={KPM_DATA.images.nightAmbiance} alt="Stall Night Ambiance Instagram" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
