'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TimelineEvent {
  time?: string;
  title: string;
  venue?: string;
  highlight?: boolean;
  logo?: string;
}

interface TimelinePhase {
  label: string;
  date: string;
  tag?: string;
  tagColor?: string;
  events: TimelineEvent[];
}

const phases: TimelinePhase[] = [
  {
    label: 'PRE-HACKATHON WORKSHOPS',
    date: 'March 2026',
    tag: 'HYBRID',
    tagColor: '#FFE66D',
    events: [
      { time: '24 March · 18:00—20:00', title: 'What is, and how to win any hackathon (and become rich before you graduate)', venue: 'F3B04', logo: '/CCACCLogo.svg' },
      { time: '25 March · 16:00—17:30', title: 'Building on Decentralized AI Infrastructure with DCAI', venue: 'F4B09b', logo: '/DCAI_white.png' },
    ],
  },
  {
    label: 'DAY 1 — ONLINE OPENING CEREMONY',
    date: 'April 6',
    tag: 'ONLINE',
    tagColor: '#FF4DA6',
    events: [
      { time: '19:00', title: 'Welcome & Introduction' },
      { time: '19:10', title: 'Sponsor Speeches' },
      { time: '19:20', title: 'Hackathon Briefing — Rules, Format & Judging Criteria' },
      { time: '20:00', title: 'Submission Guide' },
      { time: '20:15', title: 'Q&A & Closing Remarks' },
      { time: '20:30', title: 'Online Hacking Begins!', highlight: true },
    ],
  },
  {
    label: 'DAY 2 — PHYSICAL HACKING',
    date: 'April 11',
    tag: 'ON-SITE',
    tagColor: '#5CE6A0',
    events: [
      { time: '09:00', title: 'Online Hacking Ends · Registration & Breakfast', venue: 'F1 Foyer' },
      { time: '10:00', title: 'Mentorship Session 1', venue: 'F3B06' },
      { time: '13:00', title: 'Lunch', venue: 'F1 Foyer' },
      { time: '14:00', title: 'Mentorship Session 2', venue: 'F3B06' },
      { time: '19:00', title: 'Dinner', venue: 'F1 Foyer' },
    ],
  },
  {
    label: 'DAY 3 — JUDGING & AWARDS',
    date: 'April 12',
    tag: 'ON-SITE',
    tagColor: '#5CE6A0',
    events: [
      { time: '08:00', title: 'Submission Deadline · Breakfast', venue: 'F1 Foyer', highlight: true },
      { time: '09:00', title: 'Evaluation of Submissions', venue: 'F1A22' },
      { time: '10:00', title: 'Opening Ceremony', venue: 'F1A13' },
      { time: '11:00', title: 'Physical Pitching', venue: 'F1A13 / F1A15 / F1A11' },
      { time: '13:00', title: 'Lunch', venue: 'F1 Foyer' },
      { time: '14:00', title: 'Judging Session', venue: 'F1A22' },
      { time: '15:00', title: 'Prize Giving & Closing Ceremony', venue: 'F1A13', highlight: true },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const phaseVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-pixel text-xl sm:text-2xl md:text-4xl text-center mb-8 md:mb-12 text-white"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          TIMELINE
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-6"
        >
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phaseIdx}
              variants={phaseVariants}
              className="card-dark p-4 sm:p-6 md:p-8"
              style={{ borderColor: `${phase.tagColor}30` }}
            >
              {/* Phase header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-pixel text-[10px] sm:text-xs md:text-sm text-white leading-relaxed mb-1 break-words">
                    {phase.label}
                  </h3>
                  <p className="font-mono text-white/60 text-xs">
                    {phase.date}
                  </p>
                </div>
                {phase.tag && (
                  <span
                    className="font-pixel text-[8px] md:text-[10px] px-3 py-1 rounded-full border shrink-0"
                    style={{ color: phase.tagColor, borderColor: `${phase.tagColor}40` }}
                  >
                    {phase.tag}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div
                className="h-[2px] rounded-full mb-4 opacity-30"
                style={{ backgroundColor: phase.tagColor }}
              />

              {/* Events list */}
              <motion.div
                variants={containerVariants}
                className="flex flex-col gap-1"
              >
                {phase.events.map((event, eventIdx) => (
                  <motion.div
                    key={eventIdx}
                    variants={itemVariants}
                    className={`
                      group flex items-start gap-2 sm:gap-3 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg
                      transition-colors duration-200 hover:bg-white/[0.06]
                      ${event.highlight ? 'bg-white/[0.04]' : ''}
                    `}
                  >
                    {/* Time & Logo */}
                    <div className="w-20 sm:w-28 shrink-0">
                      <span className="font-mono text-xs sm:text-sm text-[#B8AEC9] tabular-nums leading-snug block">
                        {event.time}
                      </span>
                      {event.logo && (
                        <Image src={event.logo} alt="" width={72} height={24} className="mt-1.5 object-contain opacity-70" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-mono text-xs sm:text-sm leading-snug ${
                        event.highlight ? 'font-bold' : 'text-white/80'
                      }`}
                        style={event.highlight ? { color: phase.tagColor } : undefined}
                      >
                        {event.title}
                      </p>
                      {event.venue && (
                        <span className="font-mono text-xs text-white/40 mt-1 flex items-center gap-1.5">
                          <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {event.venue}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
