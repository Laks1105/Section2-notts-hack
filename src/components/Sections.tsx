'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DvdScreensaver } from 'react-dvd-screensaver';
import { CalendarDays, Users, Trophy, UtensilsCrossed } from 'lucide-react';
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
  const highlights = [
    { icon: <CalendarDays className="w-7 h-7" />, label: '6 Days', detail: 'of hacking', color: '#FF4DA6' },
    { icon: <Users className="w-7 h-7" />, label: '3-5 People', detail: 'per team', color: '#5CE6A0' },
    { icon: <Trophy className="w-7 h-7" />, label: '$800+', detail: 'in prizes', color: '#FF4DA6' },
    { icon: <UtensilsCrossed className="w-7 h-7" />, label: 'Meals', detail: 'provided on-site', color: '#5CE6A0' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-4 text-white"
          {...fadeInUp}
        >
          ABOUT NOTTS HACK
        </motion.h2>
        <motion.p
          className="text-center text-[#FF4DA6] font-pixel text-sm mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Build. Hack. Decentralize.
        </motion.p>

        {/* Main description */}
        <motion.div
          className="card-dark p-8 md:p-10 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-base md:text-lg text-white/90 leading-relaxed mb-5">
            <span className="text-[#5CE6A0] font-bold">NottsHack 2026</span> is a six-day blockchain
            and cryptocurrency hackathon hosted by the{' '}
            <span className="text-[#FF4DA6]">Computer Science Society</span> at
            the University of Nottingham Malaysia.
          </p>
          <p className="font-mono text-base md:text-lg text-white/90 leading-relaxed mb-5">
            Form a team of 3-5 and tackle industry-defined challenges across two sponsor tracks,
            with mentorship sessions, workshops, and hands-on guidance from industry professionals
            throughout the event.
          </p>
          <p className="font-mono text-base md:text-lg text-white/90 leading-relaxed">
            Kick off online on <span className="text-white font-bold">April 6th</span> with the opening
            ceremony and five days of remote hacking, then come together at{' '}
            <span className="text-white font-bold">UNMC campus</span> on April 11-12 for physical
            hacking, pitching, and the final awards ceremony.
          </p>
        </motion.div>

        {/* Stat highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="card-dark p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${item.color}30` }}
            >
              <div className="mb-2 flex justify-center" style={{ color: item.color }}>{item.icon}</div>
              <p className="font-pixel text-sm md:text-base" style={{ color: item.color }}>
                {item.label}
              </p>
              <p className="font-mono text-white/60 text-xs mt-1">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Event format breakdown */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            className="card-dark p-6 border-l-2 border-[#5CE6A0]/50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-pixel text-sm text-[#5CE6A0] mb-3">ONLINE PHASE</h4>
            <p className="font-mono text-white/80 text-sm leading-relaxed mb-2">
              April 6-11 &mdash; Remote hacking from anywhere
            </p>
            <ul className="font-mono text-white/60 text-xs space-y-1">
              <li>- Opening ceremony &amp; hackathon briefing</li>
              <li>- Pre-hackathon workshops (CCACC, DCAI)</li>
              <li>- Five days of building with your team</li>
            </ul>
          </motion.div>
          <motion.div
            className="card-dark p-6 border-l-2 border-[#FF4DA6]/50"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-pixel text-sm text-[#FF4DA6] mb-3">PHYSICAL PHASE</h4>
            <p className="font-mono text-white/80 text-sm leading-relaxed mb-2">
              April 11-12 &mdash; On-campus at UNMC
            </p>
            <ul className="font-mono text-white/60 text-xs space-y-1">
              <li>- Mentorship sessions &amp; project refinement</li>
              <li>- Physical pitching to judges</li>
              <li>- Prize giving &amp; closing ceremony</li>
            </ul>
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

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
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
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${sponsor.bgClass} flex items-center justify-center overflow-hidden`}>
                {sponsor.icon && (
                  <img
                    src={sponsor.icon}
                    alt={`${sponsor.name} logo`}
                    className="w-full h-full object-contain"
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