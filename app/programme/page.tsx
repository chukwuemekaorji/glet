import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FrameworkPillars from "@/components/sections/FrameworkPillars";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import AmbassadorModel from "@/components/sections/AmbassadorModel";
import GetInvolvedCTA from "@/components/sections/GetInvolvedCTA";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "The GLET Framework, the seven-stage GLET Journey, and the GLET Ambassador model — how GLET equips adolescent girls in Nigeria to grow, lead, empower and thrive.",
  alternates: { canonical: "/programme" },
  openGraph: {
    title: "Programme | The GLET Initiative",
    description: "How GLET equips adolescent girls to grow, lead, empower and thrive.",
  },
};

export default function ProgrammePage() {
  return (
    <>
      <Box component="section" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 2, md: 2 } }}>
        <Container maxWidth="md">
          <Typography
            component="p"
            sx={{
              color: "primary.dark",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              mb: 2,
              textAlign: "center",
            }}
          >
            Our Programme
          </Typography>
          <Typography component="h1" variant="h1" sx={{ textAlign: "center", mb: 2 }}>
            Equipping girls to equip other girls
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", maxWidth: "56ch", mx: "auto" }}
          >
            A one-day, girl-centered learning experience covering health
            literacy, leadership, life skills, financial literacy and
            mentorship — designed so girls don&apos;t just receive
            knowledge, but learn how to share it.
          </Typography>
        </Container>
      </Box>

      <FrameworkPillars />
      <JourneyTimeline />
      <AmbassadorModel />
      <GetInvolvedCTA />
    </>
  );
}
