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
    tag: 'HYBRID',
    tagColor: '#FFE66D',
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
    <section id="timeline" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-pixel text-2xl md:text-4xl text-center mb-12 text-white"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
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
              className="card-dark p-6 md:p-8"
              style={{ borderColor: `${phase.tagColor}30` }}
            >
              {/* Phase header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-pixel text-xs md:text-sm text-white leading-relaxed mb-1">
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
                      group flex items-start gap-3 py-2.5 px-3 rounded-lg
                      transition-colors duration-200 hover:bg-white/[0.06]
                      ${event.highlight ? 'bg-white/[0.04]' : ''}
                    `}
                  >
                    {/* Time */}
                    <span className="font-mono text-xs text-[#B8AEC9] w-28 shrink-0 pt-[2px] tabular-nums">
                      {event.time}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-mono text-sm leading-snug ${
                        event.highlight ? 'font-bold' : 'text-white/80'
                      }`}
                        style={event.highlight ? { color: phase.tagColor } : undefined}
                      >
                        {event.title}
                      </p>
                      {event.venue && (
                        <span className="font-mono text-xs text-white/40 mt-1 block">
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
