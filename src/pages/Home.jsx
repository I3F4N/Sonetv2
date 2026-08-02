import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Network, Shield, Wifi, ChevronRight, HardHat, Cable, Factory, Building2, MonitorPlay, Cloud, ArrowRight, CheckCircle2, Menu, X, Play } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import { urlFor } from '../lib/sanityClient';
import NetworkGlobe from '../components/NetworkGlobe';
import heroSpeed from '../assets/hero/hero_speed.jpg';
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

const iconMap = {
  Server, Network, Shield, Wifi, MonitorPlay, Cloud, Factory, Building2
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

const Counter = ({ value }) => {
  const numMatch = value.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(num.toString(), '');
  const hasPlus = suffix.includes('+');
  const textSuffix = suffix.replace('+', '');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      animate(count, num, { 
        duration: 2, 
        ease: "easeOut",
        onComplete: () => setIsComplete(true)
      });
    }
  }, [isInView, count, num]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      <span>{textSuffix}</span>
      {hasPlus && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.5, marginLeft: 2 }} 
          animate={{ opacity: isComplete ? 1 : 0, scale: isComplete ? 1 : 0.5 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="text-primary font-bold"
        >
          +
        </motion.span>
      )}
    </span>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 400]);
  
  // CMS Integration
  const { data: heroData, isLoading: heroLoading } = useContent('hero');
  const { data: services, isLoading: servicesLoading } = useContent('service');
  const { data: settingsData } = useContent('siteSettings');

  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Physical & Logical Infrastructure Deployments" 
        url="/" 
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sonet Integrated Solutions",
          "url": "https://sonet.vercel.app",
          "logo": "https://sonet.vercel.app/logo.png"
        }}
      />
      {/* Premium Hero Section with Full-Bleed Image */}
      <section className="relative min-h-[100dvh] flex items-center justify-start overflow-hidden pt-24 md:pt-32 pb-12">
        {/* Full-bleed background image with dramatic lighting */}
        <motion.div style={{ y: yHero }} className="absolute inset-0 z-0 bg-black overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroSpeed} 
            alt="High Speed Networking" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", damping: 25, stiffness: 80 }}
            className="max-w-4xl"
          >
            {/* Fluid Typography Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 sm:mb-6 tracking-tighter leading-[0.95]"
            >
              Race towards <br />
              <span className="text-white/90">data-driven</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">excellence</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-2xl text-neutral-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-light"
            >
              <strong className="text-white font-bold">Every millisecond counts.</strong> Access real-time infrastructure that helps you make split-second decisions with confidence.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <Link to="/partners" className="bg-white text-black rounded-full px-8 py-3.5 font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-neutral-200 flex items-center justify-center gap-3 group shadow-2xl">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pitlane Metrics Section */}
      <section className="py-16 lg:py-32 bg-grid-pitlane relative z-10 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-24 gap-8 lg:gap-12">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground max-w-2xl leading-tight">
              Numbers that speak<br/>for themselves
            </h2>
            <p className="text-neutral-500 text-lg max-w-sm mt-4">
              Sonet processes vast infrastructure projects daily — so your team never waits for answers.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-12 lg:gap-y-16 gap-x-8"
          >
            {[
              { label: 'Campus Backbones', value: '100+', icon: Building2 },
              { label: 'Miles of Fiber Laid', value: '10k+', icon: Cable },
              { label: 'Factories Secured', value: '50+', icon: Factory },
              { label: 'Network Terminations', value: '1M+', icon: HardHat },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex flex-col items-start border-l-2 border-primary pl-6"
              >
                <metric.icon className="w-5 h-5 text-primary mb-6" />
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-4">
                  <Counter value={metric.value} />
                </h3>
                <p className="text-xs text-neutral-500 font-bold tracking-wider uppercase">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects: Conditionally Rendered via CMS */}
      {settingsData?.showFeaturedProjects && (
        <section className="py-32 relative z-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="mb-6 text-foreground text-4xl md:text-5xl font-black">Featured Deployment</h2>
              <p className="text-neutral-500 max-w-2xl mx-auto text-lg">Powering the infrastructure behind India's most prestigious manufacturing and corporate facilities.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface p-10 rounded-3xl group relative overflow-hidden shadow-lg border border-neutral-200 hover:border-primary transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Factory className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h3 className="text-3xl font-black text-foreground mb-4 relative z-10">Titan Lens Factory</h3>
              <h4 className="text-primary font-bold mb-6 relative z-10">Chikkaballapur</h4>
              <p className="text-neutral-600 leading-relaxed mb-6 relative z-10">
                Executed a complete, ground-up industrial deployment. We laid a brand new, massive fiber backbone spanning the entire manufacturing campus. 
                Our teams handled all structured cabling, UTP drops, and end-to-end physical CCTV installations to secure the sprawling facility.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface p-10 rounded-3xl group relative overflow-hidden shadow-lg border border-neutral-200 hover:border-primary transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Building2 className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h3 className="text-3xl font-black text-foreground mb-4 relative z-10">Titan Corporate Office</h3>
              <h4 className="text-primary font-bold mb-6 relative z-10">Headquarters</h4>
              <p className="text-neutral-600 leading-relaxed mb-6 relative z-10">
                Delivered turnkey corporate networking solutions for their high-density office environment. From supplying and racking massive core switches to meticulous physical terminations and final software configuration, we built their enterprise nervous system.
              </p>
            </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Premium Visible Partners Section */}
      <section className="py-32 relative z-10 bg-white border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative z-10">
          <h2 className="mb-4 text-foreground text-4xl md:text-5xl font-black">Hardware Ecosystem</h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">We physically deploy and configure equipment from Tier-1 OEM global leaders.</p>
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
                className="group relative flex items-center justify-center aspect-[4/3] bg-white rounded-2xl border border-neutral-200 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl transform-gpu will-change-transform"
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
      <section className="py-32 relative z-10 bg-grid-pitlane border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-foreground text-4xl md:text-5xl font-black">Physical Implementations</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg">End-to-end deployments from raw materials and physical labor to final software configuration.</p>
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
                  <Link to={`/${service.slug?.current}`} className={`group block relative w-full h-full rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl border border-neutral-200 hover:border-primary transition-all duration-700 ${service.gridSpan?.includes('row-span-2') ? 'p-10 flex flex-col justify-end' : 'p-8 flex flex-col justify-between'}`}>
                    <div className="absolute inset-0 z-0">
                      <img src={service.heroImage ? (typeof service.heroImage === 'string' ? service.heroImage : urlFor(service.heroImage).url()) : ''} alt={service.title} className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out " />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                    </div>
                    {/* Big faded icon in background */}
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity z-0">
                      <Icon className={`w-48 h-48 text-black transform translate-x-12 -translate-y-12 rotate-12`} />
                    </div>
                    {/* Floating icon */}
                    <div className={`relative z-10 mb-auto bg-surface w-16 h-16 rounded-2xl flex items-center justify-center border border-neutral-200 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                      <Icon className={`w-8 h-8 text-primary`} />
                    </div>
                    {/* Content */}
                    <div className={`relative z-10 ${service.gridSpan?.includes('row-span-2') ? 'mt-auto' : ''}`}>
                      <h3 className="text-3xl md:text-4xl font-black text-foreground mb-3 transition-colors">{service.title}</h3>
                      <p className="text-neutral-500 text-lg mb-6 max-w-md line-clamp-2">{service.subtitle}</p>
                      <div className="flex items-center text-primary font-bold uppercase tracking-widest text-sm">
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
