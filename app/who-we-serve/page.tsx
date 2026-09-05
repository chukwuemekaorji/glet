import type { Metadata } from "next";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import WhatWeDo from "@/components/sections/WhatWeDo";
import GletGirlTraits from "@/components/sections/GletGirlTraits";
import GetInvolvedCTA from "@/components/sections/GetInvolvedCTA";
import AnimatedInView from "@/components/ui/AnimatedInView";
import portraitPhoto from "@/public/images/who-we-serve/portrait-smiling-girl.jpg";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "GLET serves adolescent girls aged 10–18 in underserved communities across Nigeria — building health literacy, leadership, life skills and confidence.",
  alternates: { canonical: "/who-we-serve" },
  openGraph: {
    title: "Who We Serve | The GLET Initiative",
    description: "Adolescent girls aged 10–18 in underserved communities across Nigeria.",
  },
};

export default function WhoWeServePage() {
  return (
    <>
      <Box component="section" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 2, md: 4 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <AnimatedInView>
                <Typography
                  component="p"
                  sx={{
                    color: "primary.dark",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                    mb: 2,
                  }}
                >
                  Who We Serve
                </Typography>
                <Typography component="h1" variant="h1" sx={{ mb: 2 }}>
                  Every girl deserves the chance to grow into who she&apos;s capable of becoming.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "56ch" }}>
                  We believe that every girl, regardless of her background or
                  circumstances, deserves access to knowledge, support and
                  opportunities — starting with adolescent girls aged 10–18
                  in underserved communities across Nigeria.
                </Typography>
              </AnimatedInView>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <AnimatedInView delay={0.15}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 6,
                    overflow: "hidden",
                    aspectRatio: "4 / 5",
                  }}
                >
                  <Image
                    src={portraitPhoto}
                    alt="A smiling girl in a classroom in Nigeria"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 480px"
                  />
                </Box>
              </AnimatedInView>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <WhatWeDo />
      <GletGirlTraits />
      <GetInvolvedCTA />
    </>
  );
}
