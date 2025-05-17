
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AnimatedHeroBackground = () => {
  const numLayers = 5; // Number of overlapping gradient layers
  const numTextElements = 10; // Number of floating text elements

  const textSnippets = [
    "λ", "Σ", "ƒ(x)", "01", "AI", "data", "β", "∂", "∫", "<>", "||", "&&", "∴", "∵"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-background">
      {Array.from({ length: numLayers }).map((_, i) => (
        <motion.div
          key={`layer-${i}`}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, oklch(var(--brand-orange) / ${0.05 + Math.random() * 0.1}) ${i * 10}%, oklch(var(--background) / 0) ${60 + i * 10}%)`,
          }}
          animate={{
            x: [`${Math.random() * 40 - 20}%`, `${Math.random() * 40 - 20}%`],
            y: [`${Math.random() * 40 - 20}%`, `${Math.random() * 40 - 20}%`],
            scale: [1, 1.05 + Math.random() * 0.1, 1],
            opacity: [0.3 + Math.random() * 0.3, 0.5 + Math.random() * 0.3, 0.3 + Math.random() * 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}
      {/* Blurred overlay for softer look */}
      <div className="absolute inset-0 backdrop-blur-lg md:backdrop-blur-xl"></div>

      {/* Floating text snippets */}
      {Array.from({ length: numTextElements }).map((_, i) => (
        <motion.span
          key={`text-${i}`}
          className="absolute font-mono text-xs text-foreground/30 dark:text-foreground/20 select-none"
          style={{
            left: `${Math.random() * 90 + 5}%`, // Keep within bounds
            top: `${Math.random() * 90 + 5}%`,
          }}
          animate={{
            x: [`${Math.random() * 20 - 10}px`, `${Math.random() * 60 - 30}px`, `${Math.random() * 20 - 10}px`],
            y: [`${Math.random() * 20 - 10}px`, `${Math.random() * 60 - 30}px`, `${Math.random() * 20 - 10}px`],
            opacity: [0, 0.3 + Math.random() * 0.3, 0],
            scale: [0.8, 1 + Math.random() * 0.2, 0.8],
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 1.5 + Math.random() * 5,
          }}
        >
          {textSnippets[Math.floor(Math.random() * textSnippets.length)]}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedHeroBackground;
