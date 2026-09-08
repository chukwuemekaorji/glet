import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GetInvolvedPaths from "@/components/sections/GetInvolvedPaths";
import PartnerForm from "@/components/forms/PartnerForm";
import ContactForm from "@/components/forms/ContactForm";
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

      <Box component="section" id="contact" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="h2" variant="h3" sx={{ mb: 1 }}>
                Partnership Inquiry
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                For organisations, funders, schools and healthcare partners.
              </Typography>
              <PartnerForm />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="h2" variant="h3" sx={{ mb: 1 }}>
                General Inquiry
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Volunteers, parents, and anyone else with a question.
              </Typography>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.paper" }}>
        <Container maxWidth="md">
          <Stack spacing={2} alignItems="center">
            <Typography component="h2" variant="h4">
              Or reach us directly
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 4 }}
              alignItems="center"
            >
              <Stack
                component="a"
                href={`mailto:${CONTACT_EMAIL}`}
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ color: "primary.dark", textDecoration: "none", fontWeight: 700 }}
              >
                <EmailOutlinedIcon sx={{ fontSize: 20 }} />
                <Typography component="span" sx={{ fontWeight: 700, color: "inherit" }}>
                  {CONTACT_EMAIL}
                </Typography>
              </Stack>
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
