
"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { PropsWithChildren, useRef, useEffect, useState } from "react";

interface DockContextProps {
  mouseX: any;
  width: number | undefined;
  magnification?: number;
  distance?: number;
}

const DockContext = React.createContext<DockContextProps | null>(null);

const useDock = () => {
  const context = React.useContext(DockContext);
  if (!context) {
    throw new Error("useDock must be used within a DockProvider");
  }
  return context;
};

export const dockVariants = cva(
  "flex h-16 items-end gap-2 rounded-full border bg-background/70 px-3 pb-2 backdrop-blur-md dark:bg-neutral-900/70",
  {
    variants: {
      direction: {
        top: "top-4 left-1/2 -translate-x-1/2 flex-row",
        bottom: "bottom-4 left-1/2 -translate-x-1/2 flex-row",
        left: "left-4 top-1/2 -translate-y-1/2 flex-col !items-center !justify-end h-auto !gap-2 !p-2",
        right: "right-4 top-1/2 -translate-y-1/2 flex-col !items-center !justify-end h-auto !gap-2 !p-2",
        middle: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-row",
      },
    },
    defaultVariants: {
      direction: "bottom",
    },
  },
);

interface DockProps extends PropsWithChildren<VariantProps<typeof dockVariants>> {
  className?: string;
  magnification?: number;
  distance?: number;
}

export const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      direction = "bottom",
      magnification = 50, // Default magnification
      distance = 60,    // Default distance
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
      const handleResize = () => {
        if (containerRef.current) {
          setWidth(containerRef.current.offsetWidth);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <DockContext.Provider value={{ mouseX, width, magnification, distance }}>
        <motion.div
          ref={ref}
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={cn(dockVariants({ direction }), className)}
          {...props}
        >
          {children}
        </motion.div>
      </DockContext.Provider>
    );
  },
);
Dock.displayName = "Dock";

interface DockIconProps {
  size?: number; // Size of the icon itself, magnification will be relative to this
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  "data-testid"?: string;
}

export const DockIcon = ({
  size = 40, // Default icon size
  className,
  children,
  ...props
}: DockIconProps) => {
  const { mouseX, width, magnification = 50, distance = 60 } = useDock();
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // New width calculation based on magnification factor relative to base size
  const iconMagnification = size + magnification; 
  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, iconMagnification, size], // Magnify from base size to base size + magnification
  );

  const widthSpring = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: widthSpring, height: widthSpring }} // Make height also dynamic
      className={cn(
        "flex items-center justify-center rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
DockIcon.displayName = "DockIcon";
