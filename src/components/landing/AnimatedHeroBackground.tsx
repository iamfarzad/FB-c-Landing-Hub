
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const AnimatedHeroBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a fallback or null during SSR to avoid hydration mismatch if needed,
    // though for a purely decorative background, returning null might be fine.
    return null;
  }

  const numLayers = 4; // Reduced for simplicity, can increase later
  const numTextElements = 6; // Reduced for simplicity

  const textSnippets = [
    "λ", "Σ", "ƒ(x)", "01", "AI", "data", "β", "∂", "∫", "<>", "∴"
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Base subtle gradient to ensure some color if layers are too transparent */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, oklch(var(--brand-orange) / 0.03) 0%, oklch(var(--background) / 0) 70%)`,
        }}
      />
      {Array.from({ length: numLayers }).map((_, i) => (
        <motion.div
          key={`layer-${i}`}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, oklch(var(--brand-orange) / ${0.04 + Math.random() * 0.08}) ${i * 15}%, oklch(var(--background) / 0) ${65 + i * 5}%)`,
            filter: 'blur(60px)', // Increased blur for softer effect
          }}
          animate={{
            x: [`${Math.random() * 30 - 15}vw`, `${Math.random() * 30 - 15}vw`],
            y: [`${Math.random() * 30 - 15}vh`, `${Math.random() * 30 - 15}vh`],
            scale: [1, 1.03 + Math.random() * 0.1, 1],
            opacity: [0.2 + Math.random() * 0.2, 0.4 + Math.random() * 0.2, 0.2 + Math.random() * 0.2],
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        />
      ))}
      {/* Soft overlay to blend layers */}
      <div className="absolute inset-0 bg-background/30 dark:bg-background/60 backdrop-blur-sm"></div>

      {Array.from({ length: numTextElements }).map((_, i) => (
        <motion.span
          key={`text-${i}`}
          className="absolute font-mono text-xs text-foreground/10 dark:text-foreground/5 select-none"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            opacity: 0, // Start with opacity 0
          }}
          animate={{
            x: [`${Math.random() * 30 - 15}px`, `${Math.random() * 70 - 35}px`, `${Math.random() * 30 - 15}px`],
            y: [`${Math.random() * 30 - 15}px`, `${Math.random() * 70 - 35}px`, `${Math.random() * 30 - 15}px`],
            opacity: [0, 0.1 + Math.random() * 0.1, 0],
            scale: [0.7, 1 + Math.random() * 0.1, 0.7],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'circInOut', // Changed easing for a different feel
            delay: i * 2 + Math.random() * 6,
          }}
        >
          {textSnippets[Math.floor(Math.random() * textSnippets.length)]}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedHeroBackground;
