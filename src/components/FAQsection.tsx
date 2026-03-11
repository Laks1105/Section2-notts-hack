'use client';

import { Suspense } from 'react';
import BlockchainScene2 from './BlockchainScene2';

import { useState } from 'react';



const faqs = [
  {
    q: 'What is Nott Hack 2026?',
    a: 'Nott Hack 2026 is a blockchain-themed student hackathon where participants build innovative decentralized solutions, learn new skills, and connect with other developers through workshops, mentorship, and competition.',
  },
  {
    q: 'Can I join without a team?',
    a: 'No, all participants must be part of a team.',
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
    q: 'When and where is it held?',
    a: 'Nott Hack 2026 will be held from 6th April to 12 April 2026 at the University of Nottingham, Malaysia.',
  },
  {
    q: 'When is the deadline for registration?',
    a: 'Registration will close around March 2026. The exact date will be announced soon.',
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
    q: 'How do I register?',
    a: 'You can register through Devfolio using the registration link provided.',
  },
  {
    q: 'Will prizes be provided to the winning team?',
    a: 'Yes, prizes will be awarded to the winning teams. Prize details will be announced soon.',
  },
  {
    q: 'Is registration free?',
    a: 'Yes, registration is completely free.',
  },
  {
    q: 'How can I contact the organisers?',
    a: 'Email: nottshack26@gmail.com | Instagram: @unm.css',
  },
];



export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#5D4777] to-[#5D4777] text-white px-6 py-20 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <BlockchainScene2 />
        </Suspense>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">


        <h2 className="font-pixel text-3xl md:text-3.5xl text-center mb-12">
          <span>FREQUENTLY</span>{' '}
          <span className="text-pink-400">ASKED</span>{' '}
          <span>QUESTIONS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {leftFaqs.map((faq) => {
              const index = faqs.findIndex(f => f === faq);

              return (
                <div key={index} className="bg-[#2a2338] border border-white/10 rounded-2xl shadow-lg transition hover:shadow-[0_0_25px_rgba(255,77,166,0.4)]">
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full text-left px-6 py-3 flex justify-between items-center"
                  >
                    <span className="font-mono font-bold text-lg text-white/90 leading-relaxed mb-6">{faq.q}</span>
                    <span className="text-pink-400 text-xl">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-6 pb-6 text-white/80 font-mono">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {rightFaqs.map((faq) => {
              const index = faqs.findIndex(f => f === faq);

              return (
                <div key={index} className="bg-[#2a2338] border border-white/10 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(255,77,166,0.4)] transition">
                  <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full text-left px-6 py-3 flex justify-between items-center"
                  >
                    <span className="font-mono font-bold text-lg text-white/90 leading-relaxed mb-6">{faq.q}</span>
                    <span className="text-pink-400 text-xl">
                      {open === index ? '−' : '+'}
                    </span>
                  </button>

                  {open === index && (
                    <div className="px-6 pb-6 text-white/80 font-mono">
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
