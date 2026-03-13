'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

const REGISTRATION_URL = '#register';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function triggerNukeEvent(e?: React.MouseEvent) {
  const rect = (e?.currentTarget as HTMLElement)?.getBoundingClientRect?.();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
  window.dispatchEvent(new CustomEvent('nuke-trigger', { detail: { x, y } }));
}

export default function NukeEffect() {
  const [active, setActive] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const running = useRef(false);

  const runNuke = useCallback(async (x: number, y: number) => {
    if (running.current) return;
    running.current = true;
    setOrigin({ x, y });
    setActive(true);

    await sleep(800);
    window.location.href = REGISTRATION_URL;

    await sleep(1000);
    setActive(false);
    running.current = false;
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const { x, y } = (e as CustomEvent).detail;
      runNuke(x, y);
    };
    window.addEventListener('nuke-trigger', handler);
    return () => window.removeEventListener('nuke-trigger', handler);
  }, [runNuke]);

  if (!active) return null;

  const ox = `${origin.x}px`;
  const oy = `${origin.y}px`;

  return (
    <div className="fixed inset-0 z-[99999]" style={{ pointerEvents: 'auto' }}>
      <div className="absolute inset-0 overflow-hidden">

        {/* Quick bright flash from button */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${ox} ${oy}, white 0%, rgba(255,255,255,0.6) 20%, transparent 60%)`,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Hot core bloom */}
        <motion.div
          className="absolute rounded-full"
          style={{
            left: ox,
            top: oy,
            x: '-50%',
            y: '-50%',
            background: `radial-gradient(circle, #fff 0%, #FF4DA6 30%, rgba(92,230,160,0.2) 60%, transparent 80%)`,
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: '100vmax', height: '100vmax', opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Primary shockwave — pink */}
        <motion.div
          className="absolute rounded-full"
          style={{
            left: ox,
            top: oy,
            x: '-50%',
            y: '-50%',
            border: '4px solid rgba(255, 77, 166, 0.8)',
            boxShadow: '0 0 50px 15px rgba(255, 77, 166, 0.2), inset 0 0 30px rgba(255, 77, 166, 0.1)',
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: '280vmax', height: '280vmax', opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Secondary shockwave — mint */}
        <motion.div
          className="absolute rounded-full"
          style={{
            left: ox,
            top: oy,
            x: '-50%',
            y: '-50%',
            border: '2px solid rgba(92, 230, 160, 0.6)',
            boxShadow: '0 0 30px 8px rgba(92, 230, 160, 0.15)',
          }}
          initial={{ width: 0, height: 0, opacity: 0.9 }}
          animate={{ width: '280vmax', height: '280vmax', opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        />

        {/* Outer shockwave — white whisper */}
        <motion.div
          className="absolute rounded-full"
          style={{
            left: ox,
            top: oy,
            x: '-50%',
            y: '-50%',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{ width: '300vmax', height: '300vmax', opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.15 }}
        />

        {/* Light rays from button */}
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: ox,
              top: oy,
              width: i % 3 === 0 ? '3px' : '1.5px',
              transformOrigin: 'top center',
              transform: `rotate(${i * 22.5}deg)`,
              background: i % 2 === 0
                ? 'linear-gradient(to bottom, rgba(255,77,166,0.7), rgba(255,77,166,0) 80%)'
                : 'linear-gradient(to bottom, rgba(92,230,160,0.5), rgba(92,230,160,0) 70%)',
            }}
            initial={{ height: 0, opacity: 1 }}
            animate={{ height: '80vmax', opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.015 }}
          />
        ))}

        {/* Sparkle ring — small dots bursting out */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          return (
            <motion.div
              key={`spark-${i}`}
              className="absolute rounded-full"
              style={{
                left: ox,
                top: oy,
                width: i % 3 === 0 ? 6 : 4,
                height: i % 3 === 0 ? 6 : 4,
                backgroundColor: i % 2 === 0 ? '#FF4DA6' : '#5CE6A0',
                boxShadow: `0 0 8px ${i % 2 === 0 ? '#FF4DA6' : '#5CE6A0'}`,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos(angle) * (200 + (i % 3) * 80),
                y: Math.sin(angle) * (200 + (i % 3) * 80),
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
            />
          );
        })}
      </div>
    </div>
  );
}
