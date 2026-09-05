"use client";

// Thin wrapper around Framer Motion's useReducedMotion so every animated
// component asks the same question the same way. Returns true when the
// visitor has requested reduced motion at the OS level.
import { useReducedMotion } from "framer-motion";

export default function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false;
}
