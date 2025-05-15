'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParticleOrbProps {
  className?: string; 
}

export function ParticleOrb({ className = '' }: ParticleOrbProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const orbBaseColor = 'hsl(var(--brand-orange))';
  // Fallback values if CSS variables are not immediately available during first client render.
  // Will be overridden by actual CSS vars once `mounted` and theme are resolved.
  const [orbGlowColor, setOrbGlowColor] = useState('hsla(27, 100%, 55%, 0.20)');
  const [ringColor, setRingColor] = useState('hsla(27, 100%, 55%, 0.06)');

  useEffect(() => {
    if (mounted) {
      const newGlowColor = theme === 'dark' ? 'hsl(var(--brand-orange-glow-dark))' : 'hsl(var(--brand-orange-glow-light))';
      const newRingColor = theme === 'dark' ? 'hsl(var(--brand-orange-ring-dark))' : 'hsl(var(--brand-orange-ring-light))';
      setOrbGlowColor(newGlowColor);
      setRingColor(newRingColor);
    }
  }, [mounted, theme]);


  if (!mounted) {
    // Render a static placeholder to avoid layout shifts and hydration errors
    // Ensures the container takes up space before client-side rendering.
    return <div className={cn("relative flex items-center justify-center", className)} style={{width: '16rem', height: '16rem'}} />;
  }

  return (
    <motion.div
      className={cn("relative flex items-center justify-center group", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Example: className might pass "w-64 h-64" (16rem)
    >
      {/* Outermost Ring */}
      <motion.div
        className="absolute rounded-full border" // Reduced border thickness
        style={{ 
          width: '100%', 
          height: '100%',
          borderColor: ringColor, // Uses state variable for theme-awareness
          transition: 'border-color 0.3s ease', // Smooth transition for theme change
        }}
        animate={{
          scale: [1, 1.03, 1], // More subtle scale
          opacity: [0.6, 0.9, 0.6], // Subtle opacity pulse
        }}
        transition={{
          duration: 7, // Slower, more ethereal
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      {/* Inner Ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{ 
          width: '70%', // Slightly smaller inner ring
          height: '70%',
          borderColor: ringColor,
          transition: 'border-color 0.3s ease',
        }}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.5
        }}
      />
      
      {/* Central Solid Orb with Glow */}
      <motion.div
        className="relative rounded-full" 
        style={{
          width: '30%', // Solid orb is ~1/3 of the container (e.g., ~5.3rem if container is 16rem)
          height: '30%',
          backgroundColor: orbBaseColor,
          boxShadow: `0 0 50px 20px ${orbGlowColor}`, // Adjusted glow: blur 50px, spread 20px
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
        }}
        animate={{
          scale: [1, 1.06, 1], 
        }}
        transition={{
          duration: 3, // Main orb pulse
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut'
        }}
        whileHover={{ 
          scale: 1.12, // Slightly more pronounced hover scale
          boxShadow: `0 0 60px 30px ${orbGlowColor}` // Enhanced glow on hover
        }}
      />
    </motion.div>
  );
}
