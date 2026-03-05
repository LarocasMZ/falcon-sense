'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import AboutSection from '@/sections/AboutSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <main className="relative bg-falcon-black min-h-screen">
      <Navigation />

      <div className="relative z-10">
        <HeroSection />

        <div className="space-y-0">
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
