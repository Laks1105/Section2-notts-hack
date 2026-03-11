'use client';

import { motion } from 'framer-motion';

interface TimelineEvent {
  time?: string;
  title: string;
  venue?: string;
  highlight?: boolean;
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
    tag: 'WORKSHOPS',
    tagColor: '#5CE6A0',
    events: [
      { time: '24 Mar', title: 'Introduction to Hackathons by CCACC', venue: 'F1A02' },
      { time: '25 Mar', title: 'DCAI Workshop', venue: 'F1A02' },
      { time: '26 Mar', title: 'Workshop (TBD)', venue: 'F1A02' },
      { time: '31 Mar – 1 Apr', title: 'Workshop (TBD)', venue: 'F1A02' },
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
    tag: 'FINALE',
    tagColor: '#FF4DA6',
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-pixel text-2xl md:text-3xl text-white mb-3">
            EVENT TIMELINE
          </h2>
          <p className="font-mono text-[#B8AEC9] text-sm">
            6th April – 12th April 2026 · University of Nottingham Malaysia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {phases.map((phase, phaseIdx) => (
            <motion.div key={phaseIdx} variants={phaseVariants}>
              {/* Phase header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: phase.tagColor, boxShadow: `0 0 10px ${phase.tagColor}60` }}
                />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h3 className="font-pixel text-[10px] md:text-xs text-white leading-relaxed">
                    {phase.label}
                  </h3>
                  {phase.tag && (
                    <span
                      className="font-pixel text-[8px] px-2 py-1 rounded-full border w-fit"
                      style={{ color: phase.tagColor, borderColor: `${phase.tagColor}40` }}
                    >
                      {phase.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Phase date */}
              <p className="font-mono text-[#B8AEC9] text-xs ml-6 -mt-3 mb-4">
                {phase.date}
              </p>

              {/* Events list */}
              <motion.div
                variants={containerVariants}
                className="ml-[5px] border-l-[2px] border-white/10 pl-5 flex flex-col gap-[2px]"
              >
                {phase.events.map((event, eventIdx) => (
                  <motion.div
                    key={eventIdx}
                    variants={itemVariants}
                    className={`
                      group relative flex items-start gap-4 py-3 px-4 rounded-lg
                      transition-colors duration-200 hover:bg-white/[0.04]
                      ${event.highlight ? 'bg-white/[0.03]' : ''}
                    `}
                  >
                    {/* Connecting dot on the border */}
                    <div
                      className="absolute -left-[25px] top-[18px] w-[8px] h-[8px] rounded-full border-2 bg-[#2D2D3A] transition-colors duration-200 group-hover:bg-white/20"
                      style={{ borderColor: event.highlight ? phase.tagColor! : 'rgba(255,255,255,0.2)' }}
                    />

                    {/* Time */}
                    <span className="font-mono text-xs text-[#B8AEC9] w-24 shrink-0 pt-[2px] tabular-nums">
                      {event.time}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-mono text-sm leading-snug ${
                        event.highlight ? 'text-white font-bold' : 'text-white/80'
                      }`}>
                        {event.title}
                      </p>
                      {event.venue && (
                        <span className="font-mono text-[11px] text-[#B8AEC9]/60 mt-1 block">
                          📍 {event.venue}
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
