import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import AnimatedInView from "@/components/ui/AnimatedInView";
import growDreamBelieveIllustration from "@/public/images/home/illustration-grow-dream-believe.jpg";

const STATS = [
  { value: "10–18", label: "Girls served, by age" },
  { value: "Nigeria", label: "Underserved communities" },
  { value: "7", label: "Core programme focus areas" },
];

// Short, honest "who we serve" callout for Home — deliberately framed as
// scope facts rather than impact numbers, since GLET is pre-launch and
// hasn't run a cohort yet. See MASTER.md §10 — don't invent impact stats.
export default function WhoWeServeStrip() {
  return (
    <Box component="section" sx={{ position: "relative", overflow: "hidden", py: { xs: 8, md: 10 } }}>
      <Image
        src={growDreamBelieveIllustration}
        alt="Illustration of three girls sitting together outdoors with journals, wearing shirts that say Grow Dream Believe and Focus Plan Win"
        fill
        style={{ objectFit: "cover" }}
        sizes="100vw"
      />
      {/* Sage tint over the photo — keeps the section's brand color and
          text contrast while still letting the image read through. */}
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "secondary.light", opacity: 0.87 }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <AnimatedInView>
          <Typography
            variant="h3"
            component="p"
            sx={{ maxWidth: "40ch", mb: { xs: 5, md: 6 } }}
          >
            GLET creates opportunities for girls to learn, develop their
            voices and lead in their communities.
          </Typography>
        </AnimatedInView>

        <Grid container spacing={4}>
          {STATS.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
              <AnimatedInView delay={index * 0.1}>
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "var(--font-heading), sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      color: "text.primary",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </AnimatedInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
