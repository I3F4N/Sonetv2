import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Data Center', path: '/data-center' },
    { name: 'Networking', path: '/networking' },
    { name: 'Surveillance', path: '/surveillance' },
    { name: 'Wireless', path: '/wireless' },
    { name: 'Audio Visual', path: '/audio-visual' },
    { name: 'Cloud & Web', path: '/cloud' },
    { name: 'Partners', path: '/partners' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-white/10 py-2' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 z-50 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="Sonet Integrated Solutions Logo" 
                  className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`} 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-grow ml-8">
              <div className="flex space-x-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-2xl">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
                      location.pathname === link.path 
                        ? 'bg-white text-background' 
                        : 'text-neutral-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link to="/contact" className="relative group overflow-hidden bg-primary text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] flex items-center justify-center">
                <span className="relative z-10">Consult</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-50">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col pt-32 px-6 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    to={link.path} 
                    className={`text-3xl font-black tracking-tight ${
                      location.pathname === link.path ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 mt-auto"
              >
                <Link to="/contact" className="block w-full text-center bg-primary text-white px-8 py-4 rounded-full font-bold text-xl shadow-[0_0_30px_rgba(225,29,72,0.4)]">
                  Consult with an Architect
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
