
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState, useMemo } from "react";

interface AnimatedGridPatternProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
  gridCellClassName?: string;
}

export function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.1, // Default from demo
  duration = 3,     // Default from demo
  repeatDelay = 1,  // Default from demo
  className,
  gridCellClassName,
}: AnimatedGridPatternProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const squares = useMemo(() => {
    return Array.from({ length: numSquares }).map((_, i) => (
      <motion.div
        key={i}
        className={cn(
            "bg-current rounded-md", // Use current color and make them squares
            gridCellClassName
        )}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, Math.random() * maxOpacity, 0], // Fade in and out
        }}
        transition={{
          duration: duration + Math.random() * (duration / 2), // Randomize duration slightly
          repeat: Number.POSITIVE_INFINITY,
          delay: Math.random() * repeatDelay + (i * 0.05), // Stagger start times
          ease: "easeInOut",
        }}
        style={{
            width: `${Math.random() * 1.5 + 0.5}rem`, // Random width for variety
            height: `${Math.random() * 1.5 + 0.5}rem`, // Random height for variety
        }}
      />
    ));
  }, [numSquares, maxOpacity, duration, repeatDelay, gridCellClassName]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 grid h-full w-full transform-gpu grid-cols-[repeat(auto-fill,minmax(3rem,1fr))] grid-rows-[repeat(auto-fill,minmax(3rem,1fr))] gap-4"
      >
        {squares}
      </div>
    </div>
  );
}
