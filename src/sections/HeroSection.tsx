'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, MapPin, Cpu, Target, Shield } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-falcon-black">
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* Red Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-falcon-red/10 via-transparent to-transparent opacity-30" />

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
            {/* Dark overlay with red tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-falcon-black/70 via-falcon-black/50 to-falcon-black/90" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-10 text-falcon-white">
        <div className="max-w-5xl">
          {/* Logo Center Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-falcon-red/20 blur-3xl rounded-full" />
              <img 
                src="/images/FalconSenseLOGO.png" 
                alt="FalconSense"
                className="h-32 md:h-40 w-auto object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8 flex-wrap"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-falcon-red/20 border border-falcon-red/50 rounded-full backdrop-blur-sm">
              <Shield size={14} className="text-falcon-red" />
              <span className="text-falcon-red text-xs font-bold uppercase tracking-[0.2em]">
                Licensed & Certified
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-falcon-surface border border-falcon-border rounded-full backdrop-blur-sm">
              <MapPin size={14} className="text-falcon-cyan" />
              <span className="text-falcon-silver text-xs font-bold uppercase tracking-widest">
                Mozambique
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-center"
          >
            <span className="text-falcon-silver">See the</span>{' '}
            <span className="text-gradient-red">Unseen</span>
            <br />
            <span className="text-falcon-silver">Know the</span>{' '}
            <span className="text-gradient-cyan">Unknown</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-falcon-gray mb-12 max-w-3xl leading-relaxed mx-auto text-center"
          >
            Professional geospatial intelligence delivering <span className="text-falcon-red font-semibold">survey-grade data</span> for mining, agriculture, and infrastructure across Mozambique.
          </motion.p>

          {/* CTA Buttons with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-red hover:shadow-glow-red text-falcon-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
            >
              <Target size={20} className="group-hover:rotate-45 transition-transform" />
              Request Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 bg-falcon-surface/80 hover:bg-falcon-surface text-falcon-silver border border-falcon-border hover:border-falcon-red/50 font-bold rounded-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 pt-10 border-t border-falcon-border flex flex-wrap justify-center gap-16"
          >
            <div className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-falcon-red/20 rounded-xl group-hover:shadow-glow-red transition-all duration-300">
                <Cpu size={24} className="text-falcon-red" />
              </div>
              <div className="text-3xl font-black text-falcon-white mb-1">50+</div>
              <div className="text-[10px] text-falcon-gray uppercase tracking-widest font-bold">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-falcon-cyan/20 rounded-xl group-hover:shadow-glow-cyan transition-all duration-300">
                <Target size={24} className="text-falcon-cyan" />
              </div>
              <div className="text-3xl font-black text-falcon-white mb-1">&lt;3cm</div>
              <div className="text-[10px] text-falcon-gray uppercase tracking-widest font-bold">Absolute Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-falcon-red/20 rounded-xl group-hover:shadow-glow-red transition-all duration-300">
                <Shield size={24} className="text-falcon-red" />
              </div>
              <div className="text-3xl font-black text-falcon-white mb-1">100%</div>
              <div className="text-[10px] text-falcon-gray uppercase tracking-widest font-bold">Certified Team</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint with Glow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-falcon-red/50"
      >
        <ChevronRight size={32} className="rotate-90 drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
