'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ParticleOrbProps {
  className?: string;
}

export function ParticleOrb({ className = '' }: ParticleOrbProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Fallback for SSR or before theme is mounted
    return <div className={`relative w-56 h-56 md:w-64 md:h-64 rounded-full ${className}`} />;
  }

  // Using CSS variables for brand orange to ensure consistency with globals.css
  // oklch(var(--brand-orange)) is the base
  const baseOrbColor = 'oklch(var(--brand-orange))'; // Solid orange for the core
  const glowColorCenter = 'oklch(var(--brand-orange) / 0.4)'; // More intense glow center
  const glowColorEdge = 'oklch(var(--brand-orange) / 0)';   // Transparent edge for glow
  const ringColor = 'oklch(var(--brand-orange) / 0.2)';    // Subtle rings

  return (
    <motion.div
      className={`relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Soft background glow */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, ${glowColorCenter}, ${glowColorEdge} 70%)`,
        }}
        animate={{
          scale: isHovered ? [1.1, 1.2, 1.1] : [1, 1.1, 1],
          opacity: isHovered ? [0.7, 0.9, 0.7] : [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      {/* Central Orange Orb */}
      <motion.div
        className="relative w-2/3 h-2/3 rounded-full shadow-lg"
        style={{ background: baseOrbColor }}
        animate={{
          scale: isHovered ? [1, 1.03, 1] : [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      {/* Concentric Rings */}
      {[0, 1].map((index) => (
        <motion.div
          key={`ring-${index}`}
          className="absolute w-full h-full rounded-full"
          style={{
            border: `2px solid ${ringColor}`,
            boxShadow: `0 0 10px ${ringColor}`,
          }}
          animate={{
            scale: isHovered ? [1 + index * 0.25, 1.1 + index * 0.25, 1 + index * 0.25] : [1 + index * 0.2, 1.05 + index * 0.2, 1 + index * 0.2],
            opacity: isHovered ? [0.3, 0.5, 0.3] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + index * 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        />
      ))}
    </motion.div>
  );
}
