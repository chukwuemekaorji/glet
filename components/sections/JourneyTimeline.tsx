"use client";

// Interactive "tap to see her progress" stepper — replaces a static list of
// all seven stages with one stage shown at a time, selected by tapping a
// point along the progress line. The filled portion of the line doubles as
// a visual metaphor for how far a girl has moved through the journey.
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SectionHeading from "@/components/ui/SectionHeading";
import useReducedMotionSafe from "@/hooks/useReducedMotionSafe";
import { JOURNEY_STAGES } from "@/lib/content";

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotionSafe();
  const activeStage = JOURNEY_STAGES[activeIndex];
  const progressPercent = (activeIndex / (JOURNEY_STAGES.length - 1)) * 100;

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="The GLET Journey"
          title="From receiving knowledge to sharing it"
          description="Tap a point on the line below to follow her progress, stage by stage."
        />

        {/* Progress line with tappable stage markers. The track/fill sit
            behind the dot row and span its full width — each dot's own
            circle naturally covers the few pixels where the line runs
            slightly past its center, so no pixel-perfect inset math is
            needed. */}
        <Box sx={{ position: "relative", mb: { xs: 5, md: 6 } }}>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: { xs: 14, sm: 16 },
              height: 3,
              borderRadius: 999,
              bgcolor: "divider",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: { xs: 14, sm: 16 },
              height: 3,
              borderRadius: 999,
              bgcolor: "primary.main",
              width: `${progressPercent}%`,
              transition: reduceMotion ? "none" : "width 400ms ease",
            }}
          />

          <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
            {JOURNEY_STAGES.map((stage, index) => {
              const isActive = index === activeIndex;
              const isCompleted = index < activeIndex;
              return (
                <Box
                  key={stage.name}
                  component="button"
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Stage ${index + 1} of ${JOURNEY_STAGES.length}: ${stage.name}`}
                  aria-current={isActive ? "step" : undefined}
                  sx={{
                    appearance: "none",
                    border: "none",
                    bgcolor: "transparent",
                    p: 0,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "&:focus-visible": {
                      outline: "2px solid",
                      outlineColor: "primary.main",
                      outlineOffset: 2,
                      borderRadius: "50%",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 28, sm: 32 },
                      height: { xs: 28, sm: 32 },
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      bgcolor: isActive || isCompleted ? "primary.main" : "background.paper",
                      color: isActive || isCompleted ? "primary.contrastText" : "text.secondary",
                      border: "2px solid",
                      borderColor: isActive || isCompleted ? "primary.main" : "divider",
                      transition: reduceMotion ? "none" : "all 200ms ease",
                      transform: isActive ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    {index + 1}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Active stage detail */}
        <Box sx={{ minHeight: { xs: 180, sm: 140 } }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.name}
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Typography
                component="p"
                sx={{
                  color: "primary.dark",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  mb: 1,
                }}
              >
                Stage {activeIndex + 1} of {JOURNEY_STAGES.length}
              </Typography>
              <Typography component="h3" variant="h3" sx={{ mb: 1.5 }}>
                {activeStage.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "60ch" }}>
                {activeStage.description}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}
