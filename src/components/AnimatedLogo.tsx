'use client';

import { motion } from 'framer-motion';

const logoColors = ['#FF4DA6', '#FFFFFF', '#5CE6A0', '#FF4DA6', '#FFFFFF', '#5CE6A0', '#FF4DA6', '#FFFFFF', '#5CE6A0'];

export default function AnimatedLogo() {
  const letters = 'NOTTS HACK'.split('');

  return (
    <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="font-pixel text-3xl md:text-5xl lg:text-7xl"
          style={{
            color: logoColors[index % logoColors.length],
            textShadow: `
              3px 3px 0 #3D2D5A,
              -1px -1px 0 #3D2D5A,
              1px -1px 0 #3D2D5A,
              -1px 1px 0 #3D2D5A,
              0 0 20px ${logoColors[index % logoColors.length]}40
            `,
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.1 },
            y: { duration: 0.5, delay: index * 0.1 },
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
}
