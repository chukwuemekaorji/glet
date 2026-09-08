import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Logo from "@/components/ui/Logo";
import NewsletterForm from "@/components/forms/NewsletterForm";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programme", label: "Programme" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/get-involved", label: "Get Involved" },
];

// Social/contact values are placeholders until the client supplies real
// handles — see MASTER.md §10. Left visible-but-honest rather than hidden,
// since "Location: Nigeria" is already confirmed.
const CONTACT_EMAIL = "gletinitiative@gmail.com";
const INSTAGRAM_HANDLE = "@thegletinitiative";

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
            <Stack spacing={1}>
              <Box
                component="a"
                href={`mailto:${CONTACT_EMAIL}`}
                sx={{ color: "grey.300", textDecoration: "none", "&:hover": { color: "primary.main" } }}
              >
                {CONTACT_EMAIL}
              </Box>
              <Typography variant="body2" sx={{ color: "grey.300" }}>
                {INSTAGRAM_HANDLE}
              </Typography>
              <Typography variant="body2" sx={{ color: "grey.500" }}>
                Nigeria
              </Typography>
            </Stack>

            <Box sx={{ mt: 3 }}>
              <Typography variant="overline" sx={{ color: "grey.500", display: "block", mb: 1 }}>
                Stay Updated
              </Typography>
              <NewsletterForm tone="light" />
            </Box>
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
