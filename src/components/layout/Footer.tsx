'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">FALCON SENSE</h3>
                <p className="text-xs text-text-muted -mt-0.5">See the Unseen. Know the Unknown.</p>
              </div>
            </Link>
            <p className="text-text-muted text-sm max-w-md leading-relaxed">
              Professional geospatial intelligence services in Mozambique. 
              Delivering precise data for your projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-text-muted hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-text-muted hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#about" className="text-text-muted hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-text-muted hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-text-muted">Aerial Surveying</li>
              <li className="text-text-muted">LiDAR Scanning</li>
              <li className="text-text-muted">GIS Analysis</li>
              <li className="text-text-muted">3D Modeling</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} FALCON SENSE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-text-muted hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
