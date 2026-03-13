'use client';

import { motion } from 'framer-motion';

export default function DuckMascot({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} relative`}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Duck body */}
        <motion.ellipse
          cx="32"
          cy="40"
          rx="18"
          ry="14"
          fill="#FFE135"
          stroke="#3D2D5A"
          strokeWidth="2"
        />
        
        {/* Duck head */}
        <motion.circle
          cx="32"
          cy="22"
          r="12"
          fill="#FFE135"
          stroke="#3D2D5A"
          strokeWidth="2"
        />
        
        {/* Beak */}
        <motion.ellipse
          cx="44"
          cy="24"
          rx="6"
          ry="3"
          fill="#FF9500"
          stroke="#3D2D5A"
          strokeWidth="1.5"
        />
        
        {/* Eye */}
        <motion.circle
          cx="36"
          cy="20"
          r="3"
          fill="#3D2D5A"
        />
        <motion.circle
          cx="37"
          cy="19"
          r="1"
          fill="#FFFFFF"
        />
        
        {/* Wing */}
        <motion.ellipse
          cx="26"
          cy="42"
          rx="8"
          ry="6"
          fill="#FFD700"
          stroke="#3D2D5A"
          strokeWidth="1.5"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Laptop */}
        <motion.rect
          x="36"
          y="44"
          width="20"
          height="12"
          rx="2"
          fill="#5CE6A0"
          stroke="#3D2D5A"
          strokeWidth="1.5"
        />
        <motion.rect
          x="38"
          y="46"
          width="16"
          height="8"
          rx="1"
          fill="#2D2D3A"
        />
        
        {/* Typing animation - keys */}
        <motion.rect
          x="40"
          y="48"
          width="2"
          height="2"
          fill="#FF4DA6"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
        />
        <motion.rect
          x="44"
          y="48"
          width="2"
          height="2"
          fill="#5CE6A0"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
        />
        <motion.rect
          x="48"
          y="48"
          width="2"
          height="2"
          fill="#FF4DA6"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
        />
        <motion.rect
          x="42"
          y="51"
          width="2"
          height="2"
          fill="#FFFFFF"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
        />
        <motion.rect
          x="46"
          y="51"
          width="2"
          height="2"
          fill="#FFFFFF"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}
