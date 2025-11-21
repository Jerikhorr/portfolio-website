import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiUdemy, SiGoogle, SiCoursera, SiSololearn, SiRevolut, SiBiome, SiHuawei } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  
  // DATA SAMPLE
  const certificates = [
    { title: "Revou Fundamental Course", issuer: "Revou", date: "May 2023", icon: <SiRevolut /> },
    { title: "Python Intermediate", issuer: "Sololearn", date: "June 2025", icon: <SiSololearn /> },
    { title: "Data Classification & Summarization ", issuer: "IBM", date: "Aug 2025", icon: <SiBiome /> },
    { title: "Udemy Course", issuer: "Udemy", date: "Sep 2025", icon: <SiUdemy /> },
    { title: "HCIA-AI V3.5 Course", issuer: "Huawei", date: "July", icon: <SiHuawei /> },
    { title: "HCIA-openGauss V1.0 Course", issuer: "Huawei", date: "March 2025", icon: <SiHuawei /> },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Flip Animation saat Scroll
      gsap.fromTo(".cert-card-3d",
        { 
          opacity: 0, 
          y: 100, 
          rotateX: -45, // Miring ke belakang
          transformPerspective: 1000 
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0, // Kembali tegak
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="certificates" className="py-32 px-6 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="cert-card-3d group perspective-1000" // Class custom untuk 3D
            >
              <div className="relative p-8 h-full bg-gradient-to-b from-white/10 to-black/40 border border-white/10 rounded-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,216,255,0.2)] group-hover:border-primary/30">
                
                {/* Icon Floating */}
                <div className="absolute top-6 right-6 text-4xl text-white/10 group-hover:text-primary/20 transition-colors duration-500 rotate-12 group-hover:rotate-0">
                  {cert.icon}
                </div>

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded mb-4 inline-block">
                      {cert.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-gray-300">Verify Credential</span>
                    <FaExternalLinkAlt className="text-xs transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                {/* Glow Effect on Hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-primary/0 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificatesSection;