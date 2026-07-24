import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Hammer, MonitorCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Surveillance = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="min-h-screen pt-32 md:pt-24 overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center mb-32 border-b border-white/10">
        <div className="absolute inset-0 w-1/2 left-1/2 -ml-[50vw] bg-primary/5 blur-[150px] mix-blend-screen pointer-events-none" />
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
            <h1 className="mb-6 text-5xl md:text-7xl font-black">CCTV & <br/><span className="text-primary">Surveillance</span></h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
              We supply the hardware, execute structured LAN integration across massive factory floors, physically mount the cameras, and configure the NVR software for end-to-end security.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                Deploy Now
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: yHero }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-panel border-primary/20 shadow-[0_0_50px_rgba(225,29,72,0.1)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000" 
              alt="CCTV Cameras" 
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
            <Hammer className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-4xl font-black mb-6">Industrial Hardware Mounting</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              Sonet Solutions offers a wide range of surveillance, security, and access control systems based on specific security requirements and easy scalability. Our extensive portfolio includes the world's most advanced security technologies, delivering evolving solutions for loss prevention and risk assessment.
            </p>
            <ul className="space-y-4">
              {['PTZ and Monitoring Solutions', 'IP / Wireless Solutions', 'Access Control & Time Attendance', 'Integration of Biometric Systems'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5" /> {item}
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
            <img src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Warehouse Setup" />
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
            <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="NVR Rack Configuration" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <MonitorCheck className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-4xl font-black mb-6">NVR & Software Configuration</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              We don't just hang cameras—we build the entire security stack. Our engineers set up the physical NVR racks, configure IP assignments, and deploy advanced monitoring software for centralized, real-time tracking.
            </p>
            <ul className="space-y-4">
              {['NVR Hardware Racking', 'IP Address Configuration', 'Centralized VMS Deployment'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
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
