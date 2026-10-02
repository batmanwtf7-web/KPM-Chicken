import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, ExternalLink, Map as MapIcon, Compass } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

export const LocationSection: React.FC = () => {
  const [mapMode, setMapMode] = useState<'embed' | 'satellite'>('embed');

  return (
    <section id="location" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0b0d] border-t border-neutral-800 relative">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-royal font-bold tracking-[0.25em] uppercase text-amber-400 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
            <span>OPERATING FOOD STALL</span>
            <span className="w-5 sm:w-8 h-[1px] bg-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-royal font-black text-white tracking-tight">
            LOCATION
          </h2>

          <p className="mt-2 text-red-500 text-sm sm:text-base font-royal font-bold tracking-wider uppercase">
            KPM FRIED CHICKEN
          </p>

          <p className="mt-2 text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto">
            Experience our operational 8 × 4 cart, taste the proprietary masala, and evaluate customer footfall firsthand.
          </p>
        </div>

        {/* Location Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Details Card (5 Columns on Desktop) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>OFFICIAL STALL ADDRESS</span>
              </div>

              {/* Exact Location Formatting */}
              <div className="space-y-1 mb-6">
                <h3 className="text-2xl sm:text-3xl font-royal font-extrabold text-white">
                  Komarapalayam
                </h3>
                <p className="text-base sm:text-lg text-amber-300 font-semibold">
                  Salem Main Road
                </p>
                <p className="text-sm sm:text-base text-neutral-300 font-medium">
                  Old Saravana Theatre Front
                </p>
                <p className="text-xs text-neutral-500 pt-1 leading-relaxed">
                  Auto Consulting, JKK Nattraja Nagar, Kammavarpalayam, Tamil Nadu 638183
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 text-xs space-y-2 text-neutral-300 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Evening peak high-footfall street food hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Stall Hotline: <strong className="text-white">{KPM_DATA.phoneFormatted}</strong></span>
                </div>
              </div>
            </div>

            {/* Mobile Stacked Buttons (Cleanly separated) */}
            <div className="pt-2 space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* 1. CALL NOW */}
                <a
                  href={KPM_DATA.phoneUrl}
                  className="min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>

                {/* 2. WHATSAPP */}
                <a
                  href={KPM_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 rounded-xl transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </div>

              {/* 3. GET DIRECTIONS - points directly to maps.app.goo.gl/Gt9cnFybxVXNBdHN8?g_st=aw */}
              <a
                href={KPM_DATA.locationDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Area (7 Columns) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-800 bg-[#121316] relative min-h-[340px] sm:min-h-[400px] flex flex-col justify-between shadow-2xl">
            {/* Top Bar on Map */}
            <div className="relative z-20 p-3 sm:p-4 bg-black/80 backdrop-blur-md border-b border-neutral-800/80 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  KPM Fried Chicken · Live Stall Hub
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* View switcher */}
                <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-lg p-0.5 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setMapMode('embed')}
                    className={`px-2 py-1 rounded-md transition-colors cursor-pointer font-semibold ${
                      mapMode === 'embed' ? 'bg-amber-400 text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Google Map
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapMode('satellite')}
                    className={`px-2 py-1 rounded-md transition-colors cursor-pointer font-semibold ${
                      mapMode === 'satellite' ? 'bg-amber-400 text-black' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Radar View
                  </button>
                </div>

                <a
                  href={KPM_DATA.locationDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-black/60 px-2.5 py-1.5 rounded-lg border border-neutral-800 hover:border-amber-400 transition-colors"
                  title="Open in Google Maps App"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Map Canvas / Embed */}
            <div className="relative flex-1 w-full min-h-[260px] overflow-hidden">
              {mapMode === 'embed' ? (
                <div className="absolute inset-0 w-full h-full">
                  <iframe
                    title="KPM Fried Chicken Google Maps Location"
                    src="https://maps.google.com/maps?q=KPM+Fried+Chicken,+Salem+Main+Rd,+Komarapalayam,+Tamil+Nadu+638183&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter contrast-[1.08] saturate-[1.1]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-2 right-2 pointer-events-auto">
                    <a
                      href={KPM_DATA.locationDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 bg-black/90 text-amber-400 text-[10px] font-bold rounded border border-amber-500/50 shadow flex items-center gap-1 hover:bg-black"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Open Pin in Google Maps</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Satellite / Graphic Radar View */
                <div className="absolute inset-0 bg-[#121316] flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#52525b_1px,transparent_1px),linear-gradient(to_bottom,#52525b_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute top-1/2 left-0 right-0 h-12 bg-neutral-800/80 -translate-y-1/2 -rotate-1 border-t border-b border-amber-500/30 flex items-center justify-center overflow-hidden">
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-400 uppercase whitespace-nowrap">
                      SALEM MAIN ROAD • KOMARAPALAYAM HIGHWAY • SALEM MAIN ROAD
                    </span>
                  </div>

                  <div className="relative z-10 self-center my-auto flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-red-600 to-amber-500 p-0.5 shadow-2xl animate-pulse">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-0.5">
                        <img
                          src={KPM_DATA.images.logo}
                          alt="KPM Pin"
                          className="w-full h-full rounded-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    <div className="w-2.5 h-2.5 bg-amber-400 rotate-45 -mt-1 shadow-md" />

                    <div className="mt-2 px-3 py-1.5 rounded-lg bg-black/95 backdrop-blur-md border border-amber-500/60 text-center shadow-xl max-w-[240px]">
                      <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                        KPM Fried Chicken
                      </div>
                      <div className="text-[10px] text-amber-400 truncate">
                        Front of Old Saravana Theatre
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Note */}
            <div className="relative z-20 p-2.5 sm:p-3 bg-black/90 border-t border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] text-neutral-400">
              <span>Salem Main Road, Komarapalayam · Front of Old Saravana Theatre</span>
              <a
                href={KPM_DATA.locationDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>maps.app.goo.gl/Gt9cnFybxVXNBdHN8</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
