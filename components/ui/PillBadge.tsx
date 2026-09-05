import Chip from "@mui/material/Chip";
import type { ReactNode } from "react";

interface PillBadgeProps {
  label: ReactNode;
  variant?: "primary" | "secondary";
}

// Small pill-shaped label used for the SDG credibility badge, tags on the
// "GLET Girl" traits, and anywhere else the brand's rounded wordmark
// treatment should show up outside the logo itself.
export default function PillBadge({ label, variant = "primary" }: PillBadgeProps) {
  return (
    <Chip
      label={label}
      sx={{
        bgcolor: variant === "primary" ? "primary.light" : "secondary.light",
        color: "text.primary",
        fontWeight: 700,
        px: 1,
      }}
    />
  );
}
