import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const NetworkGlobe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000 * 2,
      height: 1000 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: [1, 1, 1],
      markerColor: [0.88, 0.11, 0.28], // Primary crimson
      glowColor: [0.2, 0.2, 0.2],
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.0060], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [28.6139, 77.2090], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.05 }
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002; // Slow rotation
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none z-0 overflow-hidden mask-radial-gradient">
      <canvas
        ref={canvasRef}
        style={{
          width: 1000,
          height: 1000,
          maxWidth: "100%",
          aspectRatio: "1/1",
          transform: "translateY(10%)"
        }}
      />
    </div>
  );
};

export default NetworkGlobe;
