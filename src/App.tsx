import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { FranchiseSection } from './components/FranchiseSection';
import { CartShowcase } from './components/CartShowcase';
import { FranchiseBenefits } from './components/FranchiseBenefits';
import { PackageInclusions } from './components/PackageInclusions';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [modalImage, setModalImage] = useState<{ isOpen: boolean; src: string; title: string }>({
    isOpen: false,
    src: '',
    title: '',
  });

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

  const handleOpenImage = (src: string, title: string) => {
    setModalImage({ isOpen: true, src, title });
  };

  const handleCloseImage = () => {
    setModalImage(prev => ({ ...prev, isOpen: false }));
  };

  // Active section detection during scroll
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'franchise',
      'cart',
      'benefits',
      'package',
      'menu',
      'gallery',
      'location',
      'enquiry',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-neutral-100 flex flex-col antialiased selection:bg-red-600 selection:text-white">
      {/* Sticky Top Bar with Active Section Indicator */}
      <Navbar activeSection={activeSection} />

      {/* Main Single-Page Content: EXACT 11 Section Order */}
      <main className="flex-1 pb-24 sm:pb-0">
        {/* 1. HOME / HERO */}
        <Hero
          onExploreClick={() => scrollToSection('franchise')}
          onPackageClick={() => scrollToSection('package')}
        />

        {/* 2. ABOUT KPM */}
        <Introduction
          onLearnMoreClick={() => scrollToSection('franchise')}
        />

        {/* 3. FRANCHISE */}
        <FranchiseSection
          onViewPackageClick={() => scrollToSection('package')}
          onEnquireClick={() => scrollToSection('enquiry')}
        />

        {/* 4. 8 × 4 PREMIUM CART */}
        <CartShowcase
          onViewPackageClick={() => scrollToSection('package')}
          onEnquireClick={() => scrollToSection('enquiry')}
          onOpenImageModal={handleOpenImage}
        />

        {/* 5. WHY KPM */}
        <FranchiseBenefits
          onEnquireClick={() => scrollToSection('enquiry')}
        />

        {/* 6. FRANCHISE PACKAGE (18 Inclusions & Investment) */}
        <PackageInclusions
          onEnquireClick={() => scrollToSection('enquiry')}
        />

        {/* 7. MENU (In-Page Expandable) */}
        <MenuSection
          onOpenImageModal={handleOpenImage}
          onEnquireClick={() => scrollToSection('enquiry')}
        />

        {/* 8. GALLERY (With Lightbox) */}
        <GallerySection
          onOpenImageModal={handleOpenImage}
        />

        {/* 9. LOCATION */}
        <LocationSection />

        {/* 10. FRANCHISE ENQUIRY */}
        <EnquiryForm />
      </main>

      {/* 11. CONTACT / FOOTER */}
      <Footer />

      {/* Mobile Fixed Action Bar (Call, WhatsApp, Directions) */}
      <MobileActionBar />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={modalImage.isOpen}
        imageSrc={modalImage.src}
        title={modalImage.title}
        onClose={handleCloseImage}
      />
    </div>
  );
}
