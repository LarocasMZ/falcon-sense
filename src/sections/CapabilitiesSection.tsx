'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Map, Satellite, Zap, Search } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 1,
    name: 'Advanced Imaging',
    description: 'High-resolution imagery across multiple spectrums for detailed terrain insights.',
    icon: 'eye',
    technicalSpecs: [
      { label: 'Resolution', value: '3cm/pixel' },
      { label: 'Spectral Bands', value: '5-200' },
      { label: 'Accuracy', value: 'Sub-decimeter' },
      { label: 'Coverage', value: 'Up to 500ha/day' },
    ],
  },
  {
    id: 2,
    name: 'LiDAR Scanning',
    description: 'Laser scanning for highly accurate digital elevation models and 3D representations.',
    icon: 'talons',
    technicalSpecs: [
      { label: 'Point Density', value: '200+ pts/m²' },
      { label: 'Vertical Accuracy', value: '< 3cm' },
      { label: 'Sensor Range', value: '250m' },
      { label: 'Data Format', value: 'LAS/LAZ' },
    ],
  },
  {
    id: 3,
    name: 'Topographic Mapping',
    description: 'Survey-grade GNSS equipment delivering topographic maps with sub-centimeter precision.',
    icon: 'orbit',
    technicalSpecs: [
      { label: 'RTK/PPK', value: 'Integrated' },
      { label: 'GCPs', value: 'Survey-grade' },
      { label: 'Orthomosaic Res', value: '1.5cm' },
      { label: 'Format', value: 'GeoTIFF/DWG' },
    ],
  },
];

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
    <section id="capabilities" className="section-padding bg-falcon-dark relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-falcon-cyan/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-falcon-red/10 blur-3xl rounded-full" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-falcon-cyan uppercase tracking-[0.2em] mb-4">Our Capabilities</h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 text-falcon-white"
          >
            Advanced <span className="text-gradient-cyan">Sensing</span> & Data Capture
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-falcon-gray"
          >
            We utilize specialized sensors and platforms to deliver actionable
            intelligence for complex industrial requirements.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 card-falcon rounded-2xl group"
            >
              <div className="w-16 h-16 bg-falcon-surface border border-falcon-border rounded-xl flex items-center justify-center mb-8 group-hover:bg-falcon-red/20 group-hover:border-falcon-red/50 transition-all duration-300">
                <div className="text-falcon-cyan group-hover:text-falcon-red transition-colors">
                  {iconMap[cap.icon as keyof typeof iconMap] || <Layers className="w-8 h-8" />}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-falcon-white mb-4">{cap.name}</h4>
              <p className="text-falcon-gray mb-8 leading-relaxed">
                {cap.description}
              </p>

              <div className="space-y-4 pt-6 border-t border-falcon-border">
                <div className="text-xs font-bold text-falcon-gray uppercase tracking-widest">Specifications</div>
                <div className="grid grid-cols-2 gap-4">
                  {cap.technicalSpecs.map((spec, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] text-falcon-gray uppercase font-bold">{spec.label}</div>
                      <div className="text-sm font-bold text-falcon-white">{spec.value}</div>
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
