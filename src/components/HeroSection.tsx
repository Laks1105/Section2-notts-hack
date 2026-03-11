'use client';

import { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import AnimatedLogo from './AnimatedLogo';

const BlockchainScene = dynamic(() => import('./BlockchainScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="font-pixel text-[#5CE6A0] animate-pulse">Loading 3D...</div>
    </div>
  ),
});

export default function HeroSection() {
  const [blockConfirmed, setBlockConfirmed] = useState(false);

  const handleBlockConfirm = () => {
    setBlockConfirmed(true);
    setTimeout(() => setBlockConfirmed(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-overlay pointer-events-none z-[1]" />

      {/* Decorative asterisks */}
      <motion.div
        className="absolute top-10 left-10 text-6xl md:text-8xl text-[#FF4DA6] font-bold opacity-60 select-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ✱
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-6xl md:text-8xl text-[#5CE6A0] font-bold opacity-60 select-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        ✱
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-20 text-4xl md:text-6xl text-[#FF4DA6] font-bold opacity-40 select-none hidden md:block"
        animate={{ rotate: 180, scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        ✱
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-20 text-4xl md:text-6xl text-[#5CE6A0] font-bold opacity-40 select-none hidden md:block"
        animate={{ rotate: -180, scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        ✱
      </motion.div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <BlockchainScene onBlockConfirm={handleBlockConfirm} />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center pt-10">
        {/* CCACC Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/CCACCLogo.svg"
            alt="CCACC Logo"
            className="w-32 h-auto md:w-48 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        {/* CSS Presents Badge */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="card-dark px-4 py-2 font-pixel text-xs md:text-sm text-[#FF4DA6]">
            ✨ CSS PRESENTS ✨
          </span>
        </motion.div>

        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
          <motion.a
            href="#register"
            className="btn-primary font-pixel text-xs md:text-sm px-8 py-4 rounded-full inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER NOW
          </motion.a>
          <motion.a
            href="#about"
            className="font-pixel text-xs md:text-sm px-8 py-4 rounded-full border-2 border-white/30 text-white hover:border-[#FF4DA6] hover:text-[#FF4DA6] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LEARN MORE
          </motion.a>
        </motion.div>

        {/* Event Date */}
        <motion.p
          className="font-mono text-sm text-white/60 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          📅 April 6-12, 2026 • 📍 University of Nottingham Malaysia
        </motion.p>
      </div>

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
