import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { KPM_DATA } from '../data/kpmData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'FRANCHISE', href: '#franchise', id: 'franchise' },
    { label: 'PACKAGE', href: '#package', id: 'package' },
    { label: 'MENU', href: '#menu', id: 'menu' },
    { label: 'LOCATION', href: '#location', id: 'location' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0b0d]/95 backdrop-blur-md border-b border-amber-500/25 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Official Logo + Brand Title */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg shrink-0 cursor-pointer text-left"
              aria-label="KPM Fried Chicken Home"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-400/90 bg-black shadow-md shadow-red-950/40 shrink-0">
                <img
                  src={KPM_DATA.images.logo}
                  alt="KPM Fried Chicken Official Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-royal font-bold tracking-wider text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors uppercase leading-none">
                  KPM <span className="text-red-600 font-extrabold">FRIED CHICKEN</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-amber-400/90 font-semibold uppercase mt-0.5 hidden xs:block">
                  8 × 4 Premium Cart Franchise
                </span>
              </div>
            </button>

            {/* Zone 2: Desktop Navigation Links with Active State Detection */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold tracking-wider text-neutral-300">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`relative py-1 uppercase transition-colors cursor-pointer ${
                      isActive
                        ? 'text-amber-400 font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Direct Phone Call & FRANCHISE ENQUIRY Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={KPM_DATA.phoneUrl}
                className="flex items-center gap-1.5 text-xs font-bold text-neutral-300 hover:text-white px-3 py-2 rounded-lg border border-neutral-800 hover:border-amber-500/50 transition-colors"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="tabular-nums tracking-wide">{KPM_DATA.phone}</span>
              </a>

              <button
                onClick={() => scrollToSection('enquiry')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-lg shadow-red-950/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Franchise Enquiry</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Mobile Controls Right: Direct Phone Shortcut + Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={KPM_DATA.phoneUrl}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 active:scale-95 transition-all"
                aria-label="Call KPM Now"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-white hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0b0d]/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:hidden animate-in fade-in duration-200 overflow-y-auto">
          {/* Top Bar with Logo & Close button */}
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-400 bg-black">
                <img
                  src={KPM_DATA.images.logo}
                  alt="KPM Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-royal font-bold text-sm text-white">
                  KPM <span className="text-red-600">FRIED CHICKEN</span>
                </div>
                <div className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">
                  8 × 4 Cart Franchise
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:text-amber-400"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Section Navigation Items */}
          <nav className="my-auto py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left py-3 px-3 rounded-xl text-base font-royal font-bold transition-colors flex items-center justify-between group active:bg-neutral-900 ${
                    isActive
                      ? 'text-amber-400 bg-neutral-900/80 border border-amber-500/40'
                      : 'text-neutral-200 hover:text-amber-400 hover:bg-neutral-900/60'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className={`text-sm ${isActive ? 'text-amber-400 font-bold' : 'text-neutral-600 group-hover:text-amber-400'}`}>
                    {isActive ? '●' : '↓'}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Drawer Bottom Actions: FRANCHISE ENQUIRY */}
          <div className="pt-3 border-t border-neutral-800 space-y-2.5">
            <button
              onClick={() => scrollToSection('enquiry')}
              className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-lg shadow-red-950/40"
            >
              <span>FRANCHISE ENQUIRY</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
