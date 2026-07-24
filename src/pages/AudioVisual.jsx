import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MonitorPlay, Mic2, LayoutGrid, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';

const AudioVisual = () => {
  const { data: service } = useContent('service', 'audio-visual');
  const { data: settingsData } = useContent('siteSettings');
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="min-h-screen pt-32 md:pt-24 overflow-hidden relative">
      {/* Dynamic Hero */}
      <section className="relative min-h-[70vh] flex items-center mb-32 border-b border-white/10">
        <div className="absolute inset-0 w-1/2 left-1/2 -ml-[50vw] bg-purple-500/5 blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
              <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Enterprise AV Integration</span>
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-black">{service?.title || "Audio Visual Solutions"}</h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
              {service?.subtitle || "We provide comprehensive design, project management, installation, and support services for audio visual projects of all levels of complexity, creating coherent AV solutions aligned with your enterprise requirements."}
            </p>
            <div className="flex gap-4">
              <a 
                href={settingsData?.whatsappNumber ? `https://wa.me/${settingsData.whatsappNumber}?text=${encodeURIComponent(settingsData?.whatsappMessage || "Hi, I would like to consult with an architect.")}` : "/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white hover:bg-purple-500 px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Deploy AV Systems
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ y: yHero }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass-panel border-purple-400/20 shadow-[0_0_50px_rgba(192,132,252,0.1)]"
          >
            <img 
              src={service?.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : ''} 
              alt={service?.title || "Audio Visual Systems"} 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
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
            <MonitorPlay className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-4xl font-black mb-6">Hi-Def Video Conferencing & Video Walls</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              Transform your boardrooms and operations centers. We install massive, seamless video walls and high-definition conferencing systems that integrate flawlessly with your core network infrastructure.
            </p>
            <ul className="space-y-4">
              {['Hi-Definition Video Conferencing Solutions', 'Meeting Room Audio Visual Systems', 'Massive Scale Video Walls'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-purple-400 w-5 h-5" /> {item}
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
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Video Wall Installation" />
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
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover rounded-2xl opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt="Smart Classroom" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LayoutGrid className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-4xl font-black mb-6">Smart Rooms & PA Systems</h3>
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              From interactive whiteboards in educational environments to complete PA solutions and integrated room control systems for hospitality. We handle the entire physical deployment and programming.
            </p>
            <ul className="space-y-4">
              {['PA Solutions & Audio Distribution', 'Interactive Whiteboards & Classrooms', 'Hotel Guestroom Management Systems'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-purple-400 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AudioVisual;
