'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">About Falcon Sense</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Leading Mozambique's Geospatial Future.
            </h3>
            
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Based in Maputo, Falcon Sense is a dedicated geospatial intelligence provider. 
              We combine professional drone operations with advanced analytical software 
              to deliver precision data for Mozambique's growing industrial landscape.
            </p>
            
            <p className="text-white/60 mb-12 leading-relaxed">
              Our mission is to empower decision-makers with the most accurate and 
              timely spatial information possible, ensuring efficiency and safety in every project.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Certified Drone Pilots',
                'Survey-Grade Accuracy',
                'Local Expertise',
                'Fast Turnaround',
                'Custom Analytics',
                'Multi-Sector Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-bold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579389083395-4507e9f4a1d1?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl text-slate-900 hidden md:block">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Local Commitment</div>
            </div>
            
            <div className="absolute -top-10 -right-10 bg-primary p-8 rounded-2xl shadow-2xl text-white hidden md:block">
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">Years of Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
