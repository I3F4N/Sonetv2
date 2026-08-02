import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const ServicePage = () => {
  const { slug } = useParams();
  const { data: service, isLoading } = useContent('service', slug);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  // If the service isn't found (or is inactive), redirect to home or show 404
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Dynamic Parallax Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          {service.heroImage && (
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-foreground transition-colors mb-8 group bg-black/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight leading-[1.1]"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Dynamic Premium Glassmorphism Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface shadow-lg border border-neutral-200 p-8 md:p-12 rounded-3xl border border-black/5 bg-black/5 backdrop-blur-xl relative overflow-hidden group"
        >
          {/* Subtle glow effect behind content */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h2 className="text-3xl font-bold text-foreground mb-10 relative z-10 flex items-center gap-4">
            <span className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
            Key Capabilities
          </h2>
          
          <ul className="space-y-6 relative z-10">
            {service.features?.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-black/5 transition-colors duration-300"
              >
                <div className={`mt-1 p-2 rounded-full bg-white/10 ${service.gridColor || 'text-primary'}`}>
                  <ChevronRight className="w-5 h-5" />
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed font-light">{feature}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicePage;
