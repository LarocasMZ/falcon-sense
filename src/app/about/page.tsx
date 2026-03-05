'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/sections/AboutSection';

export default function AboutPage() {
  return (
    <main className="relative bg-falcon-black min-h-screen">
      <Navigation />
      <AboutSection />
      <Footer />
    </main>
  );
}
