import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedInView from "@/components/ui/AnimatedInView";
import { FRAMEWORK_PILLARS } from "@/lib/content";

// Editorial row layout — a big colored letter, an icon and copy per pillar,
// separated by a thin rule rather than boxed cards. Reads as one connected
// sequence (G → L → E → T) instead of four separate tiles.
export default function FrameworkPillars() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="The GLET Framework"
          title="Grow. Lead. Empower. Thrive."
          description="Four interconnected pillars guide how GLET equips adolescent girls to become informed, confident and empowered young women."
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          divider={
            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                display: { xs: "block", md: "none" },
                my: 4,
              }}
            />
          }
        >
          {FRAMEWORK_PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const isLast = index === FRAMEWORK_PILLARS.length - 1;
            return (
              <Box
                key={pillar.letter}
                sx={{
                  flex: 1,
                  position: "relative",
                  pr: { md: isLast ? 0 : 4 },
                  pl: { md: index === 0 ? 0 : 4 },
                  borderRight: { md: isLast ? "none" : "1px solid" },
                  borderColor: { md: "divider" },
                }}
              >
                <AnimatedInView delay={index * 0.08}>
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "var(--font-heading), sans-serif",
                      fontWeight: 800,
                      fontSize: { xs: "3rem", md: "3.5rem" },
                      lineHeight: 1,
                      color: "primary.dark",
                      mb: 2,
                    }}
                  >
                    {pillar.letter}
                  </Typography>
                  <Icon sx={{ color: "secondary.dark", fontSize: 26, mb: 1.5 }} />
                  <Typography component="h3" variant="h4" sx={{ mb: 1.5 }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pillar.description}
                  </Typography>
                </AnimatedInView>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
