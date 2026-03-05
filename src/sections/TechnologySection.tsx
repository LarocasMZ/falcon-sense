'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Drone, Shield, Database, LayoutGrid } from 'lucide-react';

const TECHNOLOGY_LAYERS = [
  {
    id: 1,
    name: 'Platform Fleet',
    title: 'Professional Aerial Systems',
    description: 'Diverse range of VTOL, fixed-wing, and multi-rotor platforms.',
    image: '/images/drone-mine.png',
    items: [
      { name: 'Fixed-Wing VTOL', description: 'Long-endurance mapping platforms', icon: 'drone' },
      { name: 'Industrial Multirotors', description: 'High-payload sensor carries', icon: 'multirotor' },
      { name: 'Satellite Constellations', description: 'Regional monitoring access', icon: 'satellite' },
    ],
  },
  {
    id: 2,
    name: 'Sensor Payloads',
    title: 'Precision Data Collection',
    description: 'Industry-leading LiDAR, multispectral, and thermal sensors.',
    image: '/images/lidar.png',
    items: [
      { name: 'LiDAR Scanners', description: 'Riegl and Livox integration', icon: 'lidar' },
      { name: 'Multispectral Cameras', description: 'MicaSense RedEdge-P', icon: 'camera' },
      { name: 'Thermal Radiometric', description: 'FLIR high-res sensors', icon: 'thermal' },
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  drone: <Drone className="w-6 h-6" />,
  multirotor: <LayoutGrid className="w-6 h-6" />,
  satellite: <Database className="w-6 h-6" />,
  lidar: <Cpu className="w-6 h-6" />,
  camera: <Shield className="w-6 h-6" />,
  thermal: <Shield className="w-6 h-6" />,
};

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="section-padding bg-falcon-black relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-falcon-red/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-falcon-cyan/10 blur-3xl rounded-full" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-falcon-red uppercase tracking-[0.2em] mb-4">Our Technology</h2>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 text-falcon-white"
          >
            Cutting-Edge <span className="text-gradient-red">Hardware</span> & Software
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-falcon-gray"
          >
            We invest in best-in-class equipment and processing infrastructure to
            ensure absolute precision and reliability in every mission.
          </motion.p>
        </div>

        <div className="space-y-32">
          {TECHNOLOGY_LAYERS.map((layer, index) => (
            <div
              key={layer.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-falcon-border"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-falcon-red/20 to-falcon-cyan/10" />
                  <img
                    src={layer.image}
                    alt={layer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-falcon-surface/90 backdrop-blur border border-falcon-border rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-falcon-red">
                      0{index + 1} // {layer.name}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <motion.h4
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-black text-falcon-white mb-6"
                >
                  {layer.title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-falcon-gray mb-10 leading-relaxed"
                >
                  {layer.description}
                </motion.p>

                <div className="grid sm:grid-cols-2 gap-8">
                  {layer.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl hover:bg-falcon-surface border border-transparent hover:border-falcon-red/30 transition-all group"
                    >
                      <div className="w-10 h-10 bg-falcon-red/20 text-falcon-red rounded-lg flex items-center justify-center shrink-0 group-hover:bg-falcon-red group-hover:text-falcon-white transition-all">
                        {iconMap[item.icon] || <Cpu className="w-5 h-5" />}
                      </div>
                      <div>
                        <h5 className="font-bold text-falcon-white mb-1">{item.name}</h5>
                        <p className="text-sm text-falcon-gray">{item.description}</p>
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
