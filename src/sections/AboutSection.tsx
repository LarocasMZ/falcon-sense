'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-falcon-black relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-falcon-red/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-falcon-cyan/10 blur-3xl rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-falcon-red uppercase tracking-[0.2em] mb-4">About Falcon Sense</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-falcon-white">
              Leading <span className="text-gradient-red">Mozambique's</span> Geospatial Future.
            </h3>

            <p className="text-xl text-falcon-gray mb-8 leading-relaxed">
              Based in Maputo, Falcon Sense is a dedicated geospatial intelligence provider.
              We combine professional drone operations with advanced analytical software
              to deliver precision data for Mozambique's growing industrial landscape.
            </p>

            <p className="text-falcon-gray/70 mb-12 leading-relaxed">
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
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CheckCircle2 className="text-falcon-red w-5 h-5 shrink-0" />
                  <span className="font-bold text-falcon-silver">{item}</span>
                </motion.div>
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
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-falcon-border">
              <img
                src="https://images.unsplash.com/photo-1579389083395-4507e9f4a1d1?auto=format&fit=crop&q=80&w=1200"
                alt="Professional team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-falcon-red/20 to-falcon-cyan/10 mix-blend-overlay" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-falcon-surface border border-falcon-border p-8 rounded-2xl shadow-2xl text-falcon-white hidden md:block">
              <div className="text-5xl font-black text-falcon-red mb-2">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-falcon-gray">Local Commitment</div>
            </div>

            <div className="absolute -top-10 -right-10 bg-gradient-red p-8 rounded-2xl shadow-glow-red text-falcon-white hidden md:block">
              <div className="text-5xl font-black mb-2">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-falcon-white/70">Years of Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
