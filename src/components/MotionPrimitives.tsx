"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const GENTLE_EASE = [0.22, 1, 0.36, 1] as const;

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.65,
  y = 16,
  className = "",
}: FadeUpProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: GENTLE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export function StaggerGroup({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = "",
}: StaggerGroupProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: GENTLE_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CardHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHover({ children, className = "" }: CardHoverProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: GENTLE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Backward-compatible alias for any untouched routes
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <FadeUp delay={delay} className={className}>
      {children}
    </FadeUp>
  );
}
