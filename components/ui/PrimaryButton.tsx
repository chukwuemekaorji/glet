"use client";

import Button, { type ButtonProps } from "@mui/material/Button";
import { motion } from "framer-motion";
import { tapScale } from "@/lib/motion";
import useReducedMotionSafe from "@/hooks/useReducedMotionSafe";

// Wraps MUI's Button with the site's subtle hover/tap feedback. Kept as one
// primitive so every CTA on the site feels identical rather than each page
// re-tuning its own scale values.
export default function PrimaryButton(props: ButtonProps) {
  const reduceMotion = useReducedMotionSafe();

  if (reduceMotion) {
    return <Button {...props} />;
  }

  return (
    <motion.div
      style={{ display: "inline-block" }}
      whileHover={tapScale.whileHover}
      whileTap={tapScale.whileTap}
    >
      <Button {...props} />
    </motion.div>
  );
}
