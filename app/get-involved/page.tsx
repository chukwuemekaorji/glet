import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GetInvolvedPaths from "@/components/sections/GetInvolvedPaths";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AnimatedInView from "@/components/ui/AnimatedInView";
import studyingPhoto from "@/public/images/get-involved/two-girls-studying-library.jpg";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Partner with The GLET Initiative, volunteer your time, or stay updated as we prepare to launch programmes equipping adolescent girls across Nigeria.",
  alternates: { canonical: "/get-involved" },
  openGraph: {
    title: "Get Involved | The GLET Initiative",
    description: "Partner with us. Support the movement. Become part of the change.",
  },
};

export default function GetInvolvedPage() {
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
            Get Involved
          </Typography>
          <Typography component="h1" variant="h1" sx={{ textAlign: "center", mb: 2 }}>
            Partner with us. Support the movement.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", maxWidth: "56ch", mx: "auto" }}
          >
            GLET begins with one girl, but the vision is bigger than one
            girl. Whether you represent an organisation, want to volunteer,
            or simply want to follow along — there&apos;s a place for you.
          </Typography>
        </Container>
      </Box>

      <GetInvolvedPaths />

      <Box component="section" sx={{ pb: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg">
          <AnimatedInView>
            <Box
              sx={{
                position: "relative",
                borderRadius: 6,
                overflow: "hidden",
                aspectRatio: { xs: "4 / 5", sm: "21 / 9" },
              }}
            >
              <Image
                src={studyingPhoto}
                alt="Two girls studying together in a library"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 1200px"
              />
            </Box>
          </AnimatedInView>
        </Container>
      </Box>

      <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography component="h2" variant="h3">
              Get in touch
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "48ch" }}>
              Whether you&apos;re an organisation looking to partner, someone
              who wants to volunteer, or just have a question — reach out
              directly and we&apos;ll get back to you.
            </Typography>

            <PrimaryButton
              component="a"
              href={`mailto:${CONTACT_EMAIL}`}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<EmailOutlinedIcon />}
              sx={{ mt: 1 }}
            >
              {CONTACT_EMAIL}
            </PrimaryButton>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 4 }}
              alignItems="center"
              sx={{ pt: 2 }}
            >
              <Stack
                component="a"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ color: "primary.dark", textDecoration: "none", fontWeight: 700 }}
              >
                <InstagramIcon sx={{ fontSize: 20 }} />
                <Typography component="span" sx={{ fontWeight: 700, color: "inherit" }}>
                  {INSTAGRAM_HANDLE}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "text.secondary" }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 20 }} />
                <Typography component="span" color="text.secondary">
                  Nigeria
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
