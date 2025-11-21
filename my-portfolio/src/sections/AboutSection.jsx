import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { languages, tools, socialLinks, profileImage } from '../constants'; 
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const allSkills = [...languages, ...tools];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(imageRef.current, 
        { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
        { clipPath: "circle(100% at 50% 50%)", opacity: 1, duration: 1.5, ease: "power4.inOut" }
      )
      .fromTo(".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(".social-btn",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
        "-=0.5"
      );
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="min-h-screen flex items-center py-20 px-6 md:px-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
        
        {/* Left Column: Foto */}
        <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-1">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
             <div className="absolute -inset-12 border border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none opacity-50"></div>
             <div className="absolute -inset-6 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse] pointer-events-none opacity-70"></div>
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
             <div ref={imageRef} className="relative w-full h-full rounded-full border-2 border-white/20 overflow-hidden bg-surface shadow-2xl z-10">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" />
             </div>
          </div>

          <div className="flex gap-4 mt-10">
             {[
               { icon: <FaGithub />, link: socialLinks.github },
               { icon: <FaLinkedin />, link: socialLinks.linkedin },
               { icon: <FaEnvelope />, link: socialLinks.email }
             ].map((item, i) => (
               <a key={i} href={item.link} target="_blank" className="social-btn w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300">
                 {item.icon}
               </a>
             ))}
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 order-2 lg:order-2 text-center lg:text-left">
          
          <div className="mb-8">
            <p className="hero-text text-primary font-mono text-sm tracking-widest uppercase mb-4 bg-primary/10 inline-block px-3 py-1 rounded border border-primary/20">
              About Me
            </p>
            <h1 className="hero-text text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Jerikho <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Ruben</span> <br />
              Rahmani
            </h1>
            
            {/* UPDATED BIO TEXT */}
            <p className="hero-text text-lg text-muted max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Informatics undergraduate specializing in <span className="text-white font-medium">Front-End Development</span>. 
              I build responsive, high-performance applications using <span className="text-primary">React & Tailwind</span>, 
              backed by a solid foundation in SQL databases and version control. A proactive problem-solver eager 
              to contribute technical precision and creative solutions to dynamic development teams.
            </p>
          </div>

          <div className="hero-text flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-primary hover:scale-105 transition-all duration-300">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-white/10 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>

          {/* Skills Marquee */}
          <div className="hero-text pt-8 border-t border-white/5 w-full overflow-hidden">
            <p className="text-sm text-gray-500 font-mono mb-4 uppercase tracking-wider">Powering my builds with</p>
            <div className="relative flex overflow-x-hidden group/marquee mask-linear-fade">
              <div className="flex gap-4 animate-marquee whitespace-nowrap py-2 hover:[animation-play-state:paused]">
                {allSkills.map((skill, idx) => (
                  <div key={`a-${idx}`} className="flex items-center gap-2 px-4 py-2 rounded bg-white/5 border border-white/5 hover:border-primary/30 transition-colors cursor-default min-w-max">
                    <span className="text-gray-400 text-lg">{skill.icon}</span>
                    <span className="text-xs font-bold text-gray-500 uppercase">{skill.name}</span>
                  </div>
                ))}
                {allSkills.map((skill, idx) => (
                  <div key={`b-${idx}`} className="flex items-center gap-2 px-4 py-2 rounded bg-white/5 border border-white/5 hover:border-primary/30 transition-colors cursor-default min-w-max">
                    <span className="text-gray-400 text-lg">{skill.icon}</span>
                    <span className="text-xs font-bold text-gray-500 uppercase">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;