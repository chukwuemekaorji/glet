// Shared Framer Motion variants — defined once, reused everywhere, so
// every section on the site animates with the same rhythm. See MASTER.md
// §6 for the motion guide these implement.
import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

// Applied to the button/link primitives for a crisp, non-bouncy press feel.
export const tapScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};
