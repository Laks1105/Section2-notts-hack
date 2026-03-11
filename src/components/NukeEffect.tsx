'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

const REGISTRATION_URL = '#register';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface Particle {
  id: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
  delay: number;
}

const PARTICLE_COLORS = ['#FF4DA6', '#5CE6A0', '#fff', '#7B5BA6', '#FFE66D', '#FF6B6B'];

export function triggerNukeEvent() {
  window.dispatchEvent(new CustomEvent('nuke-trigger'));
}

export default function NukeEffect() {
  const [active, setActive] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const running = useRef(false);

  const runNuke = useCallback(async () => {
    if (running.current) return;
    running.current = true;
    document.documentElement.style.overflow = 'hidden';

    setParticles(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        angle: Math.random() * 360,
        distance: 300 + Math.random() * 700,
        size: 3 + Math.random() * 10,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        delay: Math.random() * 0.2,
      }))
    );

    setActive(true);
    document.body.classList.add('nuke-shake');

    await sleep(1000);
    window.location.href = REGISTRATION_URL;

    await sleep(1500);
    document.body.classList.remove('nuke-shake');
    document.documentElement.style.overflow = '';
    setActive(false);
    setParticles([]);
    running.current = false;
  }, []);

  useEffect(() => {
    const handler = () => runNuke();
    window.addEventListener('nuke-trigger', handler);
    return () => window.removeEventListener('nuke-trigger', handler);
  }, [runNuke]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[99999]" style={{ pointerEvents: 'auto' }}>
      <div className="absolute inset-0 overflow-hidden">
        {/* White flash that fades out */}
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Fireball */}
        <motion.div
          className="absolute rounded-full"
          style={{
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            background:
              'radial-gradient(circle, #FFE66D 0%, #FF4DA6 30%, rgba(255,77,166,0.3) 60%, transparent 100%)',
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: '200vmax', height: '200vmax', opacity: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* Shockwave ring */}
        <motion.div
          className="absolute rounded-full border-[3px] border-white/50"
          style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ width: '300vmax', height: '300vmax', opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Debris particles */}
        {particles.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          return (
            <motion.div
              key={p.id}
              className="absolute rounded-sm"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                left: '50%',
                top: '50%',
                boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos(rad) * p.distance,
                y: Math.sin(rad) * p.distance,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 1.5,
                delay: p.delay,
                ease: 'easeOut',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
