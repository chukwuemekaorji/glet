import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

// Consistent heading block (small eyebrow label + title + optional intro
// copy) reused at the top of every page section.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === "center" ? "42rem" : "100%",
        mx: align === "center" ? "auto" : 0,
        mb: { xs: 4, md: 6 },
      }}
    >
      {eyebrow && (
        <Typography
          component="p"
          sx={{
            color: "primary.dark",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: "0.8rem",
            mb: 1.5,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography component="h2" variant="h2" sx={{ mb: description ? 2 : 0 }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      )}
    </Box>
  );
}
