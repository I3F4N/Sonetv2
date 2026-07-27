import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data-center" element={<DataCenter />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/surveillance" element={<Surveillance />} />
            <Route path="/wireless" element={<Wireless />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/audio-visual" element={<AudioVisual />} />
            <Route path="/cloud" element={<CloudSolutions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
