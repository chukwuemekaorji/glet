import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AnimatedInView from "@/components/ui/AnimatedInView";
import outreachPhoto from "@/public/images/about/outreach-group-session.jpg";
import founderPhoto from "@/public/images/about/founder-nkechi.jpg";

const STORY_PARAGRAPHS = [
  "Through working with adolescent girls, conducting outreaches and volunteering in different outreach activities, our founder had the opportunity to interact with girls from different backgrounds. These experiences made one thing increasingly clear: many girls are growing up without enough knowledge about themselves, their bodies, their potential and the possibilities available to them.",
  "Every girl deserves to know her body, understand her health and have the knowledge to make informed decisions about her life. But knowledge should be the beginning, not the end — girls should be encouraged to desire growth, develop confidence, build leadership skills and believe that they belong in rooms they may have once been told they could never enter.",
  "Many programmes equip girls with valuable information, but what happens after the programme ends? GLET was created to take that one step further: to equip girls well enough to equip other girls.",
];

export default function FounderStory() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 4 }}>
            <AnimatedInView>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 320,
                  aspectRatio: "1 / 1",
                  borderRadius: 6,
                  overflow: "hidden",
                  mx: "auto",
                }}
              >
                <Image
                  src={founderPhoto}
                  alt="Nkechi Patience Igwebuike, Founder of The GLET Initiative"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  sizes="(max-width: 900px) 100vw, 320px"
                />
              </Box>
              <Typography component="p" sx={{ fontWeight: 700, textAlign: "center", mt: 2 }}>
                Nkechi Patience Igwebuike
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                Founder, The GLET Initiative
              </Typography>
            </AnimatedInView>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <AnimatedInView delay={0.1}>
              <Typography
                component="p"
                sx={{
                  color: "primary.dark",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  mb: 1.5,
                }}
              >
                The Story Behind GLET
              </Typography>
              <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
                GLET was born from experience.
              </Typography>
              <Stack spacing={2.5}>
                {STORY_PARAGRAPHS.map((paragraph) => (
                  <Typography key={paragraph.slice(0, 24)} variant="body1" color="text.secondary">
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </AnimatedInView>
          </Grid>
        </Grid>

        <AnimatedInView delay={0.15}>
          <Box
            sx={{
              position: "relative",
              mt: { xs: 6, md: 8 },
              borderRadius: 6,
              overflow: "hidden",
              aspectRatio: "16 / 9",
            }}
          >
            <Image
              src={outreachPhoto}
              alt="A community outreach session with a group of schoolgirls — the kind of on-the-ground experience that shaped GLET's founding"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 1024px"
            />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, textAlign: "center" }}>
            A community outreach session — the kind of hands-on experience that shaped GLET&apos;s founding.
          </Typography>
        </AnimatedInView>
      </Container>
    </Box>
  );
}
