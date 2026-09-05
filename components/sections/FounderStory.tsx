import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AnimatedInView from "@/components/ui/AnimatedInView";
import outreachPhoto from "@/public/images/about/outreach-group-session.jpg";

// Raw SVG fill can't reference theme tokens directly (no CSS variables mode
// on the theme) — these mirror lib/theme.ts palette.primary.light and
// palette.text.primary. Update both places together if the palette changes.
const PLACEHOLDER_FILL_LIGHT = "#E4C4AE";
const PLACEHOLDER_FILL_DARK = "#2B2420";

const STORY_PARAGRAPHS = [
  "Through working with adolescent girls, conducting outreaches and volunteering in different outreach activities, our founder had the opportunity to interact with girls from different backgrounds. These experiences made one thing increasingly clear: many girls are growing up without enough knowledge about themselves, their bodies, their potential and the possibilities available to them.",
  "Every girl deserves to know her body, understand her health and have the knowledge to make informed decisions about her life. But knowledge should be the beginning, not the end — girls should be encouraged to desire growth, develop confidence, build leadership skills and believe that they belong in rooms they may have once been told they could never enter.",
  "Many programmes equip girls with valuable information, but what happens after the programme ends? GLET was created to take that one step further: to equip girls well enough to equip other girls.",
];

// A placeholder portrait illustration stands in for a real photo of the
// founder until one is supplied — see MASTER.md §5 and §10.
function FounderPortraitPlaceholder() {
  return (
    <Box
      component="svg"
      viewBox="0 0 320 320"
      aria-hidden="true"
      sx={{ width: "100%", maxWidth: 320, height: "auto", display: "block", mx: "auto" }}
    >
      <rect x="0" y="0" width="320" height="320" rx="32" fill={PLACEHOLDER_FILL_LIGHT} />
      <circle cx="160" cy="130" r="60" fill={PLACEHOLDER_FILL_DARK} opacity={0.85} />
      <path
        d="M60 300 C60 220 100 190 160 190 C220 190 260 220 260 300 Z"
        fill={PLACEHOLDER_FILL_DARK}
        opacity={0.85}
      />
    </Box>
  );
}

export default function FounderStory() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 4 }}>
            <AnimatedInView>
              <FounderPortraitPlaceholder />
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
