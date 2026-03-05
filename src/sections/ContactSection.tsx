'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

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
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Discuss Your Project?
            </h3>
            
            <p className="text-xl text-slate-600 mb-12 max-w-md">
              Get in touch with our team of experts to receive a customized quote 
              for your geospatial needs in Mozambique.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-lg font-bold text-slate-900">info@falconsense.com</div>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="text-lg font-bold text-slate-900">+258 84 XXX XXXX</div>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</div>
                  <div className="text-lg font-bold text-slate-900">Maputo, Mozambique</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder or Visual */}
            <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl h-48 relative grayscale">
              <img 
                src="https://images.unsplash.com/photo-1548345660-aefb1fbb44fe?auto=format&fit=crop&q=80&w=800" 
                alt="Map view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-2 bg-white rounded-full shadow-2xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" /> Maputo Operations Center
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-all" required />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Company Name</label>
                  <input type="text" placeholder="Acme Mining Co." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Service Interest</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="lidar">LiDAR Scanning</option>
                    <option value="mapping">Aerial Mapping</option>
                    <option value="agriculture">Multispectral Analysis</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Message Detail</label>
                <textarea rows={5} placeholder="Tell us about your requirements..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none" required></textarea>
              </div>
              
              <button type="submit" className="w-full py-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3">
                Send Message Request
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
