'use client';

import React, { useEffect, useRef } from 'react';

const DLFrameReveal: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let start: number | null = null;
    let animationFrameId: number;
    let hasPlayed = false;

    const T_frame = 1400; // 1.4 seconds
    const T_hold = 150;   // 150 ms
    const T_logo = 400;   // 400 ms
    const T_total = T_frame + T_hold + T_logo;

    const M = 30; // margin
    const S = 2; // stroke width
    const G = 12; // gap between parallel lines
    const color = '#5CE6A0'; // Neon green from theme

    const render = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = elapsed;

      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      ctx.save();
      ctx.translate(W / 2, H / 2);

      const p = Math.min(Math.max(t / T_frame, 0), 1);

      const left = -W / 2 + M;
      const right = W / 2 - M;
      const top = -H / 2 + M;
      const bottom = H / 2 - M;

      ctx.strokeStyle = color;
      ctx.lineWidth = S;
      ctx.lineCap = 'square';

      // Glow effect after geometry is correct
      if (p === 1) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
      } else {
        ctx.shadowBlur = 0;
      }

      const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      };

      const lerp = (a: number, b: number, factor: number) => a + (b - a) * factor;

      // Top: left → right
      const topX2 = lerp(left, right, p);
      drawLine(left, top - G / 2, topX2, top - G / 2);
      drawLine(left, top + G / 2, topX2, top + G / 2);

      // Bottom: right → left
      const bottomX2 = lerp(right, left, p);
      drawLine(right, bottom - G / 2, bottomX2, bottom - G / 2);
      drawLine(right, bottom + G / 2, bottomX2, bottom + G / 2);

      // Left: bottom → top
      const leftY2 = lerp(bottom, top, p);
      drawLine(left - G / 2, bottom, left - G / 2, leftY2);
      drawLine(left + G / 2, bottom, left + G / 2, leftY2);

      // Right: top → bottom
      const rightY2 = lerp(top, bottom, p);
      drawLine(right - G / 2, top, right - G / 2, rightY2);
      drawLine(right + G / 2, top, right + G / 2, rightY2);

      ctx.restore();

      if (t >= T_frame + T_hold && logoRef.current) {
        const lAlpha = Math.min(Math.max((t - T_frame - T_hold) / T_logo, 0), 1);
        // Quantize alpha to 8 steps for retro bite
        const quantizedAlpha = Math.floor(lAlpha * 8) / 8;
        logoRef.current.style.opacity = String(quantizedAlpha);
      }

      if (t < T_total + 500) {
        animationFrameId = requestAnimationFrame(render);
      } else if (logoRef.current) {
        logoRef.current.style.opacity = '1';
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasPlayed) {
        hasPlayed = true;
        start = null;
        if (logoRef.current) logoRef.current.style.opacity = '0';
        animationFrameId = requestAnimationFrame(render);
      }
    }, { threshold: 0.3 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto aspect-video my-10 md:my-16 flex items-center justify-center px-2">
      <canvas
        ref={canvasRef}
        width={800}
        height={450}
        className="absolute inset-0 w-full h-full"
      />
      <div
        ref={logoRef}
        className="relative z-10 flex flex-col items-center justify-center transition-opacity duration-75"
        style={{ opacity: 0 }}
      >
        <h3 className="font-pixel text-[#FF4DA6] text-sm sm:text-xl md:text-2xl mb-4 sm:mb-8 tracking-widest text-center drop-shadow-[0_0_8px_rgba(255,77,166,0.6)]">
          FOUNDING SPONSORS
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 md:gap-16">
          <a href="https://www.ccacc.io/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110 active:scale-105">
            <img 
              src="/CCACCLogo.svg" 
              alt="CCACC Logo" 
              className="w-24 sm:w-36 md:w-56 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </a>
          <a href="https://www.fableration.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110 active:scale-105">
            <img 
              src="/founding-sponsor-2.png" 
              alt="Fableration Logo" 
              className="w-24 sm:w-36 md:w-56 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DLFrameReveal;
