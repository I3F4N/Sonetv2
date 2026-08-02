import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, ArrowRight, CheckCircle2, Cable, Hammer, ServerCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';

import featureNetSplicing from '../assets/features/feature_net_splicing.jpg';
import featureNetSwitches from '../assets/features/feature_net_switches.jpg';

const Networking = () => {
  const { data: service } = useContent('service', 'networking');
  const { data: settingsData } = useContent('siteSettings');
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
        <div className="min-h-screen overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-start mb-32 pt-32 pb-20 border-b border-black/5">
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 bg-black overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }} 
            src={service?.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000"} 
            alt={service?.title || "Fiber Optics and Cabling"} 
            className="w-full h-full object-cover"
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
              <span className="text-white text-sm font-semibold uppercase tracking-widest">Physical & Logical Backbone</span>
            </div>
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white">{service?.title || "Cabling & Networking"}</h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light leading-relaxed mb-8">
              {service?.subtitle || "Fiber/UTP deployment, LAN integration, advanced splicing, terminations, and core switch configuration."}
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
            <Cable className="w-12 h-12 text-foreground mb-6" />
            <h3 className="text-3xl lg:text-4xl font-black mb-6">Structured Cabling & Splicing</h3>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              With over 2 decades of experience in the design, installation, and support of networking systems, we provide the raw materials and specialized labor required for massive physical deployments. We support everything from standard LAN to Multi-location Inter-branch connectivity based on Leased Circuits, VSATs, and Broadband.
            </p>
            <ul className="space-y-4">
              {['Design, Supply & Installation of Active Components', 'Bandwidth Optimization & QoS Design', 'Network Load Balancing & Resilience Solutions', 'Campus-Wide Fiber Integration & Precision Splicing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-neutral-500 w-5 h-5" /> {item}
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
            <img src={featureNetSplicing} className="w-full h-full object-cover rounded-2xl opacity-70  transition-all duration-500" alt="Technician splicing fiber" />
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
            <img src={featureNetSwitches} className="w-full h-full object-cover rounded-2xl opacity-70  transition-all duration-500" alt="Network Switches and Racks" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ServerCog className="w-12 h-12 text-foreground mb-6" />
            <h3 className="text-3xl lg:text-4xl font-black mb-6">Switches, Racks & Configuration</h3>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              We bridge the gap between physical labor and logical networking. After stacking and patching the hardware, our engineers configure the core routing, VLANs, and software-defined (SD-WAN) layers to breathe life into the network.
            </p>
            <ul className="space-y-4">
              {['Hardware Procurement & Racking', 'Patch Panel Terminations', 'Core Routing & VLAN Config'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-neutral-500 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Networking;
