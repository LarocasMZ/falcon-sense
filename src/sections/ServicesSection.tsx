'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Satellite, Scan, Map, Database, Box, Leaf } from 'lucide-react';

const services = [
  {
    title: 'Aerial Surveying',
    description: 'Autonomous UAV mapping with survey-grade RTK/PPK GNSS integration.',
    icon: Satellite,
    color: 'falcon-red',
  },
  {
    title: 'LiDAR Scanning',
    description: 'High-density laser scanning for topographic modeling and analysis.',
    icon: Scan,
    color: 'falcon-cyan',
  },
  {
    title: 'Satellite Imagery',
    description: 'Orbital Earth observation data (SAR, Multispectral) for regional intelligence.',
    icon: Map,
    color: 'falcon-red',
  },
  {
    title: 'GIS Analysis',
    description: 'Advanced spatial analytics, multi-layer GIS processing, spectral indices.',
    icon: Database,
    color: 'falcon-cyan',
  },
  {
    title: '3D Modeling',
    description: 'Digital twin generation, mesh reconstruction, structural inventories.',
    icon: Box,
    color: 'falcon-red',
  },
  {
    title: 'Environmental Monitoring',
    description: 'Multispectral change detection, NDVI analysis, habitat surveillance.',
    icon: Leaf,
    color: 'falcon-cyan',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-falcon-dark relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Red Glow Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-falcon-red/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-falcon-cyan/10 blur-3xl rounded-full" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-falcon-red uppercase tracking-[0.4em] mb-4">
              Operations & Intelligence
            </h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-8 text-falcon-white tracking-tight"
          >
            Geospatial <span className="text-gradient-red">Capabilities</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-falcon-gray max-w-3xl leading-relaxed"
          >
            Falcon Sense provides survey-grade data acquisition through advanced aerial
            platforms and remote sensing technologies. All operations are conducted by
            licensed pilots and geomatics engineers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group card-falcon rounded-2xl overflow-hidden"
            >
              {/* Icon Header */}
              <div className="p-8 border-b border-falcon-border">
                <div className={`w-14 h-14 bg-falcon-${service.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className={`text-falcon-${service.color}`} />
                </div>
                <h4 className="text-2xl font-bold text-falcon-white mb-3 group-hover:text-falcon-red transition-colors">
                  {service.title}
                </h4>
                <p className="text-falcon-gray leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Footer with CTA */}
              <div className="px-8 py-5 bg-falcon-surface/50 flex items-center justify-between">
                <span className="text-xs font-bold text-falcon-gray uppercase tracking-widest">
                  Technical Overview
                </span>
                <ArrowRight 
                  size={18} 
                  className={`text-falcon-${service.color} group-hover:translate-x-2 transition-transform`} 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
