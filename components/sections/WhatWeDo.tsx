import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedInView from "@/components/ui/AnimatedInView";
import { WHAT_WE_DO } from "@/lib/content";

export default function WhatWeDo() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="What We Do"
          title="Adolescent girls aged 10–18, in underserved communities across Nigeria"
        />

        <Grid container spacing={3}>
          {WHAT_WE_DO.map((item, index) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <AnimatedInView delay={(index % 3) * 0.08}>
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
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
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
