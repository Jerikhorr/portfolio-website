import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    let frameId, time = 0;

    const resize = () => {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      s: Math.random() * 2 + 0.5, // size
      dx: (Math.random() - 0.5) * 0.3, // speedX
      dy: (Math.random() - 0.5) * 0.3, // speedY
      o: Math.random() * 0.5 + 0.2 // opacity
    }));

    const animate = () => {
      time += 0.005;
      const { width: w, height: h } = canvasRef.current;
      ctx.clearRect(0, 0, w, h);

      const orb = (x, y, r, c, off) => {
        const grad = ctx.createRadialGradient(
          x + Math.sin(time + off) * 30, y + Math.cos(time * 0.8 + off) * 20, 0,
          x + Math.sin(time + off) * 30, y + Math.cos(time * 0.8 + off) * 20, r + Math.sin(time * 2 + off) * 20
        );
        grad.addColorStop(0, c);
        grad.addColorStop(0.5, c.replace(/[\d.]+\)$/, '0.1)')); // Fade effect
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(x, y, r * 1.5, 0, 7); ctx.fill();
      };

      orb(w * 0.2, h * 0.3, 300, 'rgba(0, 216, 255, 0.15)', 0);
      orb(w * 0.8, h * 0.7, 350, 'rgba(139, 92, 246, 0.12)', Math.PI);
      orb(w * 0.5, h * 0.5, 250, 'rgba(100, 255, 218, 0.08)', Math.PI / 2);

      // 2. Draw Grid & 3. Particles
      ctx.globalCompositeOperation = 'source-over';
      const step = 60, offX = (time * 20) % step, offY = (time * 15) % step;
      
      // Line helper
      const line = (x1, y1, x2, y2, a) => {
        ctx.strokeStyle = `rgba(0, 216, 255, ${a})`;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      };

      // Grid loops
      for (let x = -step + offX; x < w + step; x += step) line(x, 0, x, h, 0.05 + Math.sin(time + x * 0.01) * 0.03);
      for (let y = -step + offY; y < h + step; y += step) line(0, y, w, y, 0.05 + Math.cos(time + y * 0.01) * 0.03);

      // Particles loop
      particles.forEach((p, i) => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

        ctx.fillStyle = `rgba(0, 216, 255, ${p.o})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, 7); ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
          if (d < 150) line(p.x, p.y, particles[j].x, particles[j].y, (1 - d / 150) * 0.15);
        }
      });

      // 4. Scanline
      const sy = (time * 200) % h;
      const sGrad = ctx.createLinearGradient(0, sy - 2, 0, sy + 2);
      sGrad.addColorStop(0, 'transparent'); sGrad.addColorStop(0.5, 'rgba(0, 216, 255, 0.1)'); sGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sGrad; ctx.fillRect(0, sy - 2, w, 4);

      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => { cancelAnimationFrame(frameId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#050505', zIndex: -1, overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, mixBlendMode: 'overlay', pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
};

export default Background;