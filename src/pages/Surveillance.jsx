import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Hammer, MonitorCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';

import featureSurvWarehouse from '../assets/features/feature_surv_warehouse.jpg';
import featureSurvNvr from '../assets/features/feature_surv_nvr.jpg';

const Surveillance = () => {
  const { data: service } = useContent('service', 'surveillance');
  const { data: settingsData } = useContent('siteSettings');
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="min-h-screen pt-32 md:pt-24 overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center mb-32 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Turnkey Installations</span>
            </div>
            <h1 className="mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black">{service?.title || "CCTV & Surveillance"}</h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-500 font-light leading-relaxed mb-8">
              {service?.subtitle || "We supply the hardware, execute structured LAN integration across massive factory floors, physically mount the cameras, and configure the NVR software for end-to-end security."}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/9845424560"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]"
              >
                Deploy Now
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: yHero }}
            className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden bg-surface shadow-lg border border-neutral-200 border-primary/20 shadow-[0_0_50px_rgba(225,29,72,0.1)]"
          >
            <img 
              src={service?.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : ''} 
              alt={service?.title || "CCTV Cameras"} 
              className="w-full h-full object-cover opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
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
            <Hammer className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl lg:text-4xl font-black mb-6">Industrial Hardware Mounting</h3>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              Sonet Solutions offers a wide range of surveillance, security, and access control systems based on specific security requirements and easy scalability. Our extensive portfolio includes the world's most advanced security technologies, delivering evolving solutions for loss prevention and risk assessment.
            </p>
            <ul className="space-y-4">
              {['PTZ and Monitoring Solutions', 'IP / Wireless Solutions', 'Access Control & Time Attendance', 'Integration of Biometric Systems'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5" /> {item}
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
            <img src={featureSurvWarehouse} className="w-full h-full object-cover rounded-2xl opacity-100 transition-all duration-500" alt="Warehouse Setup" />
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
            <img src={featureSurvNvr} className="w-full h-full object-cover rounded-2xl opacity-100 transition-all duration-500" alt="NVR Rack Configuration" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <MonitorCheck className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl lg:text-4xl font-black mb-6">NVR & Software Configuration</h3>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8">
              We don't just hang cameras—we build the entire security stack. Our engineers set up the physical NVR racks, configure IP assignments, and deploy advanced monitoring software for centralized, real-time tracking.
            </p>
            <ul className="space-y-4">
              {['NVR Hardware Racking', 'IP Address Configuration', 'Centralized VMS Deployment'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Surveillance;
