'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
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
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/FalconLOGO.svg"
              alt="FalconSense"
              className="h-24 md:h-32 w-auto object-contain transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                    isScrolled ? 'text-falcon-gray hover:text-falcon-red' : 'text-falcon-silver/80 hover:text-falcon-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="#contact"
              className="px-6 py-3 bg-gradient-red hover:shadow-glow-red text-falcon-white text-sm font-bold rounded-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-falcon-silver hover:text-falcon-red' : 'text-falcon-silver hover:text-falcon-red'
            }`}
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
            className="lg:hidden bg-falcon-dark border-t border-falcon-border overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-falcon-silver hover:text-falcon-red transition-colors flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={20} className="text-falcon-border" />
                </Link>
              ))}
              <Link
                href="#contact"
                className="w-full py-4 bg-gradient-red text-falcon-white text-center font-bold rounded-xl hover:shadow-glow-red transition-all"
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
