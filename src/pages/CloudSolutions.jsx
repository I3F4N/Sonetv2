import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cloud, ServerCog, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudSolutions = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="min-h-screen pt-32 md:pt-24 overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center mb-32 border-b border-white/10">
        <div className="absolute inset-0 w-1/2 left-1/2 -ml-[50vw] bg-emerald-500/5 blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Enterprise Cloud Architecture</span>
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-black">WEB & Cloud <br/><span className="text-emerald-400">Solutions</span></h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
              Revolutionizing the way enterprises do business. We offer solutions which help our clients gain a competitive edge with easy automation, centralization, and complete cloud migrations.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-emerald-600 text-white hover:bg-emerald-500 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                Migrate Today
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: yHero }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-panel border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
              alt="Cloud Computing" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 hue-rotate-[90deg]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
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
            <Database className="w-12 h-12 text-emerald-400 mb-6" />
            <h3 className="text-4xl font-black mb-6">Collocation & Enterprise Storage</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              We manage complex collocation and migration solutions to ensure your data is secure, redundant, and accessible. Replace on-premise hardware risks with resilient cloud-based architectures.
            </p>
            <ul className="space-y-4">
              {['Collocation and Migration Solutions', 'Enterprise Storage Solutions', 'Disaster Recovery & Redundancy'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5" /> {item}
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
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Enterprise Data Storage" />
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
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Web Development" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ServerCog className="w-12 h-12 text-emerald-400 mb-6" />
            <h3 className="text-4xl font-black mb-6">Web & Managed Services</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              Beyond the physical infrastructure, we provide end-to-end digital services. From web hosting to bespoke web application development, we ensure your digital presence is as robust as your physical network.
            </p>
            <ul className="space-y-4">
              {['Web & Email Hosting Services', 'Web Application & Product Development', 'Web Managed Services'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
