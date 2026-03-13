'use client';

import { useState, useCallback, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { DvdScreensaver } from 'react-dvd-screensaver';
import AnimatedLogo from './AnimatedLogo';
import { triggerNukeEvent } from './NukeEffect';

const BlockchainScene = dynamic(() => import('./BlockchainScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="font-pixel text-[#5CE6A0] animate-pulse">Loading 3D...</div>
    </div>
  ),
});

const DVD_COLORS = ['#FF4DA6', '#5CE6A0', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A855F7', '#38BDF8'];

export default function HeroSection() {
  const [blockConfirmed, setBlockConfirmed] = useState(false);
  const [dvdMode, setDvdMode] = useState(false);
  const [logoHue, setLogoHue] = useState(0);
  const [windowSize, setWindowSize] = useState({ w: 1920, h: 1080 });

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
  }, []);

  const handleImpact = useCallback((count: number) => {
    setLogoHue(count % DVD_COLORS.length);
  }, []);

  const handleBlockConfirm = () => {
    setBlockConfirmed(true);
    setTimeout(() => setBlockConfirmed(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-overlay pointer-events-none z-[1]" />

      {/* Decorative asterisks — CSS animations for performance */}
      <div className="absolute top-10 left-10 text-6xl md:text-8xl text-[#FF4DA6] font-bold opacity-60 select-none animate-[spin_20s_linear_infinite]">
        ✱
      </div>
      <div className="absolute bottom-10 right-10 text-6xl md:text-8xl text-[#5CE6A0] font-bold opacity-60 select-none animate-[spin_25s_linear_infinite_reverse]">
        ✱
      </div>
      <div className="absolute top-1/4 right-20 text-4xl md:text-6xl text-[#FF4DA6] font-bold opacity-40 select-none hidden md:block animate-[spin_15s_linear_infinite]">
        ✱
      </div>
      <div className="absolute bottom-1/4 left-20 text-4xl md:text-6xl text-[#5CE6A0] font-bold opacity-40 select-none hidden md:block animate-[spin_18s_linear_infinite_reverse]">
        ✱
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <BlockchainScene onBlockConfirm={handleBlockConfirm} />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center pt-10">
        {/* CSS Presents Badge */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-mono text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-white/80 border border-white/20 px-4 py-1.5 rounded-full">
            UNM CSS presents
          </span>
        </motion.div>

        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="cursor-pointer"
          onClick={() => setDvdMode(true)}
        >
          <AnimatedLogo />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-mono text-lg md:text-2xl text-white/90 mt-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-[#FF4DA6]">Build.</span>{' '}
          <span className="text-white">Hack.</span>{' '}
          <span className="text-[#5CE6A0]">Decentralize.</span>
        </motion.p>

        {/* Powered by CCACC */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8 flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] md:text-xs text-white/50 tracking-widest uppercase">
            powered by
          </span>
          <div className="flex items-center gap-4 md:gap-6">
            <img
              src="/CCACCLogo.svg"
              alt="CCACC Logo"
              className="w-20 h-auto md:w-28 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
            <img
              src="/founding-sponsor-2.png"
              alt="Fableration Logo"
              className="w-20 h-auto md:w-28 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </div>
        </motion.div>

        {/* Block Confirmed Toast */}
        <AnimatePresence>
          {blockConfirmed && (
            <motion.div
              className="fixed top-24 left-1/2 transform -translate-x-1/2 card-dark px-6 py-3 z-50"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
            >
              <span className="font-pixel text-xs text-[#5CE6A0]">✓ BLOCK CONFIRMED!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={(e) => { e.preventDefault(); triggerNukeEvent(e); }}
            className="btn-primary font-pixel text-xs md:text-sm px-8 py-4 rounded-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER NOW
          </motion.button>
          <motion.a
            href="#about"
            className="font-pixel text-xs md:text-sm px-8 py-4 rounded-full border-2 border-white/30 text-white hover:border-[#FF4DA6] hover:text-[#FF4DA6] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LEARN MORE
          </motion.a>
        </motion.div>
      </div>

      {/* DVD Bounce Easter Egg */}
      <AnimatePresence>
        {dvdMode && (
          <motion.div
            className="fixed top-0 left-0 z-[9999] cursor-pointer"
            style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDvdMode(false)}
          >
            <DvdScreensaver
              speed={3}
              impactCallback={handleImpact}
              // @ts-expect-error - width/height accept numbers at runtime
              width={windowSize.w}
              // @ts-expect-error - width/height accept numbers at runtime
              height={windowSize.h}
            >
              <img
                src="/NottsHack23.png"
                alt="Notts Hack Logo"
                className="w-32 md:w-48 h-auto object-contain"
                style={{
                  filter: `drop-shadow(0 0 20px ${DVD_COLORS[logoHue]})`,
                  transition: 'filter 0.3s ease',
                }}
              />
            </DvdScreensaver>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono text-xs">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
