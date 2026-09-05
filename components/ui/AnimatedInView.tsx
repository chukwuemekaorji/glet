"use client";

// Wraps scroll-triggered reveal animation so section components don't each
// reimplement the same whileInView/viewport boilerplate. Respects
// prefers-reduced-motion by rendering a plain, static wrapper instead.
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";
import useReducedMotionSafe from "@/hooks/useReducedMotionSafe";

interface AnimatedInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedInView({
  children,
  delay = 0,
  className,
}: AnimatedInViewProps) {
  const reduceMotion = useReducedMotionSafe();

  // height: 100% matters when this wraps a Grid item's content — a Grid
  // row stretches its direct item to the tallest sibling, but a plain
  // block div (this wrapper) still shrinks to its own content unless told
  // to fill that stretched height, which otherwise breaks equal-height
  // card grids (e.g. FrameworkPillars, ValuesGrid).
  if (reduceMotion) {
    return (
      <div className={className} style={{ height: "100%" }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ height: "100%" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
