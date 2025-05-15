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

  // State for theme-dependent colors to ensure they update
  const [orbBaseColor, setOrbBaseColor] = useState('var(--brand-orange)');
  const [orbGlowColor, setOrbGlowColor] = useState('var(--brand-orange-glow-light)');
  const [ringColor, setRingColor] = useState('var(--brand-orange-ring-light)');

  useEffect(() => {
    if (mounted) {
      // Update colors based on theme from CSS variables
      // Note: We get the computed style to ensure CSS vars are resolved
      const computedStyle = getComputedStyle(document.documentElement);
      setOrbBaseColor(computedStyle.getPropertyValue('--brand-orange').trim());
      
      if (theme === 'dark') {
        setOrbGlowColor(computedStyle.getPropertyValue('--brand-orange-glow-dark').trim());
        setRingColor(computedStyle.getPropertyValue('--brand-orange-ring-dark').trim());
      } else {
        setOrbGlowColor(computedStyle.getPropertyValue('--brand-orange-glow-light').trim());
        setRingColor(computedStyle.getPropertyValue('--brand-orange-ring-light').trim());
      }
    }
  }, [mounted, theme]);

  if (!mounted) {
    // Render a static placeholder to avoid layout shifts and hydration errors
    return <div className={cn("relative flex items-center justify-center", className)} style={{width: '16rem', height: '16rem'}} />;
  }

  return (
    <motion.div
      className={cn("relative flex items-center justify-center group", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Outermost Ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{ 
          width: '100%', 
          height: '100%',
          borderColor: ringColor,
          transition: 'border-color 0.3s ease',
        }}
        animate={{
          scale: [1, 1.05, 1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 1.5
        }}
      />
      {/* Inner Ring */}
      <motion.div
        className="absolute rounded-full border"
        style={{ 
          width: '75%', 
          height: '75%',
          borderColor: ringColor,
          transition: 'border-color 0.3s ease',
        }}
        animate={{
          scale: [1, 1.03, 1, 1.06, 1],
          opacity: [0.4, 0.7, 0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.8
        }}
      />
      
      {/* Central Solid Orb with Glow */}
      <motion.div
        className="relative rounded-full" 
        style={{
          width: '40%', 
          height: '40%',
          backgroundColor: orbBaseColor, // Use dynamic orbBaseColor
          boxShadow: `0 0 60px 25px ${orbGlowColor}`, // Use dynamic orbGlowColor
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
        }}
        animate={{
          scale: [1, 1.08, 1], 
          boxShadow: [
            `0 0 60px 25px ${orbGlowColor}`,
            `0 0 70px 30px ${orbGlowColor}`,
            `0 0 60px 25px ${orbGlowColor}`,
          ],
        }}
        transition={{
          duration: 3.5, 
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut'
        }}
        whileHover={{ 
          scale: 1.15, 
          boxShadow: `0 0 80px 35px ${orbGlowColor}`
        }}
      />
    </motion.div>
  );
}