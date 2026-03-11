'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DvdScreensaver } from 'react-dvd-screensaver';
import CountdownTimer from './CountdownTimer';
import DuckMascot from './DuckMascot';

import DLFrameReveal from './DLFrameReveal';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function DatesSection() {
  const hackathonStart = new Date('2026-04-06T00:00:00');

  const dates = [
    { title: 'Hacking Period', date: '6-12 April 2026', description: 'Online hacking begins!' },
    { title: 'Physical Hacking', date: '10-12 April 2026', location: 'University of Nottingham' },
  ];

  return (
    <section id="dates" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-4 text-white"
          {...fadeInUp}
        >
          IMPORTANT DATES
        </motion.h2>
        <motion.p
          className="text-center text-[#FF4DA6] font-pixel text-sm mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Mark your calendars!
        </motion.p>

        <div className="mb-12">
          <p className="text-center text-white/80 mb-4 font-mono">Countdown to Hacking</p>
          <CountdownTimer targetDate={hackathonStart} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {dates.map((item, index) => (
            <motion.div
              key={item.title}
              className="card-dark p-6 md:p-8"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(92, 230, 160, 0.3)' }}
            >
              <h3 className="font-pixel text-lg md:text-xl text-[#5CE6A0] mb-3">{item.title}</h3>
              <p className="font-mono text-2xl md:text-3xl text-white mb-2">{item.date}</p>
              {item.location && (
                <p className="font-mono text-[#FF4DA6]">📍 {item.location}</p>
              )}
              {item.description && (
                <p className="font-mono text-white/70">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-12 text-white"
          {...fadeInUp}
        >
          ABOUT NOTTS HACK
        </motion.h2>

        <motion.div
          className="card-dark p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-lg text-white/90 leading-relaxed mb-6">
            <span className="text-[#5CE6A0] font-bold">Notts Hack</span> is a blockchain-themed hackathon
            brought to you by the <span className="text-[#FF4DA6]">Computer Science Society (CSS)</span> at
            the University of Nottingham.
          </p>
          <p className="font-mono text-lg text-white/90 leading-relaxed mb-6">
            Join us for an exciting week of building, hacking, and decentralizing! Whether you&apos;re a
            seasoned developer or just starting out, this is your chance to explore Web3 technologies,
            blockchain development, and cutting-edge decentralized applications.
          </p>
          <p className="font-mono text-lg text-white/90 leading-relaxed">
            Collaborate with talented peers, learn from industry experts, and compete for amazing prizes.
            Let&apos;s build the future of the decentralized web together! 🚀
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-[#FF4DA6]/20 rounded-full font-mono text-[#FF4DA6] text-sm">
              #Web3
            </span>
            <span className="px-4 py-2 bg-[#5CE6A0]/20 rounded-full font-mono text-[#5CE6A0] text-sm">
              #Blockchain
            </span>
            <span className="px-4 py-2 bg-[#FF4DA6]/20 rounded-full font-mono text-[#FF4DA6] text-sm">
              #DeFi
            </span>
            <span className="px-4 py-2 bg-[#5CE6A0]/20 rounded-full font-mono text-[#5CE6A0] text-sm">
              #SmartContracts
            </span>
          </div>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            className="card-dark p-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-4xl mb-3">🎓</div>
            <h4 className="font-pixel text-sm text-[#5CE6A0] mb-2">UNIVERSITY OF NOTTINGHAM</h4>
            <p className="font-mono text-white/70 text-sm">Host Institution</p>
          </motion.div>
          <motion.div
            className="card-dark p-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-4xl mb-3">🇲🇾</div>
            <h4 className="font-pixel text-sm text-[#FF4DA6] mb-2">STUDENTS&apos; ASSOCIATION MALAYSIA</h4>
            <p className="font-mono text-white/70 text-sm">Co-organizer</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function TracksSection() {
  const tracks = [
    {
      title: 'DeFi Innovation',
      description: 'Build decentralized finance solutions that reshape how we think about money and transactions.',
      icon: '💰',
      color: '#FF4DA6'
    },
    {
      title: 'NFT & Digital Assets',
      description: 'Create unique digital experiences with NFTs, from art to gaming and beyond.',
      icon: '🎨',
      color: '#5CE6A0'
    },
    {
      title: 'DAO & Governance',
      description: 'Design decentralized governance systems that empower communities.',
      icon: '🏛️',
      color: '#FF4DA6'
    },
    {
      title: 'Infrastructure & Tools',
      description: 'Build the foundational tools and infrastructure for the Web3 ecosystem.',
      icon: '🔧',
      color: '#5CE6A0'
    }
  ];

  return (
    <section id="tracks" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-4 text-white"
          {...fadeInUp}
        >
          TRACKS & CHALLENGES
        </motion.h2>
        <motion.p
          className="text-center text-[#5CE6A0] font-pixel text-sm mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Choose your path
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              className="card-dark p-6 md:p-8 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 0 40px ${track.color}40`
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{track.icon}</span>
                <div>
                  <h3
                    className="font-pixel text-sm md:text-base mb-3"
                    style={{ color: track.color }}
                  >
                    {track.title}
                  </h3>
                  <p className="font-mono text-white/80 text-sm leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>

              <motion.div
                className="mt-4 h-1 rounded-full"
                style={{ background: track.color }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SponsorsSection() {
  const sponsors = [
    { name: 'BGA', tier: 'Diamond', icon: '/BGA Logo -  (coloured).PNG', bgClass: '', containerClass: 'w-full h-24 px-2 rounded-none', logoClass: 'w-full h-full' },
    { name: 'DCAI', tier: 'Platinum', icon: '/DCAI.png', bgClass: 'bg-white p-2' },
    { name: 'CSS Society', tier: 'Organizer', icon: '/CSSLogo.png', bgClass: 'bg-white/10' },
  ];

  return (
    <section id="sponsors" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <DLFrameReveal />

        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-4 text-white"
          {...fadeInUp}
        >
          SPONSORS & PARTNERS
        </motion.h2>
        <motion.p
          className="text-center text-[#FF4DA6] font-pixel text-sm mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Made possible by
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="card-dark p-8 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(255, 77, 166, 0.3)'
              }}
            >
              <div className={`${'containerClass' in sponsor && sponsor.containerClass ? sponsor.containerClass : 'w-20 h-20 rounded-full'} mx-auto mb-4 ${sponsor.bgClass} flex items-center justify-center overflow-hidden`}>
                {sponsor.icon && (
                  <img
                    src={sponsor.icon}
                    alt={`${sponsor.name} logo`}
                    className={`${'logoClass' in sponsor && sponsor.logoClass ? sponsor.logoClass : 'w-full h-full'} object-contain`}
                  />
                )}
              </div>
              <h3 className="font-mono text-white font-bold mb-1">{sponsor.name}</h3>
              <p className="font-pixel text-xs text-[#FF4DA6]">{sponsor.tier}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-12 font-mono text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Interested in sponsoring? <a href="mailto:sponsor@nottshack.com" className="text-[#5CE6A0] hover:underline">Contact us</a>
        </motion.p>
      </div>
    </section>
  );
}

const DVD_COLORS = ['#FF4DA6', '#5CE6A0', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A855F7', '#38BDF8'];

export function Footer() {
  const [dvdMode, setDvdMode] = useState(false);
  const [logoHue, setLogoHue] = useState(0);

  const handleImpact = useCallback((count: number) => {
    setLogoHue(count % DVD_COLORS.length);
  }, []);

  const socials = [
    { name: 'Instagram', icon: <img src="/Instagram2.png" alt="Instagram" className="" />, url: 'https://www.instagram.com/unm.css?igsh=cTBmc21hNWFuNHF0' },

  ];

  return (
    <footer className="py-12 px-4 relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-3">
          <div className="flex items-center gap-0">
            {/* <DuckMascot size="sm" /> Goodbye Duck ;( */}
            <img
              src="/NottsHack23.png"
              alt="Notts Hack Mascot"
              className="w-40 h-40 md:w-55 md:h-55 object-contain cursor-pointer"
              onClick={() => setDvdMode(true)}
            />
            <div>
              <p className="font-pixel text-sm text-white">NOTTS HACK 2026</p>
              <p className="font-mono text-xs text-white/60">UNM CSS <br /> University of Nottingham Malaysia</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="w-10 h-10 card-dark flex items-center justify-center text-xl hover:bg-[#FF4DA6]/20"
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <motion.a
              href="#register"
              className="btn-primary font-pixel text-[10px] w-fit px-8 py-3 rounded-full whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER NOW
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="font-mono text-xs text-white/40">
            © 2026 Notts Hack. Built with 💜 by CSS Society.
          </p>
        </div>
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
              width={typeof window !== 'undefined' ? window.innerWidth : 1920}
              // @ts-expect-error - width/height accept numbers at runtime
              height={typeof window !== 'undefined' ? window.innerHeight : 1080}
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
    </footer>
  );
}