import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import HandshakeIcon from "@mui/icons-material/Handshake";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MailOutlineIcon from "@mui/icons-material/Email";
import type { SvgIconComponent } from "@mui/icons-material";
import AnimatedInView from "@/components/ui/AnimatedInView";

interface Path {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

const PATHS: Path[] = [
  {
    icon: HandshakeIcon,
    title: "Partner",
    description:
      "Organisations, funders, schools and healthcare partners who can contribute expertise, resources or reach — fill in the partnership form below.",
  },
  {
    icon: VolunteerActivismIcon,
    title: "Volunteer",
    description:
      "Individuals who want to support programme delivery, facilitation, mentorship or logistics — reach out through the general contact form below.",
  },
  {
    icon: MailOutlineIcon,
    title: "Stay Updated",
    description:
      "Not ready to commit yet? Subscribe to hear when GLET runs its first programmes and how you can get involved as the movement grows.",
  },
];

export default function GetInvolvedPaths() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {PATHS.map((path, index) => {
            const Icon = path.icon;
            return (
              <Grid key={path.title} size={{ xs: 12, sm: 4 }}>
                <AnimatedInView delay={index * 0.08}>
                  <Box
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: 4,
                      bgcolor: "background.paper",
                      boxShadow: "0 1px 3px rgba(43,36,32,0.08)",
                    }}
                  >
                    <Icon sx={{ color: "primary.dark", fontSize: 32, mb: 1.5 }} />
                    <Typography component="h3" variant="h4" sx={{ mb: 1 }}>
                      {path.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {path.description}
                    </Typography>
                  </Box>
                </AnimatedInView>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
