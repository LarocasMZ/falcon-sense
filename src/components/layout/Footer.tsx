'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-falcon-dark border-t border-falcon-border relative overflow-hidden">
      {/* Circuit Background */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/images/falcon-logo.svg"
                alt="FalconSense"
                className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-falcon-gray text-sm max-w-md leading-relaxed">
              Professional geospatial intelligence services in Mozambique.
              Delivering precise data for your projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-falcon-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-falcon-gray hover:text-falcon-red transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-falcon-gray hover:text-falcon-red transition-colors">Services</Link></li>
              <li><Link href="#about" className="text-falcon-gray hover:text-falcon-red transition-colors">About</Link></li>
              <li><Link href="#contact" className="text-falcon-gray hover:text-falcon-red transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-falcon-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-falcon-gray">Aerial Surveying</li>
              <li className="text-falcon-gray">LiDAR Scanning</li>
              <li className="text-falcon-gray">GIS Analysis</li>
              <li className="text-falcon-gray">3D Modeling</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-falcon-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-falcon-gray text-sm">
            © {currentYear} FALCON SENSE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-falcon-gray hover:text-falcon-red transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-falcon-gray hover:text-falcon-red transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
