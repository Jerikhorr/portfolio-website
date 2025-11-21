import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bgShape1 = useRef(null);
  const bgShape2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Animasi Background Blobs (Floating halus)
      gsap.to([bgShape1.current, bgShape2.current], {
        y: "30px",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1
      });

      // 2. Intro Animation: Masking Reveal untuk Judul
      // Teks muncul dari bawah (di dalam container overflow-hidden)
      tl.fromTo(".hero-word", 
        { y: "100%", skewY: 5, opacity: 0 },
        { y: "0%", skewY: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.1 }
      )
      .fromTo(subtitleRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 
        "-=0.6"
      )
      .fromTo(".hero-btn", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.1 }, 
        "-=0.5"
      );

      // 3. Mouse Parallax Effect (Interaktif tapi halus)
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 15; // Bergerak max 15px
        const y = (clientY / window.innerHeight - 0.5) * 15;

        // Teks bergerak sedikit berlawanan arah mouse
        gsap.to(titleRef.current, { x: -x, y: -y, duration: 1.5, ease: "power2.out" });
        // Background bergerak searah mouse (efek kedalaman)
        gsap.to(bgShape1.current, { x: x * 2, y: y * 2, duration: 2, ease: "power2.out" });
        gsap.to(bgShape2.current, { x: x * 1.5, y: y * 1.5, duration: 2, ease: "power2.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20">
      
      {/* Background Shapes (Ambience) */}
      <div ref={bgShape1} className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div ref={bgShape2} className="absolute bottom-1/4 right-10 w-[25rem] h-[25rem] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center z-10 max-w-4xl relative">
        
        {/* Label Kecil */}
        <div className="overflow-hidden mb-6">
          <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase inline-block bg-primary/5 border border-primary/20 px-3 py-1 rounded full">
            Welcome to my world
          </p>
        </div>
        
        {/* Judul Besar dengan Masking */}
        <div ref={titleRef} className="font-bold tracking-tight leading-[1.1] mb-8">
          <div className="overflow-hidden inline-block align-bottom mx-2">
            <span className="hero-word block text-5xl md:text-7xl text-white">Building</span>
          </div>
          <div className="overflow-hidden inline-block align-bottom mx-2">
            <span className="hero-word block text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Digital
            </span>
          </div>
          <br className="hidden md:block" />
          <div className="overflow-hidden inline-block align-bottom mx-2">
            <span className="hero-word block text-5xl md:text-7xl text-white">Experiences</span>
          </div>
        </div>

        {/* Deskripsi */}
        <p ref={subtitleRef} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I am a Frontend Developer passionate about crafting interactive, 
          performant, and modern web applications.
        </p>

        {/* Tombol */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="hero-btn group relative px-8 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
          
          <a href="#contact" className="hero-btn px-8 py-3 border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium rounded-full hover:bg-white/10 hover:border-primary/30 transition-all">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;