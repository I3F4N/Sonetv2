import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Network, Shield, Wifi, ChevronRight, HardHat, Cable, Factory, Building2, MonitorPlay, Cloud, ArrowRight, CheckCircle2, Menu, X, Play } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';

const iconMap = {
  Server, Network, Shield, Wifi, MonitorPlay, Cloud, Factory, Building2
};

// Explicitly import all 18 logos for the flashlight section
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

const partnerLogos = [
  cisco, microsoft, aws, google, hp, aruba, fortinet, bosch, 
  samsung, avaya, ruckus, commscope, tyco, netgear, dlink, engenius, amp, adcKrone
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } }
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // CMS Integration
  const { data: heroData, isLoading: heroLoading } = useContent('hero');
  const { data: services, isLoading: servicesLoading } = useContent('service');
  const { data: settingsData } = useContent('siteSettings');

  // Flashlight Effect State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const partnersRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!partnersRef.current) return;
    const rect = partnersRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="min-h-screen relative">
      {/* Premium Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000" 
            alt="Physical Server Racks and Cabling" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          {/* Removed the heavy black gradient so the animated background shows through clearly */}
          <div className="absolute inset-0 bg-transparent mix-blend-multiply" />
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-blob mix-blend-screen animation-delay-2000" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-32 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">Physical Infrastructure Masters</span>
            </div>
            
            {/* Fluid Typography Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]"
            >
              {heroData?.title || "Building the"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-400">
                {heroData?.titleHighlight || "Physical Backbone"}
              </span> <br />
              {heroData?.titleEnd || "of Enterprise."}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {heroData?.subtitle}
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-background px-10 py-5 rounded-full font-black text-lg transition-all duration-300 transform hover:scale-105 hover:bg-neutral-200 flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Explore Deployments <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/partners" className="relative overflow-hidden border border-white/20 text-white backdrop-blur-sm px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                <span className="relative z-10">Our Hardware Partners</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-black/50 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Campus Backbones', value: '100+', icon: Building2 },
              { label: 'Miles of Fiber Laid', value: 'Thousands', icon: Cable },
              { label: 'Factories Secured', value: 'Turnkey', icon: Factory },
              { label: 'Network Terminations', value: 'Massive', icon: HardHat },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <metric.icon className="w-8 h-8 text-primary mb-4 opacity-80" />
                <h4 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">{metric.value}</h4>
                <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest font-semibold">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects: Conditionally Rendered via CMS */}
      {settingsData?.showFeaturedProjects && (
        <section className="py-32 relative z-10 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="mb-6">Featured Deployment</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Powering the infrastructure behind India's most prestigious manufacturing and corporate facilities.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Factory className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Titan Lens Factory</h3>
              <h4 className="text-primary font-bold mb-6 relative z-10">Chikkaballapur</h4>
              <p className="text-neutral-400 leading-relaxed mb-6 relative z-10">
                Executed a complete, ground-up industrial deployment. We laid a brand new, massive fiber backbone spanning the entire manufacturing campus. 
                Our teams handled all structured cabling, UTP drops, and end-to-end physical CCTV installations to secure the sprawling facility.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-10 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Building2 className="w-12 h-12 text-accent mb-6 relative z-10" />
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Titan Corporate Office</h3>
              <h4 className="text-accent font-bold mb-6 relative z-10">Headquarters</h4>
              <p className="text-neutral-400 leading-relaxed mb-6 relative z-10">
                Delivered turnkey corporate networking solutions for their high-density office environment. From supplying and racking massive core switches to meticulous physical terminations and final software configuration, we built their enterprise nervous system.
              </p>
            </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Premium Visible Partners Section */}
      <section className="py-32 relative z-10 bg-background overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-noise opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative z-10">
          <h2 className="mb-4">Hardware <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Ecosystem</span></h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">We physically deploy and configure equipment from Tier-1 OEM global leaders.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {partnerLogos.map((logo, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="group relative flex items-center justify-center aspect-[4/3] bg-white rounded-2xl border border-neutral-200 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl"
              >
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className="w-[80%] h-[80%] object-contain transition-all duration-500 group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Capabilities Grid */}
      <section className="py-32 relative z-10 bg-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6">Physical Implementations</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">End-to-end deployments from raw materials and physical labor to final software configuration.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]"
          >
            {services?.map((service, index) => {
              const Icon = iconMap[service.gridIcon] || Shield;
              return (
                <motion.div key={service.slug?.current || index} variants={itemVariants} className={service.gridSpan || "lg:col-span-1 lg:row-span-1"}>
                  <Link to={`/${service.slug?.current}`} className={`group block relative w-full h-full rounded-3xl overflow-hidden glass-panel hover:border-white/50 transition-all duration-700 shadow-2xl ${service.gridSpan?.includes('row-span-2') ? 'p-10 flex flex-col justify-end' : 'p-8 flex flex-col justify-between'}`}>
                    <div className="absolute inset-0 z-0">
                      <img src={service.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : ''} alt={service.title} className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    </div>
                    {/* Big faded icon in background */}
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity z-0">
                      <Icon className={`w-48 h-48 ${service.gridColor} transform translate-x-12 -translate-y-12 rotate-12`} />
                    </div>
                    {/* Floating icon */}
                    <div className={`relative z-10 mb-auto bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 ${service.gridColor || 'text-white'}`} />
                    </div>
                    {/* Content */}
                    <div className={`relative z-10 ${service.gridSpan?.includes('row-span-2') ? 'mt-auto' : ''}`}>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-neutral-300 text-lg mb-6 max-w-md line-clamp-2">{service.subtitle}</p>
                      <div className="flex items-center text-white font-bold uppercase tracking-widest text-sm">
                        Explore <ChevronRight size={18} className="ml-1 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
