import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import HandshakeIcon from "@mui/icons-material/Handshake";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import InstagramIcon from "@mui/icons-material/Instagram";
import type { SvgIconComponent } from "@mui/icons-material";
import AnimatedInView from "@/components/ui/AnimatedInView";
import { INSTAGRAM_URL } from "@/lib/content";

interface Path {
  icon: SvgIconComponent;
  title: string;
  description: string;
  /** Only "Follow Along" links out (to Instagram) — the other two point at forms below on the page. */
  href?: string;
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
    icon: InstagramIcon,
    title: "Follow Along",
    description:
      "Not ready to commit yet? Follow along on Instagram to see updates as GLET prepares to launch its first programmes.",
    href: INSTAGRAM_URL,
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
                    component={path.href ? "a" : "div"}
                    href={path.href}
                    target={path.href ? "_blank" : undefined}
                    rel={path.href ? "noopener noreferrer" : undefined}
                    sx={{
                      height: "100%",
                      p: 3,
                      borderRadius: 4,
                      bgcolor: "background.paper",
                      boxShadow: "0 1px 3px rgba(43,36,32,0.08)",
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
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
