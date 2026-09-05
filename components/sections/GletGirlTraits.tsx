import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedInView from "@/components/ui/AnimatedInView";
import { GLET_GIRL_TRAITS } from "@/lib/content";
import readingOutdoorsPhoto from "@/public/images/who-we-serve/two-girls-reading-outdoors.jpg";

export default function GletGirlTraits() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Who Is a GLET Girl?"
          title="An adolescent girl equipped to know her worth and share it"
          description="She isn't expected to be perfect — she's a girl who is learning, growing and becoming."
        />

        <AnimatedInView>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.5} sx={{ mb: 6 }}>
            {GLET_GIRL_TRAITS.map((trait) => (
              <Box
                key={trait}
                sx={{
                  px: 2.5,
                  py: 1.25,
                  borderRadius: 999,
                  bgcolor: "primary.light",
                  fontWeight: 700,
                }}
              >
                <Typography component="span" sx={{ fontWeight: 700 }}>
                  {trait}
                </Typography>
              </Box>
            ))}
          </Stack>
        </AnimatedInView>

        <AnimatedInView delay={0.1}>
          <Box
            sx={{
              position: "relative",
              borderRadius: 6,
              overflow: "hidden",
              aspectRatio: { xs: "4 / 5", sm: "16 / 8" },
            }}
          >
            <Image
              src={readingOutdoorsPhoto}
              alt="Two girls reading together outdoors"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </Box>
        </AnimatedInView>
      </Container>
    </Box>
  );
}
