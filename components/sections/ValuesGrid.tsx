import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedInView from "@/components/ui/AnimatedInView";
import { CORE_VALUES } from "@/lib/content";

export default function ValuesGrid() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="What Guides Us" title="Our Core Values" />

        <Grid container spacing={3}>
          {CORE_VALUES.map((value, index) => (
            <Grid key={value.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <AnimatedInView delay={(index % 4) * 0.08}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography component="h3" variant="h4" sx={{ mb: 1 }}>
                    {value.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Box>
              </AnimatedInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
