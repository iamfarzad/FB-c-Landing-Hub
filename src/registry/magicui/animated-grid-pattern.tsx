
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Corrected import if it was 'motion/react'
import React, { useEffect, useMemo, useState } from "react";

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
  maxOpacity = 0.5,
  duration = 3,
  repeatDelay = 1,
  className,
  gridCellClassName,
}: AnimatedGridPatternProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const squares = useMemo(() => {
    if (!mounted) return []; 
    return Array.from({ length: numSquares }).map((_, i) => (
      <motion.div
        key={i}
        className={cn(
          "rounded-md bg-current", 
          gridCellClassName,
        )}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, Math.random() * maxOpacity, 0],
        }}
        transition={{
          duration: duration + Math.random() * (duration / 2), 
          repeat: Infinity,
          delay: Math.random() * repeatDelay + (i * 0.05), 
          ease: "easeInOut",
        }}
        style={{
          width: `${Math.random() * 1.5 + 0.5}rem`, 
          height: `${Math.random() * 1.5 + 0.5}rem`,
        }}
      />
    ));
  }, [mounted, numSquares, maxOpacity, duration, repeatDelay, gridCellClassName]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden", // Ensure overflow-hidden here or on parent
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
