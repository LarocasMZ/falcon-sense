'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ServicesSection from '@/sections/ServicesSection';

export default function CapabilitiesPage() {
  return (
    <main className="relative bg-falcon-black min-h-screen">
      <Navigation />
      <ServicesSection />
      <Footer />
    </main>
  );
}
