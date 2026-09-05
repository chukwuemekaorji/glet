import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AnimatedInView from "@/components/ui/AnimatedInView";

// Reusable closing CTA band — appears at the bottom of Home and every
// inner page so there's always a next step regardless of where a visitor
// lands or leaves.
export default function GetInvolvedCTA() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "primary.light" }}>
      <Container maxWidth="md">
        <AnimatedInView>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography component="h2" variant="h2">
              Join us as we raise a generation of changemakers.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "48ch" }}>
              GLET begins with one girl, but the vision is bigger than one
              girl. Partner with us, volunteer your time, or stay updated as
              the movement grows.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
              <PrimaryButton
                component={Link}
                href="/get-involved"
                variant="contained"
                color="secondary"
                size="large"
              >
                Get Involved
              </PrimaryButton>
              <PrimaryButton
                component={Link}
                href="/get-involved#contact"
                variant="outlined"
                color="inherit"
                size="large"
                sx={{ borderColor: "text.primary", color: "text.primary" }}
              >
                Contact Us
              </PrimaryButton>
            </Stack>
          </Stack>
        </AnimatedInView>
      </Container>
    </Box>
  );
}
