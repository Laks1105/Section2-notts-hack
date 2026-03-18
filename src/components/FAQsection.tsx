'use client';

import { useState, type ReactNode } from 'react';

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'What is NottsHack 2026?',
    a: 'NottsHack 2026 is a blockchain-themed student hackathon where participants build innovative decentralized solutions, learn new skills, and connect with other developers through workshops, mentorship, and competition.',
  },
  {q: 'Who can participate?',
    a: 'This event is open to all students from any university or college in Malaysia.',
  },
  {
    q: 'Can I join without a team?',
    a: <>No, you&apos;ll need to be in a team to participate. Don&apos;t worry if you don&apos;t have one yet—we can help match you with others! Simply register via <a href="https://forms.office.com/r/01GRNnNAZX" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline hover:text-pink-300">this link</a>.</>,
  },
  {
    q: 'Who is organising this event?',
    a: 'The event is organised by the Computer Science Society (CSS) at the University of Nottingham, in collaboration with sponsors.',
  },
  {
    q: 'How many people per team?',
    a: 'Each team must consist of 3 to 5 members.',
  },
  {
    q: 'When and where is NottsHack 2026 held?',
    a: 'NottsHack 2026 will be held from 6th April to 12 April 2026 at the University of Nottingham, Malaysia.',
  },
  {
    q: 'When is the deadline for registration?',
    a: 'Registration closes on 31 March 2026 at 23:59.',
  },
  {
    q: 'Is this an in-person or online hackathon?',
    a: 'This is a hybrid hackathon. The event will be conducted online starting 6 April, with physical hack sessions and final pitching held on campus.',
  },
  {
    q: 'How are projects judged?',
    a: 'Projects are judged based on the specific track criteria.',
  },
  {
    q: 'Do I need prior experience in blockchain?',
    a: 'Prior blockchain experience is recommended but not required.',
  },
  {
    q: 'Will food be provided?',
    a: 'Yes, food and refreshments will be provided during the physical sessions.',
  },
 {
    q: 'Will prizes be provided to the winning team?',
    a: 'Yes, prizes will be awarded to the winning teams. The exact prizes depend on which track your team enters.',
  },
  {
    q: 'Is registration free?',
    a: 'Yes, registration is completely free.',
  },
  {
    q: 'How can I contact the organisers?',
    a: 'Email: efyms20@nottingham.edu.my\nInstagram: @unm.css',
  },
];



export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section id="faq" className="relative w-full text-white px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">

        <h2 className="font-pixel text-xl sm:text-2xl md:text-4xl text-center mb-8 md:mb-12">
          <span>FREQUENTLY</span>{' '}
          <span className="text-pink-400">ASKED</span>{' '}
          <span>QUESTIONS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {leftFaqs.map((faq) => {
              const index = faqs.findIndex(f => f === faq);

              return (
                <div key={index} className="bg-[#2a2338] border border-white/10 rounded-xl shadow-lg transition hover:shadow-[0_0_25px_rgba(255,77,166,0.4)]">
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full text-left px-4 sm:px-6 py-3 min-h-[52px] flex justify-between items-center gap-2"
                  >
                    <span className="font-mono font-bold text-sm sm:text-base md:text-lg text-white/90 leading-snug">{faq.q}</span>
                    <span className="text-pink-400 text-xl">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/80 font-mono text-xs sm:text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4 sm:space-y-6">
            {rightFaqs.map((faq) => {
              const index = faqs.findIndex(f => f === faq);

              return (
                <div key={index} className="bg-[#2a2338] border border-white/10 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(255,77,166,0.4)] transition">
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full text-left px-4 sm:px-6 py-3 min-h-[52px] flex justify-between items-center gap-2"
                  >
                    <span className="font-mono font-bold text-sm sm:text-base md:text-lg text-white/90 leading-snug">{faq.q}</span>
                    <span className="text-pink-400 text-xl">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/80 font-mono text-xs sm:text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
