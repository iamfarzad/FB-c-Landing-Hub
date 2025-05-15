
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParticleOrbProps { // Renamed from CombinedOrbProps
  className?: string;
}

export function ParticleOrb({ className }: ParticleOrbProps) { // Renamed from CombinedOrb
  return (
    <div className={cn('orb-container', className)}>
      {/* Glow Circle */}
      <div className="glow-circle" />

      {/* Main Orb with Framer Motion */}
      <motion.div
        className="orb"
        animate={{
          y: ['0%', '-20%', '0%'],
          transition: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          },
        }}
      >
        {/* Core Orb Animation */}
        <div className="animate-orb-core" />
      </motion.div>

      {/* Reflection */}
      <div className="reflection" />

      {/* Wave Effects */}
      <div className="animate-orb-wave" />
      <div className="animate-orb-wave-delay" />
    </div>
  );
}
