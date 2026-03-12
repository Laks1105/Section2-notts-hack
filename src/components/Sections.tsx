'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import DuckMascot from './DuckMascot';

import DLFrameReveal from './DLFrameReveal';
import { CalendarDays, Users, Trophy, UtensilsCrossed, Instagram, TrainFront, Car, MapPin, Map } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function AboutSection() {
  const hackathonStart = new Date('2026-04-06T00:00:00');
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

        <div className="mt-8 mb-8">
          <p className="text-center text-white/80 mb-4 font-mono">Countdown to Hacking</p>
          <CountdownTimer targetDate={hackathonStart} />
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
              <li>- Pre-hackathon workshops </li>
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
export function GettingThereSection() {
  const mapsUrl = "https://maps.app.goo.gl/9h91izM5ppdMjQPU7";

  return (
    <section id="getting-there" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-10 text-white"
          {...fadeInUp}
        >
          GETTING THERE
        </motion.h2>
        <motion.p
          className="text-center font-mono text-white/70 text-sm max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          It is mandatory for all team members to attend the physical phase on Apr 11—12 at University of Nottingham Malaysia campus in Semenyih, Selangor. Meals, hacking rooms and nap rooms will be provided.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] items-stretch">
          <div className="space-y-4">
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="card-dark p-5 flex items-center gap-4 group hover:border-[#5CE6A0]/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[#5CE6A0]/10 flex items-center justify-center">
                <TrainFront className="w-5 h-5 text-[#5CE6A0]" />
              </div>
              <div>
                <h4 className="font-pixel text-sm text-[#5CE6A0] mb-1">Public transport</h4>
                <p className="font-mono text-white/70 text-xs">MRT to Kajang station, then Grab to UNM Cafeteria</p>
              </div>
              <MapPin className="w-4 h-4 text-white/30 ml-auto shrink-0 group-hover:text-[#5CE6A0] transition-colors" />
            </motion.a>

            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="card-dark p-5 flex items-center gap-4 group hover:border-[#FF4DA6]/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-[#FF4DA6]/10 flex items-center justify-center">
                <Car className="w-5 h-5 text-[#FF4DA6]" />
              </div>
              <div>
                <h4 className="font-pixel text-sm text-[#FF4DA6] mb-1">By car</h4>
                <p className="font-mono text-white/70 text-xs">Navigate to UNM Cafeteria · Park in yellow or red lot</p>
              </div>
              <MapPin className="w-4 h-4 text-white/30 ml-auto shrink-0 group-hover:text-[#FF4DA6] transition-colors" />
            </motion.a>

          </div>

          <motion.div
            className="card-dark overflow-hidden min-h-[280px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.4!2d101.8763136!3d2.9436195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdce0fe6da15fb%3A0x78fc9bbd6d340!2sUNM%20Cafeteria!5e1!3m2!1sen!2smy!4v1700000000000"
              className="w-full h-full min-h-[280px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University of Nottingham Malaysia"
            />
          </motion.div>
        </div>

        <motion.a
          href="https://www.nottingham.edu.my/AboutUs/documents/Campus-Map-2018updated.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-center gap-2 font-mono text-sm text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Map className="w-4 h-4" />
          View full campus map (PDF)
        </motion.a>
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
  const diamondSponsors = [
    { name: 'DCAI', icon: '/DCAI_white.png', bgClass: '', url: 'https://dcai.ai/' },
    { name: 'BGA', icon: '/BGA Logo -  (coloured).PNG', bgClass: '', url: 'https://chainforgood.org/' },
  ];

  const goldSponsors = [
    { name: 'HackQuest', icon: '/hackquest-logo.svg', bgClass: '', invert: true, url: 'https://www.hackquest.io/' },
  ];

  const communitySponsors = [
    { name: 'SA UNMC', icon: '/sa_logo.png', bgClass: '' },
    { name: 'School of Computer and Mathematical Sciences', icon: '/unm_logo.png', bgClass: '' },
  ];

  return (
    <section id="sponsors" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-12 text-white"
          {...fadeInUp}
        >
          SPONSORS & PARTNERS
        </motion.h2>

        <DLFrameReveal />

        {/* Diamond Sponsors */}
        <motion.p
          className="font-pixel text-xs text-[#5CE6A0] text-center mb-6 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Diamond Sponsors
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-3xl mx-auto mb-14">
          {diamondSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className={`h-24 min-w-[120px] max-w-[200px] ${sponsor.bgClass} flex items-center justify-center overflow-hidden rounded-lg p-2`}>
                {sponsor.icon ? (
                  <img
                    src={sponsor.icon}
                    alt={`${sponsor.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="font-mono text-white/30 text-sm px-8">{sponsor.name}</span>
                )}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Gold Sponsors */}
        <motion.p
          className="font-pixel text-xs text-[#FFE66D] text-center mb-6 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Gold Sponsors
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-2xl mx-auto mb-14">
          {goldSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className={`h-14 max-w-[200px] ${sponsor.bgClass} flex items-center justify-center overflow-hidden rounded-lg`}>
                {sponsor.icon ? (
                  <img
                    src={sponsor.icon}
                    alt={`${sponsor.name} logo`}
                    className={`max-h-full max-w-full object-contain${sponsor.invert ? ' invert' : ''}`}
                  />
                ) : (
                  <span className="font-mono text-white/30 text-sm px-6">{sponsor.name}</span>
                )}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Community Sponsors */}
        <motion.p
          className="font-pixel text-xs text-[#FF4DA6] text-center mb-6 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Community Partners
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-2xl mx-auto mb-10">
          {communitySponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className={`h-12 ${sponsor.bgClass} flex items-center justify-center overflow-hidden rounded-lg`}>
                {sponsor.icon ? (
                  <img
                    src={sponsor.icon}
                    alt={`${sponsor.name} logo`}
                    className="h-full object-contain"
                  />
                ) : (
                  <span className="font-mono text-white/30 text-xs px-4">{sponsor.name}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-6 px-4 relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="font-mono text-xs text-white/40">
          © 2026 UNM CSS
        </p>

        <motion.a
          href="https://www.instagram.com/nottshack26"
          className="w-10 h-10 card-dark flex items-center justify-center hover:bg-[#FF4DA6]/20 rounded-lg"
          target="_blank"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </motion.a>
      </div>
    </footer>
  );
}