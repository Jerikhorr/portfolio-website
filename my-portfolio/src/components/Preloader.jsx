import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Logic Counter 0 -> 100
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + Math.floor(Math.random() * 10) + 1; // Random increment biar natural
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 100); // Kecepatan counter

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 2. Jika sudah 100%, jalankan animasi keluar
    if (count === 100) {
      const tl = gsap.timeline({
        onComplete: onComplete // Panggil fungsi dari App.jsx saat animasi selesai
      });

      // Animasi Text Hilang & Bar Penuh
      tl.to(textRef.current, { opacity: 0, duration: 0.5, delay: 0.2 })
        .to(barRef.current, { height: 0, duration: 0.5 }, "-=0.3")
        
        // Animasi Container 
        .to(containerRef.current, { 
          y: "-100%", 
          duration: 1.2, 
          ease: "power4.inOut" 
        });
    }
  }, [count, onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] bg-dark flex flex-col justify-center items-center text-white">
      
      {/* Text Area */}
      <div ref={textRef} className="text-center z-10 relative">
        <div className="flex items-end justify-center gap-2 mb-2">
            <span className="text-7xl md:text-9xl font-bold font-mono tracking-tighter">
                {count}
            </span>
            <span className="text-2xl md:text-4xl font-mono text-primary mb-4">%</span>
        </div>
        <p className="text-muted text-xs tracking-[0.5em] uppercase animate-pulse">
            System Initializing
        </p>
      </div>

      {/* Background Texture/Decoration (Optional) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Progress Bar Line di Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white/5">
         <div 
            ref={barRef}
            className="h-full bg-primary transition-all duration-100 ease-out shadow-[0_0_20px_rgba(0,216,255,0.5)]" 
            style={{ width: `${count}%` }}
         ></div>
      </div>

    </div>
  );
};

export default Preloader;