import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { useContent } from '../hooks/useContent';

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const effectiveIsScrolled = location.pathname !== '/' ? true : isScrolled;

  // Fetch dynamic CMS services
  const { data: services, isLoading } = useContent('service');
  const { data: settingsData } = useContent('siteSettings');

  const shortNames = {
    'surveillance': 'CCTV & Surveillance',
    'networking': 'Cabling & Networking',
    'data-center': 'Data Centers',
    'wireless': 'Wireless',
    'audio-visual': 'Audio Visual',
    'cloud': 'Cloud Solutions'
  };

  // Generate dynamic links from active services, plus static Partners page
  const navLinks = services 
    ? [...services.map(s => ({ name: shortNames[s.slug?.current] || s.title, path: `/${s.slug?.current}` })), { name: 'Partners', path: '/partners' }]
    : [{ name: 'Partners', path: '/partners' }];

  return (
    <>
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          effectiveIsScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 py-2 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex-shrink-0 z-50 flex items-center">
              <Link to="/" className="flex items-center transition-colors duration-300">
                <img 
                  src={logo} 
                  alt="Sonet Integrated Solutions Logo" 
                  className={`w-auto object-contain transition-all duration-300 ${effectiveIsScrolled ? 'h-10' : 'h-14'}`} 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className={`flex items-center whitespace-nowrap backdrop-blur-md rounded-full px-1 py-1 shadow-2xl transition-colors duration-500 ${effectiveIsScrolled ? 'bg-black/5 border border-black/10' : 'bg-white/10 border border-white/20'}`}>
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link 
                      key={link.name} 
                      to={link.path} 
                      className={`relative px-3 py-1.5 text-[11px] xl:text-[12px] font-medium rounded-full transition-colors duration-300 ${
                        isActive 
                          ? (effectiveIsScrolled ? 'text-white' : 'text-black')
                          : (effectiveIsScrolled ? 'text-black hover:text-primary' : 'text-white hover:text-white/80')
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="navbar-active-pill"
                          className={`absolute inset-0 rounded-full shadow-md z-0 ${
                            effectiveIsScrolled ? 'bg-primary' : 'bg-white'
                          }`}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden xl:flex items-center justify-end">
              <a 
                href="https://wa.me/9845424560"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-primary text-white hover:bg-primary/90 px-6 py-2.5 xl:px-8 xl:py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] group block"
              >
                <span className="relative z-10 text-sm xl:text-base">Consult</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden z-50">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 focus:outline-none transition-colors relative z-50 ${isMobileMenuOpen ? 'text-black' : (effectiveIsScrolled ? 'text-black' : 'text-white')}`}
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col pt-32 px-6 pb-12 overflow-y-auto"
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
                      location.pathname === link.path ? 'text-primary' : 'text-black'
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
                <a 
                  href="https://wa.me/9845424560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-3 mt-4 text-center text-base font-medium rounded-xl text-white bg-primary hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Consult with an Architect
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
