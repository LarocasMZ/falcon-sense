'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, MapPin } from 'lucide-react';

const backgroundImages = [
  '/images/drone-mine.png',
  '/images/landsat.png',
  '/images/lidar.png',
];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-4xl">
          {/* Professional Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded">
              Licensed & Certified
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium uppercase tracking-widest">
              <MapPin size={12} className="text-primary" />
              Mozambique
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            Precision <span className="text-primary">Geospatial</span><br />
            Intelligence Solutions.
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed"
          >
            Professional aerial surveying, LiDAR mapping, and multi-spectral analysis 
            delivering survey-grade data for mining, agriculture, and infrastructure projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link href="#contact" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all flex items-center justify-center gap-3">
              Request a Consultation
              <ArrowRight size={20} />
            </Link>
            <Link href="#services" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-lg transition-all flex items-center justify-center">
              Our Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 pt-10 border-t border-white/20 flex flex-wrap gap-12"
          >
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Projects in Mozambique</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">&lt;3cm</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Absolute Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">Certified</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Drone Pilots & Surveyors</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronRight size={32} className="rotate-90" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
