'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '@/lib/data';
import { Pickaxe, Wheat, Building2, Trees, ArrowRight } from 'lucide-react';

const iconMap = {
  pickaxe: <Pickaxe size={24} />,
  crop: <Wheat size={24} />,
  building: <Building2 size={24} />,
  tree: <Trees size={24} />,
};

const industryImages = {
  mining: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=1200", // Engineering perspective of large open pit mine
  agriculture: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=1200", // Multispectral/NDVI style agricultural terrain view
  infrastructure: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200", // Industrial inspection of bridge/concrete structure
  environment: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200", // Technical aerial view of mangrove/ecological system
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="section-padding bg-slate-100">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">Industrial Deployment</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Sector Solutions</h3>
          </div>
          <p className="text-lg text-slate-500 max-w-sm leading-relaxed font-medium">
            Systematic data acquisition tailored for Mozambique's high-value industrial sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={industryImages[industry.id as keyof typeof industryImages]} 
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/90 text-white rounded-lg flex items-center justify-center">
                    {iconMap[industry.icon as keyof typeof iconMap] || <Building2 size={24} />}
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight">{industry.name}</h4>
                </div>
                
                <p className="text-white/90 text-sm mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 leading-relaxed">
                  {industry.predatorFocus}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                  Case Study <ArrowRight size={14} />
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-6 right-6 px-4 py-1 bg-slate-900/60 backdrop-blur-md border border-white/20 rounded-md">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  Active Operation: {industry.activeHunts}
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
