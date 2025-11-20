import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TypeAnimation } from 'react-type-animation'; 
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// IMPORT DATA DARI CONSTANTS
import { languages, tools, socialLinks, profileImage } from '../constants'; 

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const socialRef = useRef(null);
  const imageRef = useRef(null);
  const languagesRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline();
    
    // 1. Animasi Judul
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // 2. Animasi Paragraf Teks
    .fromTo(textRefs.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    // 3. Animasi Social Icons
    .fromTo(socialRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // 4. Animasi Gambar Profile
    gsap.fromTo(imageRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5
      }
    );

    // 5. Animasi Grid Languages
    gsap.fromTo(languagesRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: {
          trigger: languagesRef.current,
          start: "top 85%", 
          toggleActions: "play none none none",
        }
      }
    );

    // 6. Animasi Grid Tools (Trigger terpisah agar smooth saat discroll)
    gsap.fromTo(toolsRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: {
          trigger: toolsRef.current,
          start: "top 85%", 
          toggleActions: "play none none none",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-20 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Teks */}
          <div>
            <h2 ref={titleRef} className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Jerikho Ruben Rahmani
            </h2>
            
            <div className="text-xl md:text-2xl font-semibold text-gray-200 mb-6 h-8 flex items-center">
                <span className="mr-2">I am a</span>
                <TypeAnimation
                  sequence={['Informatics Student', 2000, 'Web Developer', 2000]}
                  wrapper="span" speed={50} className="text-primary font-bold" repeat={Infinity}
                />
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p ref={el => textRefs.current[0] = el}>
                Informatics undergraduate with a strong interest in web development and hands-on experience using HTML, 
                CSS, JavaScript, React, and Tailwind. Skilled in building, updating, and maintaining front-end features through 
                practical projects and self-directed learning. Familiar with SQL/MySQL databases, PHP fundamentals, and Git
                based version control. Experienced in debugging, basic testing, and writing clear project documentation. A 
                proactive and detail-oriented problem-solver with strong communication and cross-functional collaboration skills, 
                eager to learn to modern web development tasks and support internal digital tools through an internship 
                opportunity.
                {/* (Teks panjang biarkan di sini atau pindah ke constants juga boleh) */}
              </p>
            </div>

            {/* Social Links Menggunakan Data Import */}
            <div ref={socialRef} className="flex gap-6 mt-8">
              <a href={socialLinks.email} className="text-gray-400 hover:text-primary text-2xl transition-all hover:-translate-y-1"><FaEnvelope /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl transition-all hover:-translate-y-1"><FaLinkedin /></a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-2xl transition-all hover:-translate-y-1"><FaGithub /></a>
            </div>
          </div>

          {/* Gambar Profile */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white/10 group-hover:border-primary/50 overflow-hidden shadow-2xl transition-all duration-500">
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-500 ease-out" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="pt-10 space-y-16"> 
          
          {/* Languages: Di-map dari constants */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Programming <span className="text-primary">Languages</span>
            </h3>
            <div ref={languagesRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-center">
              {languages.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools: Di-map dari constants */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              Frameworks & <span className="text-purple-500">Tools</span>
            </h3>
            <div ref={toolsRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-center">
              {tools.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;