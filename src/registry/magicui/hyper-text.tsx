
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
  HTMLElement, // More generic for `as` prop
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
    const Tag = as as React.ElementType; // Cast to allow JSX rendering

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
            className="inline-block" // Needed for individual letter transform
          >
            {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
          </motion.span>
        ));
      }
      // If children is not a string, it might be a pre-styled ReactNode (e.g. for mixed colors)
      // In this case, we wrap the whole node for the hover effect, but individual letter animation is lost.
      // A more complex approach would involve traversing the children tree.
      // For now, we'll animate the whole block if it's not a simple string.
      if (React.isValidElement(children) && typeof children.type === 'string') {
        // Attempt to animate direct string children of simple HTML tags
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
             // For nested elements like <span>F.B/<span className="text-primary">c</span></span>
             // We'll animate the text content of these spans if they are strings
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
      return children; // Fallback for very complex children or non-string content
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
          className={cn("whitespace-nowrap flex items-center", textClassName)} // Use flex for proper alignment if children contains spans
        >
          {renderContent()}
        </motion.div>
      </Tag>
    );
  },
);

HyperText.displayName = "HyperText";
