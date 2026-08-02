import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DataCenter from './pages/DataCenter';
import Networking from './pages/Networking';
import Surveillance from './pages/Surveillance';
import Wireless from './pages/Wireless';
import Partners from './pages/Partners';
import AudioVisual from './pages/AudioVisual';
import CloudSolutions from './pages/CloudSolutions';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
    exit={{ opacity: 0, y: -20, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/data-center" element={<PageTransition><DataCenter /></PageTransition>} />
        <Route path="/networking" element={<PageTransition><Networking /></PageTransition>} />
        <Route path="/surveillance" element={<PageTransition><Surveillance /></PageTransition>} />
        <Route path="/wireless" element={<PageTransition><Wireless /></PageTransition>} />
        <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
        <Route path="/audio-visual" element={<PageTransition><AudioVisual /></PageTransition>} />
        <Route path="/cloud" element={<PageTransition><CloudSolutions /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};


import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow overflow-hidden relative">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
