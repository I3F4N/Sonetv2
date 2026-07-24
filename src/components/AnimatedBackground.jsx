import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      {/* Energetic base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950" />
      
      {/* Vibrant Shifting Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[150px] mix-blend-screen animate-blob" />
      <div className="absolute top-[20%] right-[-20%] w-[70%] h-[70%] bg-cyan-400/15 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[10%] w-[80%] h-[80%] bg-indigo-500/15 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-4000" />
      
      {/* Cyber-Physical Data Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 1) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(56, 189, 248, 1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2)',
          transformOrigin: 'top',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      {/* Noise for texture */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

      {/* Grid Animation CSS injected directly */}
      <style>{`
        @keyframes gridMove {
          0% { transform: perspective(1000px) rotateX(60deg) scale(2) translateY(0); }
          100% { transform: perspective(1000px) rotateX(60deg) scale(2) translateY(100px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
