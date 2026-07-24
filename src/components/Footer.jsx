import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Network, Server, Wifi, ArrowRight, MonitorPlay, Cloud } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Massive Background Text Watermark */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
        SONET
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Mega CTA */}
        <div className="border-b border-white/10 pb-16 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Build the indestructible.</h2>
            <p className="text-neutral-400 text-lg max-w-md">Join the Tier-1 global leaders securing their future with our infrastructure.</p>
          </div>
          <form 
            action="https://formspree.io/f/YOUR_ENDPOINT_HERE" 
            method="POST" 
            className="flex items-center w-full md:w-auto bg-white/5 border border-white/10 rounded-full p-2 hover:bg-white/10 transition-colors"
          >
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none text-white px-6 w-full md:w-64 placeholder:text-neutral-500"
              required
            />
            <button type="submit" className="bg-white text-background hover:bg-neutral-200 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 whitespace-nowrap">
              Start <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 pr-8">
            <img src={logo} alt="Sonet Logo" className="h-12 w-auto mb-8" />
            <p className="text-neutral-400 leading-relaxed mb-8">
              Deploying Tier-1 physical infrastructures, from campus-wide fiber backbones to massive-scale CCTV and Data Center build-outs. We build the physical pathways that power enterprise connectivity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center text-white transition-all transform hover:scale-110 border border-white/10 hover:border-transparent">
                IN
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-white transition-all transform hover:scale-110 border border-white/10 hover:border-transparent">
                TW
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 text-lg">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/data-center" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group"><Server size={18} className="text-neutral-600 group-hover:text-accent transition-colors" /> Data Center</Link></li>
              <li><Link to="/networking" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group"><Network size={18} className="text-neutral-600 group-hover:text-accent transition-colors" /> Networking</Link></li>
              <li><Link to="/surveillance" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group"><Shield size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Surveillance</Link></li>
              <li><Link to="/wireless" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group"><Wifi size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Wireless</Link></li>
              <li><Link to="/audio-visual" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group"><MonitorPlay size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Audio Visual</Link></li>
              <li><Link to="/cloud" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group"><Cloud size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Cloud & Web</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/partners" className="text-neutral-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/careers" className="text-neutral-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-sm font-medium">
            &copy; {new Date().getFullYear()} Sonet Integrated Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
