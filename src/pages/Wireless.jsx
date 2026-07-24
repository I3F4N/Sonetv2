import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wifi, Hammer, RadioReceiver, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';

import featureWifiFactory from '../assets/features/feature_wifi_factory.jpg';
import featureWifiRoaming from '../assets/features/feature_wifi_roaming.jpg';

const Wireless = () => {
  const { data: service } = useContent('service', 'wireless');
  const { data: settingsData } = useContent('siteSettings');
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="min-h-screen pt-32 md:pt-24 overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center mb-32 border-b border-white/10">
        <div className="absolute inset-0 w-1/2 left-1/2 -ml-[50vw] bg-blue-500/5 blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">End-to-End Installation</span>
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-black">{service?.title || "Industrial Wireless"}</h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
              {service?.subtitle || "We provide the specialized labor to execute precision LAN integration across sprawling factories and physically mount access points in hard-to-reach industrial ceilings, alongside expert software configuration."}
            </p>
            <div className="flex gap-4">
              <a 
                href={settingsData?.whatsappNumber ? `https://wa.me/${settingsData.whatsappNumber}?text=${encodeURIComponent(settingsData?.whatsappMessage || "Hi, I would like to consult with an architect.")}` : "/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                Deploy Now
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: yHero }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-panel border-blue-400/20 shadow-[0_0_50px_rgba(96,165,250,0.1)]"
          >
            <img 
              src={service?.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : ''} 
              alt={service?.title || "Industrial Wireless"} 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
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
            <Hammer className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-4xl font-black mb-6">Factory AP Deployment</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              With an incredible increase in network traffic, enterprises are shifting to Wireless LAN Solutions. We deploy infrastructure, execute precise LAN integration, and customize solutions regardless of organization size to ensure safety, efficiency, and seamless mobility.
            </p>
            <ul className="space-y-4">
              {['INDOOR/OUTDOOR Wireless Solutions', 'Long Distance & Point-to-Point Connectivity', 'Secure Hotspot & Wi-Fi Architectures', 'Industrial Interference Mitigation & Mounting'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-blue-400 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 h-[500px] rounded-3xl overflow-hidden glass-panel p-2"
          >
            <img src={featureWifiFactory} className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Factory Installation" />
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden glass-panel p-2"
          >
            <img src={featureWifiRoaming} className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Roaming Configuration" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Wifi className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-4xl font-black mb-6">Seamless Roaming Configuration</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              Once the hardware is physically secured, our network engineers configure enterprise controllers to ensure flawless roaming. Forklifts and wandering employees will traverse the entire campus without ever dropping a connection.
            </p>
            <ul className="space-y-4">
              {['Enterprise Controller Setup', 'Predictive RF Tuning', 'Seamless Hand-offs'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-blue-400 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Wireless;
