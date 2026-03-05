'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Pickaxe, Wheat, Building2, Trees, ArrowRight } from 'lucide-react';

const INDUSTRIES = [
  { id: 'mining', name: 'Mining', icon: 'pickaxe', predatorFocus: 'Stockpile volume, pit mapping', activeHunts: '12' },
  { id: 'agriculture', name: 'Agriculture', icon: 'crop', predatorFocus: 'Precision farming, yield health', activeHunts: '25' },
  { id: 'infrastructure', name: 'Infrastructure', icon: 'building', predatorFocus: 'Asset inspection, road mapping', activeHunts: '18' },
  { id: 'environment', name: 'Environment', icon: 'tree', predatorFocus: 'Conservation, land monitoring', activeHunts: '8' },
];

const iconMap: Record<string, React.ReactNode> = {
  pickaxe: <Pickaxe size={24} />,
  crop: <Wheat size={24} />,
  building: <Building2 size={24} />,
  tree: <Trees size={24} />,
};

const industryImages: Record<string, string> = {
  mining: '/images/drone-mine.png',
  agriculture: '/images/landsat.png',
  infrastructure: '/images/lidar.png',
  environment: '/images/drone-mine.png',
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="section-padding bg-falcon-dark relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-falcon-red/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-falcon-cyan/10 blur-3xl rounded-full" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-falcon-gray uppercase tracking-[0.4em] mb-4">Industrial Deployment</h2>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tight text-falcon-white"
            >
              Sector <span className="text-gradient-cyan">Solutions</span>
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-falcon-gray max-w-sm leading-relaxed"
          >
            Systematic data acquisition tailored for Mozambique's high-value industrial sectors.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-falcon-border"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img
                  src={industryImages[industry.id]}
                  alt={industry.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-falcon-black/60 via-falcon-black/40 to-falcon-black/90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-falcon-red/90 text-falcon-white rounded-lg flex items-center justify-center group-hover:shadow-glow-red transition-all duration-300">
                    {iconMap[industry.id] || <Building2 size={24} />}
                  </div>
                  <h4 className="text-2xl font-black text-falcon-white tracking-tight">{industry.name}</h4>
                </div>

                <p className="text-falcon-gray text-sm mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 leading-relaxed">
                  {industry.predatorFocus}
                </p>

                <div className="flex items-center gap-2 text-falcon-red font-bold uppercase tracking-widest text-xs">
                  Case Study <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-falcon-surface/80 backdrop-blur border border-falcon-border rounded-md">
                <span className="text-[10px] font-bold text-falcon-gray uppercase tracking-widest">
                  Active: {industry.activeHunts}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
