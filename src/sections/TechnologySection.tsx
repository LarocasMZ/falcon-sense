'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TECHNOLOGY_LAYERS } from '@/lib/data';
import { CheckCircle2, Cpu, Drone, Shield, Database, LayoutGrid } from 'lucide-react';

const iconMap = {
  drone: <Drone className="w-6 h-6" />,
  multirotor: <LayoutGrid className="w-6 h-6" />,
  satellite: <Database className="w-6 h-6" />,
  lidar: <Cpu className="w-6 h-6" />,
  camera: <Shield className="w-6 h-6" />,
  thermal: <Shield className="w-6 h-6" />,
};

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="section-padding bg-slate-50 text-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Technology</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Cutting-Edge Hardware & Software</h3>
          <p className="text-lg text-slate-600">
            We invest in the best-in-class equipment and processing infrastructure to 
            ensure absolute precision and reliability in every mission.
          </p>
        </div>

        <div className="space-y-32">
          {TECHNOLOGY_LAYERS.map((layer, index) => (
            <div 
              key={layer.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <img 
                    src={index === 0 ? "https://images.unsplash.com/photo-1506947411487-a5671bf91b3d?auto=format&fit=crop&q=80&w=1200" : "https://images.unsplash.com/photo-1581092334651-dd3c6543ed15?auto=format&fit=crop&q=80&w=1200"} 
                    alt={layer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full shadow-lg">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">0{index + 1} // {layer.name}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h4 className="text-4xl font-bold mb-6">{layer.title}</h4>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  {layer.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  {layer.items.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all"
                    >
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                        {iconMap[item.icon as keyof typeof iconMap] || <CheckCircle2 className="w-5 h-5" />}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 mb-1">{item.name}</h5>
                        <p className="text-sm text-slate-500">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
