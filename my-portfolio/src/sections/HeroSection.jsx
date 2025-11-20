import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(heroRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1 }
    )
    .fromTo(textRef.current.children, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={heroRef} className="h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
      <div ref={textRef} className="max-w-3xl">
        <h2 className="text-sm text-primary tracking-widest mb-4 uppercase font-bold">Welcome to my world</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            Experiences
          </span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          I am a frontend developer passionate about crafting interactive and modern web applications.
        </p>
        <button className="px-8 py-3 bg-primary text-dark font-bold rounded-full hover:bg-white transition-colors">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;