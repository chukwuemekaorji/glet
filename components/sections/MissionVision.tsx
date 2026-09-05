import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import AnimatedInView from "@/components/ui/AnimatedInView";
import PillBadge from "@/components/ui/PillBadge";
import visionIllustration from "@/public/images/about/illustration-her-story-our-future.jpg";

export default function MissionVision() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <AnimatedInView>
              <Typography component="h2" variant="h3" sx={{ mb: 2 }}>
                Mission
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The GLET Initiative equips adolescent girls with the
                knowledge, skills and confidence to Grow, Lead, Empower and
                Thrive through health literacy, leadership development, life
                skills education, mentorship and community engagement.
              </Typography>
            </AnimatedInView>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <AnimatedInView delay={0.1}>
              <Typography component="h2" variant="h3" sx={{ mb: 2 }}>
                Vision
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                To raise a generation of informed, confident, compassionate
                and resilient girls who become leaders, advocates and
                changemakers, creating healthier and more empowered
                communities across Nigeria and beyond.
              </Typography>
              <PillBadge label="Aligned with UN SDG 5 — Gender Equality" />
            </AnimatedInView>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <AnimatedInView delay={0.2}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 6,
                  overflow: "hidden",
                  aspectRatio: "4 / 5",
                }}
              >
                <Image
                  src={visionIllustration}
                  alt="Illustration of girls reading a book titled Her Story, Our Future together"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 400px"
                />
              </Box>
            </AnimatedInView>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
