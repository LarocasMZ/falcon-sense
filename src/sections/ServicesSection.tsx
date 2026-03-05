'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Aerial Surveying',
    description: 'Autonomous UAV mapping operations with survey-grade RTK/PPK GNSS integration.',
    image: 'https://images.unsplash.com/photo-1506947411487-a5671bf91b3d?auto=format&fit=crop&q=80&w=1200', // Industrial UAV being prepared for mapping flight
  },
  {
    title: 'LiDAR Scanning',
    description: 'High-density laser scanning for topographic modeling and structural analysis.',
    image: 'https://images.unsplash.com/photo-1581092334651-dd3c6543ed15?auto=format&fit=crop&q=80&w=1200', // Close-up on industrial laser sensor hardware
  },
  {
    title: 'Satellite Imagery',
    description: 'Orbital Earth observation data (SAR, Multispectral) for regional intelligence.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200', // High-fidelity Earth observation perspective
  },
  {
    title: 'GIS Analysis',
    description: 'Advanced spatial analytics, multi-layer GIS processing, and spectral indices.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', // Dark-mode spatial analytics dashboard
  },
  {
    title: '3D Modeling',
    description: 'Digital twin generation, mesh reconstruction, and structural digital inventories.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200', // Wireframe/Point-cloud structure visualization
  },
  {
    title: 'Environmental Monitoring',
    description: 'Multispectral change detection, NDVI analysis, and habitat surveillance.',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=1200', // Forest canopy infrared/thermal view
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">Operations & Intelligence</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Geospatial Capabilities</h3>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Falcon Sense provides survey-grade data acquisition through advanced aerial 
            platforms and remote sensing technologies. All operations are conducted by 
            licensed pilots and geomatics engineers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10" />
                <div className="absolute bottom-6 left-8">
                  <h4 className="text-xl font-bold text-white tracking-tight">{service.title}</h4>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                  Technical Overview <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
