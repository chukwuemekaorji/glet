import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Logo from "@/components/ui/Logo";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/content";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programme", label: "Programme" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "text.primary", color: "background.default", py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 2 }}>
              <Logo height={56} />
            </Box>
            <Typography variant="body2" sx={{ color: "grey.400", maxWidth: "32ch" }}>
              Equipping adolescent girls to grow, lead, empower and thrive —
              and to equip other girls to do the same.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography
              variant="overline"
              sx={{ color: "grey.500", display: "block", mb: 1.5 }}
            >
              Explore
            </Typography>
            <Stack spacing={1}>
              {NAV_LINKS.map((link) => (
                <Box
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: "grey.300",
                    textDecoration: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="overline"
              sx={{ color: "grey.500", display: "block", mb: 1.5 }}
            >
              Connect
            </Typography>
            <Stack spacing={1.25}>
              <Stack
                component="a"
                href={`mailto:${CONTACT_EMAIL}`}
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ color: "grey.300", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" component="span" sx={{ color: "inherit" }}>
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
                sx={{ color: "grey.300", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" component="span" sx={{ color: "inherit" }}>
                  {INSTAGRAM_HANDLE}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "grey.500" }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" component="span" sx={{ color: "inherit" }}>
                  Nigeria
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © {new Date().getFullYear()} The GLET Initiative. Grow. Lead. Empower. Thrive.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
