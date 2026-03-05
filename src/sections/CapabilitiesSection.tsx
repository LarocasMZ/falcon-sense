'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '@/lib/data';
import { Eye, Layers, Map, Satellite, Zap, Search } from 'lucide-react';

const iconMap = {
  eye: <Eye className="w-8 h-8" />,
  talons: <Layers className="w-8 h-8" />,
  orbit: <Map className="w-8 h-8" />,
  satellite: <Satellite className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  search: <Search className="w-8 h-8" />,
};

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="section-padding bg-white text-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Advanced Sensing & Data Capture</h3>
          <p className="text-xl text-slate-600">
            We utilize a specialized range of sensors and platforms to deliver actionable 
            intelligence for complex industrial requirements.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-slate-200 rounded-2xl hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                {iconMap[cap.icon as keyof typeof iconMap] || <Layers className="w-8 h-8" />}
              </div>
              <h4 className="text-2xl font-bold mb-4">{cap.name}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {cap.description}
              </p>
              
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Specifications</div>
                <div className="grid grid-cols-2 gap-4">
                  {cap.technicalSpecs.map((spec, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">{spec.label}</div>
                      <div className="text-sm font-bold text-slate-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
