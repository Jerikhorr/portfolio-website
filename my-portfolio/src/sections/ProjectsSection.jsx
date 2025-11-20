import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import data projects dari file constants yang baru dibuat
import { projects } from '../constants'; 

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  // NOTE: Array 'projects' sudah dihapus dari sini karena sudah di-import dari '../constants'

  useEffect(() => {
    // Animasi Judul
    gsap.fromTo(headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Animasi Kartu Project
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen py-20 px-6 md:px-20 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div ref={headingRef} className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg mx-auto md:mx-0">
            Here are some of the projects I've worked on. Each project reflects my passion for clean code and modern design.
          </p>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="group flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
            >
              {/* Image Area - DIPERBESAR (h-72) */}
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                
                {/* Overlay gelap tipis saat hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;