import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AnimatedInView from "@/components/ui/AnimatedInView";

const HEARTBEAT_LINES = [
  "Knowledge is planted in one girl.",
  "Leadership grows within her.",
  "Empowerment flows through her.",
  "Communities thrive because of her.",
];

// "The GLET Heartbeat" — the emotional core of the brand. Treated as a
// short manifesto block on a dark section so it reads as a statement, not
// another bullet list. See MASTER.md §3, item 4.
export default function RippleEffect() {
  return (
    <Box component="section" sx={{ bgcolor: "text.primary", color: "background.default", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <AnimatedInView>
          <Typography
            component="p"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              mb: 3,
              textAlign: "center",
            }}
          >
            The GLET Heartbeat
          </Typography>

          <Stack spacing={1.5} sx={{ textAlign: "center", mb: 4 }}>
            {HEARTBEAT_LINES.map((line) => (
              <Typography
                key={line}
                component="p"
                variant="h3"
                sx={{ color: "background.default", fontWeight: 700 }}
              >
                {line}
              </Typography>
            ))}
          </Stack>

          <Typography
            variant="body1"
            sx={{ color: "grey.400", textAlign: "center", maxWidth: "48ch", mx: "auto" }}
          >
            One girl equipped, many lives impacted — GLET is built around
            this ripple effect. Every girl who completes the programme
            becomes a GLET Ambassador, equipped not just with knowledge, but
            to pass it on.
          </Typography>
        </AnimatedInView>
      </Container>
    </Box>
  );
}
