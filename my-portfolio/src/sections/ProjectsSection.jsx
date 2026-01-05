import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../constants'; 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const handleCardClick = (project) => {
    const targetLink = (project.demo && project.demo !== '#') ? project.demo : project.github;
    
    if (targetLink && targetLink !== '#') {
      window.open(targetLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-6 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white tracking-tight">My Projects!</h2>
            <p className="text-muted">Showcase of technical exploration.</p>
          </div>
          <div className="mt-4 md:mt-0 text-primary font-mono text-sm">
            // {projects.length} PROJECTS DETECTED
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              onClick={() => handleCardClick(project)} // Menambahkan interaksi klik pada seluruh kartu
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden rounded-lg mb-6 bg-surface border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out brightness-90 group-hover:brightness-110" 
                />
                
                {/* Overlay Gradient Halus */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Floating Links - Tetap ada untuk akses spesifik */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                  {project.github && project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      // Mencegah klik tombol ini memicu klik pada kartu induknya (stopPropagation)
                      onClick={(e) => e.stopPropagation()} 
                      className="p-2 bg-white text-black rounded-full hover:bg-primary transition-colors shadow-lg shadow-primary/20"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      // Mencegah klik tombol ini memicu klik pada kartu induknya (stopPropagation)
                      onClick={(e) => e.stopPropagation()} 
                      className="p-2 bg-white text-black rounded-full hover:bg-primary transition-colors shadow-lg shadow-primary/20"
                    >
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 border border-primary/20 px-2 py-1 rounded hover:bg-primary/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-sm line-clamp-2 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;