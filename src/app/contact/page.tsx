'use client';

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/sections/ContactSection';

export default function ContactPage() {
  return (
    <main className="relative bg-falcon-black min-h-screen">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  );
}
