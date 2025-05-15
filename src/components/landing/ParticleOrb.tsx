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
    // Fallback for SSR or before theme is mounted to avoid layout shift
    return <div className={`relative w-64 h-64 rounded-full ${className}`} />;
  }

  // Use OKLCH for brand orange with alpha for the main orb's gradient
  // --brand-orange: oklch(0.686 0.219 41.6)
  const mainOrbColorStart = 'oklch(0.686 0.219 41.6 / 0.25)'; // Lighter, more transparent start
  const mainOrbColorEnd = 'oklch(0.686 0.219 41.6 / 0.05)';  // Very transparent end for smooth blend

  // Particle colors based on theme (subtle white/black with alpha)
  const particleBaseColor = theme === 'dark' ? 'oklch(1 1 1 / 0.5)' : 'oklch(0 0 0 / 0.4)'; // white for dark, black for light

  return (
    <motion.div
      className={`relative w-56 h-56 md:w-72 md:h-72 rounded-full ${className}`} // Slightly smaller for better fit
      style={{
        background: `radial-gradient(circle at center, ${mainOrbColorStart}, ${mainOrbColorEnd} 70%)`,
        transition: 'background 0.3s ease',
      }}
      animate={{
        scale: [1, 1.03, 1], // More subtle pulse
        opacity: [0.7, 0.9, 0.7],
      }}
      transition={{
        duration: 5, // Slower, more calming pulse
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {Array.from({ length: 15 }, (_, index) => { // Increased particle count slightly
        const angle = (index / 15) * 2 * Math.PI; // Distribute particles evenly
        const initialRadius = 80 + Math.random() * 20; // Base radius for particles md:110 + Math.random() * 30
        const hoveredRadius = initialRadius + 15;

        return (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-1.5 h-1.5 rounded-full" // Slightly smaller particles
            style={{
              background: particleBaseColor,
              left: '50%',
              top: '50%',
              // transform will be handled by framer-motion
            }}
            animate={{
              x: Math.cos(angle) * (isHovered ? hoveredRadius : initialRadius) - (0.09375 * 16 / 2), // Center particles
              y: Math.sin(angle) * (isHovered ? hoveredRadius : initialRadius) - (0.09375 * 16 / 2), // Center particles
              scale: [0.8, 1.3, 0.8],
              opacity: [0.5, isHovered ? 0.9 : 0.7, 0.5],
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5, // Varied duration for organic feel
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.15, // Staggered animation start
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </motion.div>
  );
}
