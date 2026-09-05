import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AnimatedInView from "@/components/ui/AnimatedInView";
import heroBackground from "@/public/images/home/hero-bw-classmates.jpg";

// The first section a visitor sees. The background photo is a real, candid
// GLET photo (see public/images/CREDITS.md) — a dark overlay keeps the
// white headline/body text at a safe contrast ratio over a busy image.
export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        minHeight: { xs: 520, sm: 600, md: 680 },
      }}
    >
      <Image
        src={heroBackground}
        alt="Girls laughing together over a coursebook during a GLET outreach session"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(43,36,32,0.78) 0%, rgba(43,36,32,0.72) 60%, rgba(43,36,32,0.85) 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 0 } }}>
        <AnimatedInView>
          <Typography
            component="p"
            sx={{
              color: "primary.light",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              mb: 2,
            }}
          >
            The GLET Initiative &middot; Nigeria
          </Typography>
          <Typography
            component="h1"
            variant="h1"
            sx={{ mb: 3, color: "background.default", maxWidth: "18ch" }}
          >
            Grow. Lead. Empower. Thrive.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.15rem", maxWidth: "48ch", mb: 4, color: "grey.200" }}
          >
            The GLET Initiative equips adolescent girls aged 10–18 in
            underserved communities across Nigeria with the knowledge,
            confidence and leadership skills to grow, lead, empower and
            thrive — and to equip other girls to do the same.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <PrimaryButton
              component={Link}
              href="/get-involved"
              variant="contained"
              color="primary"
              size="large"
            >
              Partner With Us
            </PrimaryButton>
            <PrimaryButton
              component={Link}
              href="/about"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "background.default",
                color: "background.default",
                "&:hover": {
                  borderColor: "background.default",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Learn Our Story
            </PrimaryButton>
          </Stack>
        </AnimatedInView>
      </Container>
    </Box>
  );
}
