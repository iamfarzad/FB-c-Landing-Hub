
"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React, { useState } from "react";

interface HyperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  textClassName?: string; 
  reverse?: boolean;
  duration?: number;
  stagger?: number;
}

export const HyperText = React.forwardRef<
  HTMLElement, 
  HyperTextProps
>(
  (
    {
      children,
      as = "span",
      className,
      textClassName,
      reverse = false,
      duration = 0.3,
      stagger = 0.02,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const Tag = as as React.ElementType; 

    const letterVariants = {
      initial: { y: 0, opacity: 1 },
      hover: (i: number) => ({
        y: reverse ? 5 : -5,
        opacity: 0.7,
        transition: {
          delay: i * stagger,
          duration: duration,
          ease: "easeOut",
        },
      }),
      exit: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * stagger,
          duration: duration,
          ease: "easeIn",
        },
      }),
    };

    const renderContent = () => {
      if (typeof children === "string") {
        return children.split("").map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            custom={i}
            variants={letterVariants}
            className="inline-block" 
          >
            {letter === " " ? "\u00A0" : letter} 
          </motion.span>
        ));
      }
      
      if (React.isValidElement(children) && typeof children.type === 'string') {
        const childNodes = React.Children.toArray(children.props.children);
        if(childNodes.every(node => typeof node === 'string' || (React.isValidElement(node) && typeof node.type === 'string' && typeof node.props.children === 'string'))) {
           return React.Children.map(children.props.children, (child, childIndex) => {
             if (typeof child === 'string') {
               return child.split("").map((letter, letterIndex) => (
                 <motion.span key={`${letter}-${childIndex}-${letterIndex}`} custom={letterIndex} variants={letterVariants} className="inline-block">
                   {letter === " " ? "\u00A0" : letter}
                 </motion.span>
               ));
             }
            
             if (React.isValidElement(child) && typeof child.props.children === 'string') {
                const GrandChildTag = child.type as React.ElementType;
                return (
                  <GrandChildTag {...child.props} className={cn(child.props.className, "inline-block")}>
                    {child.props.children.split("").map((letter: string, letterIndex: number) => (
                       <motion.span key={`${letter}-${childIndex}-${letterIndex}`} custom={letterIndex} variants={letterVariants} className="inline-block">
                         {letter === " " ? "\u00A0" : letter}
                       </motion.span>
                    ))}
                  </GrandChildTag>
                );
             }
             return child;
           });
        }
      }
      return children; 
    };
    

    return (
      <Tag
        ref={ref}
        className={cn("relative inline-block cursor-pointer overflow-hidden align-middle", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <motion.div
          animate={isHovered ? "hover" : "exit"}
          initial="initial"
          className={cn("whitespace-nowrap flex items-center", textClassName)} 
        >
          {renderContent()}
        </motion.div>
      </Tag>
    );
  },
);

HyperText.displayName = "HyperText";
