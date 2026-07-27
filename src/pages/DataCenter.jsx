import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Cable, Box, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';

import heroDataCenter from '../assets/hero/hero_datacenter.jpg';
import heroNetworking from '../assets/hero/hero_networking.jpg';

const DataCenter = () => {
  const { data: service } = useContent('service', 'data-center');
  const { data: settingsData } = useContent('siteSettings');
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
        <div className="min-h-screen overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-start mb-32 pt-32 pb-20 border-b border-black/5">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 bg-black">
          <img 
            src={service?.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000"} 
            alt={service?.title || "Data Center Server Rack"} 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-white text-sm font-semibold uppercase tracking-widest">Physical MDF/IDF Builds</span>
            </div>
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white">{service?.title || "Data Centers & Racks"}</h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed mb-8">
              {service?.subtitle || "We physically construct the core of your IT operations. From building out MDF/IDF closets to deploying full-scale data center environments."}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/9845424560"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]"
              >
                Deploy Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zig-Zag Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40 mb-40">
        
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Box className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-3xl lg:text-4xl font-black mb-6">MDF/IDF Room Construction</h3>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              We turn empty rooms into highly organized, mission-critical infrastructure hubs. We bolt the racks into the concrete, install the power distribution units, and handle the complete physical architecture.
            </p>
            <ul className="space-y-4">
              {['Hardware Procurement & Stacking', 'Seismic Rack Anchoring', 'PDU & Grounding Installation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-accent w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 h-[250px] sm:h-[350px] lg:h-[500px] rounded-3xl overflow-hidden bg-surface shadow-lg border border-neutral-200 p-2"
          >
            <img src={heroDataCenter} className="w-full h-full object-cover rounded-2xl opacity-100 transition-all duration-500" alt="Server Room Power" />
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[250px] sm:h-[350px] lg:h-[500px] rounded-3xl overflow-hidden bg-surface shadow-lg border border-neutral-200 p-2"
          >
            <img src={heroNetworking} className="w-full h-full object-cover rounded-2xl opacity-100 transition-all duration-500" alt="Patch Panels and Cabling" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Cable className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-3xl lg:text-4xl font-black mb-6">Patch Panel & Cable Management</h3>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              Every data center has a unique set of network priorities, from consolidation to quick deployment and zero downtime. We work closely with the biggest names in networking technology to create scalable, high-density data center networks. We have experience serving telecom providers, e-commerce companies, large corporates, universities, and high-security government installations.
            </p>
            <ul className="space-y-4">
              {['MDF/IDF Server Rack Installation', 'Planning, Design & Complete Datacenter Implementation', 'Scalable & Simplified Architecture Deployment', 'Copper & Fiber Patch Panel Management'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-accent w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataCenter;
