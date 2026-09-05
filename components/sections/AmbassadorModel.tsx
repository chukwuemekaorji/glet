import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedInView from "@/components/ui/AnimatedInView";
import { AMBASSADOR_CYCLE } from "@/lib/content";
import peerReadingPhoto from "@/public/images/programme/four-girls-reading-together.jpg";

export default function AmbassadorModel() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="The GLET Ambassador Model"
          title="Every girl who completes GLET becomes a GLET Ambassador"
          description="Ambassadorship isn't reserved for a select few. Every girl who completes the programme and receives a GLET Certificate is equipped — and encouraged — to share what she has learned with other girls."
        />

        <AnimatedInView>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
            rowGap={2}
          >
            {AMBASSADOR_CYCLE.map((step, index) => (
              <Stack key={step} direction="row" alignItems="center" spacing={1.5}>
                <Box
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: 999,
                    bgcolor: "secondary.light",
                    fontWeight: 700,
                  }}
                >
                  {step}
                </Box>
                {index < AMBASSADOR_CYCLE.length - 1 && (
                  <ArrowForwardIcon sx={{ color: "text.secondary", fontSize: 20 }} />
                )}
              </Stack>
            ))}
          </Stack>
        </AnimatedInView>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", maxWidth: "48ch", mx: "auto", mt: 5 }}
        >
          One girl receives knowledge. She grows through it. She develops the
          confidence to lead. She shares what she has learned. Another girl
          becomes empowered. And the cycle continues.
        </Typography>

        <AnimatedInView delay={0.1}>
          <Box
            sx={{
              position: "relative",
              mt: 6,
              borderRadius: 6,
              overflow: "hidden",
              aspectRatio: "16 / 9",
            }}
          >
            <Image
              src={peerReadingPhoto}
              alt="A group of girls reading together — peer teaching in practice"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 800px"
            />
          </Box>
        </AnimatedInView>
      </Container>
    </Box>
  );
}
