import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Network, Server, Wifi, ArrowRight, MonitorPlay, Cloud } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-12 md:pt-24 pb-12 overflow-hidden">
      {/* Massive Background Text Watermark */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
        SONET
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Mega CTA */}
        <div className="border-b border-white/10 pb-16 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">Build the indestructible.</h2>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-md">Join the Tier-1 global leaders securing their future with our infrastructure.</p>
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
            <button type="submit" className="bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 whitespace-nowrap">
              Start <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          <div className="lg:w-1/3 lg:pr-8">
            <img src={logo} alt="Sonet Logo" className="h-10 md:h-12 w-auto mb-6 md:mb-8" />
            <p className="text-neutral-400 leading-relaxed mb-8 text-sm md:text-base">
              Deploying Tier-1 physical infrastructures, from campus-wide fiber backbones to massive-scale CCTV and Data Center build-outs. We build the physical pathways that power enterprise connectivity.
            </p>

          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:justify-items-end">
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold mb-6 text-base md:text-lg tracking-wide uppercase text-xs md:text-lg">Solutions</h4>
              <ul className="space-y-4">
                <li><Link to="/data-center" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"><Server size={18} className="text-neutral-600 group-hover:text-accent transition-colors" /> Data Center</Link></li>
                <li><Link to="/networking" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"><Network size={18} className="text-neutral-600 group-hover:text-accent transition-colors" /> Networking</Link></li>
                <li><Link to="/surveillance" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"><Shield size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Surveillance</Link></li>
                <li><Link to="/wireless" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"><Wifi size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Wireless</Link></li>
                <li><Link to="/audio-visual" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"><MonitorPlay size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Audio Visual</Link></li>
                <li><Link to="/cloud" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-3 group text-sm md:text-base"><Cloud size={18} className="text-neutral-600 group-hover:text-primary transition-colors" /> Cloud & Web</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="text-white font-bold mb-6 text-base md:text-lg tracking-wide uppercase text-xs md:text-lg">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">About Us</Link></li>
                <li><Link to="/partners" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">Partners</Link></li>
                <li><Link to="/careers" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">Careers</Link></li>
                <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">Contact</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-bold mb-6 text-base md:text-lg tracking-wide uppercase text-xs md:text-lg">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">Privacy Policy</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">Terms of Service</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm md:text-base">Compliance</a></li>
              </ul>
            </div>
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
