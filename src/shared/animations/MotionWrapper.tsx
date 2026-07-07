"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/shared/hooks/useReducedMotion";
import { ANIMATION_VARIANTS } from "@/shared/animations/variants";
import { cn } from "@/shared/lib/utils";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: keyof typeof ANIMATION_VARIANTS;
  className?: string;
  delay?: number;
}

export function MotionWrapper({ 
  children, 
  variant = "fadeIn", 
  className,
  delay = 0,
  ...props 
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const selectedVariant = ANIMATION_VARIANTS[variant];

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-10%" }}
      variants={selectedVariant}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
