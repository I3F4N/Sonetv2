import React from 'react';
import { motion } from 'framer-motion';

// Explicitly import all 18 logos
import adcKrone from '../assets/partners/adc-krone.png';
import amp from '../assets/partners/amp.png';
import aruba from '../assets/partners/aruba.png';
import avaya from '../assets/partners/avaya.png';
import aws from '../assets/partners/aws.png';
import bosch from '../assets/partners/bosch.png';
import cisco from '../assets/partners/cisco.png';
import commscope from '../assets/partners/commscope.png';
import dlink from '../assets/partners/dlink.png';
import engenius from '../assets/partners/engenius.png';
import fortinet from '../assets/partners/fortinet.png';
import google from '../assets/partners/google.png';
import hp from '../assets/partners/hp.png';
import microsoft from '../assets/partners/microsoft.png';
import netgear from '../assets/partners/netgear.png';
import ruckus from '../assets/partners/ruckus.png';
import samsung from '../assets/partners/samsung.png';
import tyco from '../assets/partners/tyco.png';

import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 50 } }
};

const Partners = () => {
  const { data: partnerCategories, isLoading } = useContent('partnerCategory');
  const { data: settingsData } = useContent('siteSettings');

  return (
    <div className="min-h-screen pt-32 pb-32 relative overflow-hidden">
      {/* Solid Dark Background */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/10 bg-black/5 backdrop-blur-md">
              <span className="text-foreground text-xs font-semibold tracking-[0.2em] uppercase">Global Ecosystem</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight">Our Hardware <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Partners</span></h1>
            <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              We exclusively deploy and configure enterprise-grade equipment from Tier-1 global technology leaders. 
              Our strong OEM partnerships ensure you receive the most resilient physical infrastructure available.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {/* Dynamic Categories */}
          {partnerCategories?.map((cat, index) => (
            <motion.div 
              key={cat.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24 last:mb-0"
            >
              <div className="mb-12 border-l-4 border-primary pl-6 py-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">{cat.category}</h2>
                <p className="text-neutral-500 text-lg max-w-2xl">{cat.description}</p>
              </div>

              {/* Improved Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {cat.logos?.map((logo, i) => {
                  // Handle both local static string imports and Sanity image objects
                  const imageUrl = typeof logo === 'string' ? logo : (logo.asset ? urlFor(logo).url() : null);
                  if (!imageUrl) return null;
                  
                  return (
                    <motion.div 
                      key={i}
                      variants={itemVariants}
                      className="group relative flex items-center justify-center aspect-[4/3] bg-white rounded-2xl border border-neutral-200 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 p-6 md:p-8"
                    >
                      <img 
                        src={imageUrl} 
                        alt={`${cat.category} partner`} 
                        className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-40 text-center bg-surface shadow-lg border border-neutral-200 p-8 md:p-16 mx-0 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-blue-600/10 mix-blend-screen" />
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 relative z-10">Procure & Deploy Today</h2>
          <p className="text-sm sm:text-base md:text-xl text-neutral-500 max-w-2xl mx-auto mb-8 relative z-10">Leverage our partnerships to build your indestructible physical infrastructure.</p>
          <a 
            href="https://wa.me/9845424560"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative z-10 bg-primary text-white hover:bg-primary/90 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Consult an Architect
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Partners;
