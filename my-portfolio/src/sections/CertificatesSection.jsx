import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { certificates } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const CertificatesSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-card-3d",
        { opacity: 0, y: 100, rotateX: -45, transformPerspective: 1000 },
        {
          opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
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
            <div key={index} className="cert-card-3d group perspective-1000">
              <div className="relative p-8 h-full bg-gradient-to-b from-white/10 to-black/40 border border-white/10 rounded-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,216,255,0.2)] group-hover:border-primary/30 flex flex-col">
                
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
                  
                  {cert.link && cert.link !== "/" && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-white"
                    >
                      <span className="text-xs text-gray-300">View Credential</span>
                      <FaExternalLinkAlt className="text-xs transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
                
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