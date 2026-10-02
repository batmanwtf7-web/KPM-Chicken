import React from 'react';
import { Phone, MessageSquare, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 68;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="bg-black text-neutral-400 text-xs border-t border-neutral-800/80 pt-12 pb-24 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10">
          {/* Brand Column (2 columns) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-400/90 bg-black shrink-0">
                <img
                  src={KPM_DATA.images.logo}
                  alt="KPM Fried Chicken"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-royal font-bold text-base text-white tracking-wider">
                KPM <span className="text-red-600">FRIED CHICKEN</span>
              </span>
            </div>

            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              Official Franchise Presentation for the KPM 8 × 4 Premium Cart. Turnkey equipment, zero royalty, secret starter masala, and ongoing brand support.
            </p>

            <div className="text-[11px] text-neutral-500">
              Brand Identity: Red · Orange · Yellow · Black · White
            </div>
          </div>

          {/* Franchise Section Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Franchise
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('franchise')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Franchise Concept
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cart')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  8 × 4 Premium Cart
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Why KPM / 4 Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('package')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  18 Package Inclusions
                </button>
              </li>
            </ul>
          </div>

          {/* Explore Section Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  About KPM
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Food Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Cart & Food Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Stall Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('enquiry')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Franchise Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={KPM_DATA.phoneUrl} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="tabular-nums">{KPM_DATA.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a href={KPM_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="tabular-nums">WhatsApp: {KPM_DATA.phone}</span>
                </a>
              </li>
              <li>
                <a href={KPM_DATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>@{KPM_DATA.instagram}</span>
                </a>
              </li>
              <li className="pt-1 flex items-start gap-1.5 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <a
                  href={KPM_DATA.locationDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] leading-snug hover:text-amber-400 transition-colors cursor-pointer"
                  title="Open in Google Maps"
                >
                  {KPM_DATA.location}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-500 text-[11px]">
          <div>
            © 2026 KPM Fried Chicken. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>8 × 4 Cart Franchise Portal</span>
            <button
              onClick={() => scrollToSection('home')}
              className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
