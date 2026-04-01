'use client';

import Image from 'next/image';
import { Video, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  time?: string;
  title: string;
  venue?: string;
  highlight?: boolean;
  logo?: string;
  link?: string;
  linkLabel?: string;
  rsvpLink?: string;
}

interface TimelinePhase {
  label: string;
  date: string;
  tag?: string;
  tagColor?: string;
  description?: string;
  link?: string;
  linkLabel?: string;
  events: TimelineEvent[];
}

const phases: TimelinePhase[] = [
  {
    label: 'REGISTRATION DEADLINE',
    date: 'March 31',
    tagColor: '#FF6B6B',
    events: [
      { time: '23:59', title: 'Registration Closes', highlight: true },
    ],
  },
  {
    label: 'PRE-HACKATHON WORKSHOPS',
    date: '',
    tag: 'HYBRID',
    tagColor: '#FFE66D',
    description: 'Workshops will be conducted physically on University of Nottingham Malaysia campus. Participants from other universities can join online via Google Meet',
    events: [
      { time: '24 March 18:00-20:00', title: 'Introduction to Hackathons by CCACC', venue: 'F3B04', logo: '/CCACCLogo.svg', link: 'https://meet.google.com/jgp-dovd-jbu', rsvpLink: 'https://forms.office.com/r/2gddxCcNhi' },
      { time: '25 March 16:00-17:30', title: 'DCAI Workshop', venue: 'F4B09b', logo: '/DCAI_white.png', link: 'https://drive.google.com/file/d/1RaLPLlUF3XHgMXGRFNLHePnm7dJayp_N/view?usp=drivesdk', linkLabel: 'Recording', rsvpLink: 'https://forms.office.com/r/2gddxCcNhi' },
      { time: '2 April 19:00', title: 'Web3 Applications on Dash Platform', venue: 'Online', logo: '/dash.svg', link: 'https://meet.google.com/xcr-rbny-ppd' },
    ],
  },
  {
    label: 'DAY 1 — ONLINE OPENING CEREMONY',
    date: 'April 6',
    tag: 'ONLINE',
    tagColor: '#FF4DA6',
    link: 'https://meet.google.com/gbw-hyyv-rsk',
    events: [
      { time: '19:00-19:10', title: 'Introduction' },
      { time: '19:10-19:20', title: 'Sponsor Speeches' },
      { time: '19:20-19:30', title: 'Participant Rules Briefing' },
      { time: '19:30-20:00', title: 'Track Explanation' },
      { time: '20:00-20:30', title: 'Q&A & Closing Remarks' },
      { time: '20:30', title: 'Start of Online Hacking', highlight: true },
    ],
  },
  {
    label: 'DAY 2 — PHYSICAL HACKING',
    date: 'April 11',
    tag: 'ON-SITE',
    tagColor: '#5CE6A0',
    events: [
      { time: '07:00-10:00', title: 'Registration', venue: 'UG Room' },
      { time: '09:00-10:00', title: 'Breakfast', venue: 'F1 Foyer, F1A13' },
      { time: '09:00', title: 'Start of Physical Hacking', highlight: true },
      { time: '10:00-13:00', title: 'Mentorship Session 1', venue: 'H1B21' },
      { time: '13:00-14:00', title: 'Lunch', venue: 'F1 Foyer, F1A13' },
      { time: '14:00-16:00', title: 'Mentorship Session 2', venue: 'H1B21' },
      { time: '19:00-20:00', title: 'Dinner', venue: 'F1 Foyer, F1A13' },
    ],
  },
  {
    label: 'DAY 3 — JUDGING & AWARDS',
    date: 'April 12',
    tag: 'ON-SITE',
    tagColor: '#5CE6A0',
    events: [
      { time: '08:00', title: 'Submission Deadline', highlight: true },
      { time: '08:00-10:00', title: 'Breakfast', venue: 'F1 Foyer' },
      { time: '09:00-10:00', title: 'Evaluation of Submissions' },
      { time: '10:00-12:00', title: 'Physical Pitching (DCAI Track)', venue: 'F1A13', logo: '/DCAI_white.png' },
      { time: '10:00-12:00', title: 'Physical Pitching (BGA Track)', venue: 'F1A15', logo: '/BGA Logo -  (coloured).PNG' },
      { time: '10:00-12:00', title: 'Physical Pitching (DASH Track)', venue: 'F1A11', logo: '/dash.svg' },
      { time: '12:00-13:00', title: 'Lunch', venue: 'F1 Foyer' },
      { time: '13:00-14:00', title: 'Judging Session' },
      { time: '14:00-16:00', title: 'Prize Giving & Closing Ceremony', venue: 'F1A13', highlight: true },
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

              {/* Description */}
              {phase.description && (
                <p className="font-mono text-xs text-white/50 mb-4">
                  {phase.description}
                </p>
              )}
              {phase.link && (
                <div className="mb-4">
                  <a
                    href={phase.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#5CE6A0]/80 hover:text-[#5CE6A0] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <Video className="w-3 h-3 shrink-0" />
                    {phase.linkLabel ?? 'Google Meet'}
                  </a>
                </div>
              )}

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
                      {(event.venue || event.link) && (
                        <div className="flex items-center gap-3 mt-1 flex-wrap">
                          {event.venue && (
                            <span className="font-mono text-xs text-white/40 flex items-center gap-1.5">
                              <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              {event.venue}
                            </span>
                          )}
                          {event.link && (
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#5CE6A0]/70 hover:text-[#5CE6A0] flex items-center gap-1.5 transition-colors">
                              <Video className="w-3 h-3 shrink-0" />
                              {event.linkLabel ?? 'Google Meet'}
                            </a>
                          )}
                          {event.rsvpLink && (
                            <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#FFE66D]/70 hover:text-[#FFE66D] flex items-center gap-1.5 transition-colors">
                              <ClipboardList className="w-3 h-3 shrink-0" />
                              RSVP (Physical)
                            </a>
                          )}
                        </div>
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
