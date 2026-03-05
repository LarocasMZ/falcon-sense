'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. We will contact you shortly.');
  };

  return (
    <section id="contact" className="section-padding bg-falcon-black relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-falcon-red/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-falcon-cyan/10 blur-3xl rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-falcon-red uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-8 leading-tight text-falcon-white"
            >
              Ready to Discuss <span className="text-gradient-red">Your Project?</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-falcon-gray mb-12 max-w-md"
            >
              Get in touch with our team of experts to receive a customized quote
              for your geospatial needs in Mozambique.
            </motion.p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-center group"
              >
                <div className="w-14 h-14 bg-falcon-surface border border-falcon-border rounded-2xl flex items-center justify-center text-falcon-red group-hover:shadow-glow-red transition-all duration-300 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-falcon-gray uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-lg font-bold text-falcon-white">info@falconsense.com</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-center group"
              >
                <div className="w-14 h-14 bg-falcon-surface border border-falcon-border rounded-2xl flex items-center justify-center text-falcon-cyan group-hover:shadow-glow-cyan transition-all duration-300 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-falcon-gray uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-lg font-bold text-falcon-white">+258 84 XXX XXXX</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-center group"
              >
                <div className="w-14 h-14 bg-falcon-surface border border-falcon-border rounded-2xl flex items-center justify-center text-falcon-red group-hover:shadow-glow-red transition-all duration-300 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-falcon-gray uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-lg font-bold text-falcon-white">Maputo, Mozambique</div>
                </div>
              </motion.div>
            </div>

            {/* Map Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-falcon-border h-48 relative grayscale"
            >
              <img
                src="https://images.unsplash.com/photo-1548345660-aefb1fbb44fe?auto=format&fit=crop&q=80&w=800"
                alt="Map view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-falcon-red/20 to-falcon-cyan/10 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-2 bg-falcon-surface border border-falcon-border rounded-full shadow-2xl font-bold text-falcon-white flex items-center gap-2">
                  <MapPin size={16} className="text-falcon-red" /> Maputo Operations Center
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-falcon-surface p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-falcon-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-falcon-gray uppercase tracking-widest mb-2 px-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-falcon-dark border border-falcon-border rounded-xl focus:border-falcon-red focus:outline-none transition-all text-falcon-white placeholder-falcon-gray"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-falcon-gray uppercase tracking-widest mb-2 px-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-falcon-dark border border-falcon-border rounded-xl focus:border-falcon-red focus:outline-none transition-all text-falcon-white placeholder-falcon-gray"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-falcon-gray uppercase tracking-widest mb-2 px-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Mining Co."
                    className="w-full px-6 py-4 bg-falcon-dark border border-falcon-border rounded-xl focus:border-falcon-red focus:outline-none transition-all text-falcon-white placeholder-falcon-gray"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-falcon-gray uppercase tracking-widest mb-2 px-1">Service Interest</label>
                  <select className="w-full px-6 py-4 bg-falcon-dark border border-falcon-border rounded-xl focus:border-falcon-red focus:outline-none transition-all text-falcon-white appearance-none cursor-pointer">
                    <option value="" className="bg-falcon-dark">Select a service</option>
                    <option value="lidar" className="bg-falcon-dark">LiDAR Scanning</option>
                    <option value="mapping" className="bg-falcon-dark">Aerial Mapping</option>
                    <option value="agriculture" className="bg-falcon-dark">Multispectral Analysis</option>
                    <option value="other" className="bg-falcon-dark">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-falcon-gray uppercase tracking-widest mb-2 px-1">Message Detail</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-6 py-4 bg-falcon-dark border border-falcon-border rounded-xl focus:border-falcon-red focus:outline-none transition-all resize-none text-falcon-white placeholder-falcon-gray"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-red hover:shadow-glow-red text-falcon-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 group"
              >
                Send Message Request
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
