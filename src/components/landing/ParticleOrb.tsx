'use client';

import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface ParticleOrbProps {
  className?: string;
  orbSize?: string; // e.g., 'w-64 h-64'
  numOrbitingParticles?: number;
  numTrailParticles?: number;
  trailLifespan?: number;
}

const PARTICLE_SIZE_BASE = 4; // Base size for particles in px
const ORBIT_RADIUS_BASE = 100; // Base orbit radius in px

export function ParticleOrb({
  className = '',
  orbSize = 'w-64 h-64', // Default size
  numOrbitingParticles = 15,
  numTrailParticles = 20, // Max trail particles visible at once
  trailLifespan = 800, // milliseconds
}: ParticleOrbProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trailParticles, setTrailParticles] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);
  
  const orbRef = useRef<HTMLDivElement>(null);
  const lastTrailTimeRef = useRef(0);
  const particleIdCounter = useRef(0);

  // Theme-aware colors
  const [orbGradientStart, setOrbGradientStart] = useState('var(--brand-orange)');
  const [orbGradientEnd, setOrbGradientEnd] = useState('var(--brand-orange-deep)');
  const [orbGlowColor, setOrbGlowColor] = useState('hsla(var(--brand-orange-hsl-values), 0.5)');
  const [particleColor, setParticleColor] = useState('var(--brand-orange)');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const computedStyle = getComputedStyle(document.documentElement);
      const brandOrange = computedStyle.getPropertyValue('--brand-orange').trim();
      const brandOrangeDeep = computedStyle.getPropertyValue('--brand-orange-deep').trim();
      const brandOrangeHsl = computedStyle.getPropertyValue('--brand-orange-hsl-values').trim();
      
      setOrbGradientStart(brandOrange || 'oklch(0.686 0.219 41.6)'); // Fallback
      setOrbGradientEnd(brandOrangeDeep || 'oklch(0.608 0.206 40.03)'); // Fallback
      setParticleColor(brandOrange || 'oklch(0.686 0.219 41.6)'); // Fallback

      const defaultHsl = '27, 100%, 55%'; // Fallback HSL values
      const currentHsl = brandOrangeHsl || defaultHsl;

      if (theme === 'dark') {
        setOrbGlowColor(computedStyle.getPropertyValue('--brand-orange-glow-dark').trim() || `hsla(${currentHsl}, 0.6)`);
      } else {
        setOrbGlowColor(computedStyle.getPropertyValue('--brand-orange-glow-light').trim() || `hsla(${currentHsl}, 0.4)`);
      }
    }
  }, [mounted, theme]);

  // Orbiting particles data
  const orbitingParticles = React.useMemo(() => {
    if (!mounted) return [];
    const baseRadius = orbRef.current ? Math.min(orbRef.current.offsetWidth, orbRef.current.offsetHeight) * 0.35 : ORBIT_RADIUS_BASE * 0.7;
    return Array.from({ length: numOrbitingParticles }).map((_, i) => {
      const angle = (i / numOrbitingParticles) * 2 * Math.PI;
      const radiusVariance = baseRadius * (0.9 + Math.random() * 0.3); // 90-120% of base
      const duration = 6 + Math.random() * 6; // 6-12 seconds
      const particleSize = PARTICLE_SIZE_BASE * (0.6 + Math.random() * 0.6); // 60-120% of base size
      return {
        id: `orbit-${i}`,
        initialAngle: angle,
        radiusX: radiusVariance * (0.8 + Math.random() * 0.4), // Elliptical orbits
        radiusY: radiusVariance * (0.8 + Math.random() * 0.4),
        duration,
        particleSize,
        delay: Math.random() * duration,
      };
    });
  }, [mounted, numOrbitingParticles, orbRef.current]);


  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!isHovering || !orbRef.current) return;

    const now = Date.now();
    if (now - lastTrailTimeRef.current < 30) return; // Throttle particle creation more aggressively
    lastTrailTimeRef.current = now;

    const rect = orbRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2; 
    const y = event.clientY - rect.top - rect.height / 2;

    setTrailParticles(prev => {
      const newParticle = { id: particleIdCounter.current++, x, y, timestamp: Date.now() };
      const updatedParticles = [...prev, newParticle];
      return updatedParticles.slice(-numTrailParticles); 
    });
  }, [isHovering, numTrailParticles]);
  
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrailParticles(prev => prev.filter(p => now - p.timestamp < trailLifespan));
    }, trailLifespan / 2);
    return () => clearInterval(cleanupInterval);
  }, [trailLifespan]);


  if (!mounted) {
    return <div className={cn("relative flex items-center justify-center", className, orbSize)} />;
  }

  return (
    <motion.div
      ref={orbRef}
      className={cn("relative flex items-center justify-center group cursor-pointer", className, orbSize)}
      style={{ width: '100%', height: '100%'}} // Ensure parent div defines size
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
      onPointerMove={handlePointerMove}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Main Glowing Orb */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '45%', 
          height: '45%',
          background: `radial-gradient(circle, ${orbGradientStart} 40%, ${orbGradientEnd} 100%)`,
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
        animate={{
          scale: isHovering ? 1.15 : [1, 1.06, 1],
          boxShadow: isHovering 
            ? [`0 0 90px 35px ${orbGlowColor}`, `0 0 110px 45px ${orbGlowColor}`, `0 0 100px 40px ${orbGlowColor}`]
            : [`0 0 75px 30px ${orbGlowColor}`, `0 0 90px 35px ${orbGlowColor}`, `0 0 75px 30px ${orbGlowColor}`],
        }}
        transition={{
          duration: isHovering ? 0.3 : 3.5,
          repeat: isHovering ? 0 : Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />

      {/* Orbiting Particles */}
      {orbitingParticles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{ 
            width: particle.particleSize, 
            height: particle.particleSize,
            backgroundColor: particleColor,
            opacity: 0, 
            left: '50%', 
            top: '50%',
            boxShadow: `0 0 ${particle.particleSize * 1.5}px ${particle.particleSize * 0.4}px ${orbGlowColor}`,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: Math.cos(particle.initialAngle) * particle.radiusX * (isHovering ? 1.2 : 1),
            y: Math.sin(particle.initialAngle) * particle.radiusY * (isHovering ? 1.2 : 1),
            opacity: [0.2, 0.7, 0.2],
            scale: isHovering ? 1.25 : 1,
          }}
          transition={{
            x: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
              repeatType: "loop", // Ensures continuous orbit
              config: { from: particle.initialAngle, to: particle.initialAngle + 2 * Math.PI }
            },
             y: {
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
              repeatType: "loop",
              config: { from: particle.initialAngle, to: particle.initialAngle + 2 * Math.PI }
            },
            opacity: {
              duration: particle.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
              repeatType: "mirror",
            },
            scale: { duration: 0.3, ease: "easeOut" }
          }}
        />
      ))}

      {/* Trail Particles */}
      <AnimatePresence>
        {trailParticles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-sm pointer-events-none"
            style={{
              width: PARTICLE_SIZE_BASE * 0.75,
              height: PARTICLE_SIZE_BASE * 0.75,
              backgroundColor: particleColor,
              left: '50%',
              top: '50%',
              boxShadow: `0 0 ${PARTICLE_SIZE_BASE}px ${PARTICLE_SIZE_BASE * 0.3}px ${orbGlowColor}`,
            }}
            initial={{ x: p.x, y: p.y, opacity: 0.9, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1, transition: { duration: trailLifespan / 1000 * 0.9 } }}
            transition={{ duration: trailLifespan / 1000 * 0.1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
