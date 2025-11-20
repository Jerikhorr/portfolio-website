import React from 'react';
import '../AnimatedBackground.css'; 

const Background = () => {
  return (
    <div className="background-container">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Overlay Grid Halus (Opsional: Memberi kesan Tech) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.5
      }}></div>
    </div>
  );
};

export default Background;