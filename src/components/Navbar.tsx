'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'DATES', href: '#dates' },
  { label: 'ABOUT', href: '#about' },
  { label: 'TRACKS', href: '#tracks' },
  { label: 'TIMELINE', href: '#timeline' },
  { label: 'GETTING THERE', href: '#getting-there' },
  { label: 'SPONSORS', href: '#sponsors' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 z-50"
        style={{
          width: '100vw',
          background: scrolled || mobileOpen ? 'rgba(45, 30, 65, 0.97)' : 'transparent',
          borderBottom: scrolled
            ? '1px solid rgba(255, 77, 166, 0.25)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0, 0, 0, 0.35)' : 'none',
          transition:
            'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Desktop: three-column grid */}
        <div
          className="hidden md:grid overflow-visible"
          style={{
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            height: '64px',
            padding: '0 2rem',
          }}
        >
          {/* Left — Logo (visible only when scrolled) */}
          <div>
            <motion.a
              href="#"
              className="flex items-center"
              style={{ pointerEvents: scrolled ? 'auto' : 'none' }}
              animate={{
                opacity: scrolled ? 1 : 0,
                y: scrolled ? 0 : -8,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <img src="/NottsHack23.png" alt="Notts Hack" className="h-10 w-auto object-contain" />
            </motion.a>
          </div>

          {/* Centre — Nav links */}
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative group font-pixel text-[9px] tracking-widest text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #FF4DA6, #5CE6A0)' }}
                />
              </motion.a>
            ))}
          </div>

          {/* Right — Register CTA (visible only when scrolled) */}
          <div style={{ justifySelf: 'end' }}>
            <motion.a
              href="#register"
              className="font-pixel text-[9px] tracking-widest px-8 rounded-full border-2 whitespace-nowrap"
              style={{ borderColor: '#5CE6A0', color: '#5CE6A0', pointerEvents: scrolled ? 'auto' : 'none', padding: '8px 24px', lineHeight: 1 }}
              animate={{
                opacity: scrolled ? 1 : 0,
                y: scrolled ? 0 : -8,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(92, 230, 160, 0.12)',
                boxShadow: '0 0 18px rgba(92, 230, 160, 0.35)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER
            </motion.a>
          </div>
        </div>

        {/* Mobile: logo + hamburger */}
        <div className="flex md:hidden items-center justify-between h-14 min-h-[56px] px-4 pt-[env(safe-area-inset-top)]">
          <motion.a
            href="#"
            className="flex items-center min-h-[44px] min-w-[44px]"
            style={{ pointerEvents: scrolled ? 'auto' : 'none' }}
            animate={{
              opacity: scrolled ? 1 : 0,
              y: scrolled ? 0 : -8,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <img src="/NottsHack23.png" alt="Notts Hack" className="h-7 w-auto object-contain" />
          </motion.a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-white p-3 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-1"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="absolute top-14 left-0 right-0 border-t border-white/10 max-h-[calc(100vh-3.5rem)] overflow-y-auto pb-[env(safe-area-inset-bottom)]"
              style={{
                background: 'rgba(45, 30, 65, 0.98)',
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="font-pixel text-[11px] tracking-widest text-white/70 hover:text-white hover:bg-white/5 px-6 py-4 min-h-[48px] flex items-center transition-colors"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* Register button */}
                <div className="px-6 pt-4 pb-4">
                  <a
                    href="#register"
                    className="block text-center font-pixel text-[10px] tracking-widest py-3.5 min-h-[48px] flex items-center justify-center rounded-full border-2"
                    style={{ borderColor: '#5CE6A0', color: '#5CE6A0' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    REGISTER
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
