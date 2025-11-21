import React from 'react';
import '../AnimatedBackground.css'; 

const Background = () => {
  return (
    <div className="background-container">
      {/* Gradient Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Tech Grid Overlay */}
      <div className="grid-overlay"></div>
    </div>
  );
};

export default Background;