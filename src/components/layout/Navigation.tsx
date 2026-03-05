'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Technology', href: '#technology' },
  { name: 'Industries', href: '#industries' },
  { name: 'About', href: '#about' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">F</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>FALCON SENSE</span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-primary' : 'text-primary'}`}>Geospatial</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                    isScrolled ? 'text-slate-600 hover:text-primary' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="#contact" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-all">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-900 hover:text-primary transition-colors flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={20} className="text-slate-300" />
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="w-full py-4 bg-primary text-white text-center font-bold rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
