'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface CloudProps {
  delay?: number;
  size?: number;
  opacity?: number;
  duration?: number;
  x?: number;
  y?: number;
}

interface CloudProps {
  delay?: number;
  size?: number;
  opacity?: number;
  duration?: number;
  x?: number;
  y?: number;
  z?: number;
  blur?: number;
  scale?: number;
  speed?: number;
}

const Cloud = ({ 
  delay = 0, 
  size = 1, 
  opacity = 0.1, 
  duration = 30, 
  x = 0, 
  y = 0, 
  z = 0, 
  blur = 5, 
  scale = 1,
  speed = 1 
}: CloudProps) => {
  const randomId = useMemo(() => Math.random().toString(36).substring(2, 9), []);
  
  return (
    <motion.div
      className="absolute pointer-events-none will-change-transform"
      style={{
        width: `${size * 100}px`,
        height: `${size * 60}px`,
        left: `${x}%`,
        top: `${y}%`,
        opacity,
        zIndex: Math.floor(z),
        filter: `blur(${blur}px)`,
        transform: `translateZ(${z}px)`,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        x: [
          `${Math.random() * 20 - 10}px`,
          `${Math.random() * 40 - 20}px`,
          `${Math.random() * 20 - 10}px`
        ],
        y: [
          `${Math.random() * 10 - 5}px`,
          `${Math.random() * 40 - 20}px`,
          `${Math.random() * 10 - 5}px`
        ],
        scale: [
          scale * 0.9,
          scale * (1 + Math.random() * 0.3),
          scale * 0.9
        ],
        opacity: [
          opacity * 0.7,
          opacity * 1.5,
          opacity * 0.7
        ],
      }}
      transition={{
        duration: (duration * (0.7 + Math.random() * 0.6)) / speed,
        delay: delay * speed,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <defs>
          <linearGradient id={`cloud-gradient-${randomId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
          <filter id={`cloud-blur-${randomId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            <title>Cloud blur effect</title>
          </filter>
        </defs>
        <path
          d="M20,30 Q10,30 10,20 Q10,10 20,10 Q25,0 35,0 Q45,0 50,10 Q60,5 70,10 Q80,15 90,15 Q100,15 105,20 Q115,20 115,30 Q115,40 105,40 Q100,50 90,50 Q80,50 70,45 Q60,55 50,50 Q45,60 35,60 Q25,60 20,50 Q10,50 10,40 Q10,30 20,30 Z"
          fill={`url(#cloud-gradient-${randomId})`}
          filter={`url(#cloud-blur-${randomId})`}
        />
      </svg>
    </motion.div>
  );
};

const AnimatedHeroBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const numLayers = 6;
  const numTextElements = 8;

  const textSnippets = [
    "λ", "Σ", "ƒ(x)", "01", "AI", "data", "β", "∂", "∫", "<>", "∴", "F.B/c", "AI", "Tech", "AI", "Code"
  ];

  // Create clouds with varying depths
  const numClouds = 15;
  const clouds = [];
  const depthLayers = 4; // Number of depth layers

  for (let i = 0; i < numClouds; i++) {
    const depth = Math.floor(Math.random() * depthLayers);
    const depthFactor = 0.5 + (depth / depthLayers) * 2; // Scale from 0.5 to 2.5
    const baseSize = 0.5 + Math.random() * 2;
    
    clouds.push({
      id: i,
      size: baseSize * depthFactor,
      opacity: 0.02 + (depth / depthLayers) * 0.08, // Deeper clouds are more visible
      duration: 60 + Math.random() * 120,
      delay: Math.random() * 10,
      x: Math.random() * 100,
      y: 20 + Math.random() * 60, // Keep clouds more centered vertically
      z: depth * 10, // Add z-index for depth
      blur: 5 + depth * 2, // Deeper clouds get more blur
      scale: 0.8 + (depth / depthLayers) * 0.8, // Scale based on depth
      speed: 0.5 + (depth / depthLayers) * 1.5 // Speed varies with depth
    });
  }
  
  // Sort clouds by z-index to ensure proper layering
  clouds.sort((a, b) => a.z - b.z);

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden bg-background"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Base subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, oklch(var(--brand-orange) / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, oklch(var(--brand-blue) / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at center, oklch(var(--background) / 1) 0%, oklch(var(--background) / 0) 100%)
          `,
          transform: 'translateZ(-100px)',
        }}
      />
      
      {/* Subtle gradient layers */}
      {Array.from({ length: numLayers }).map((_, i) => (
        <motion.div
          key={`layer-${i}`}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, 
              oklch(var(--brand-orange) / ${0.04 + Math.random() * 0.08}) ${i * 15}%, 
              oklch(var(--background) / 0) ${65 + i * 5}%)`,
            filter: 'blur(60px)', 
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
      
      {/* Cloud elements */}
      {clouds.map((cloud) => (
        <Cloud
          key={cloud.id}
          size={cloud.size}
          opacity={cloud.opacity}
          duration={cloud.duration}
          delay={cloud.delay}
          x={cloud.x}
          y={cloud.y}
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
            opacity: 0, 
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
            ease: 'circInOut', 
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
