"use client";

import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "@/components/ui/Logo";
import PrimaryButton from "@/components/ui/PrimaryButton";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/programme", label: "Programme" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.default",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, justifyContent: "space-between" }}>
          <Link href="/" aria-label="GLET Initiative home" style={{ display: "flex" }}>
            <Logo height={64} />
          </Link>

          {/* Inline nav appears from md up; collapses to a drawer below that */}
          <Box
            component="nav"
            aria-label="Primary"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}
          >
            {NAV_LINKS.map((link) => (
              <Box
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 150ms ease",
                  "&:hover": { color: "primary.dark" },
                }}
              >
                {link.label}
              </Box>
            ))}
            <PrimaryButton
              component={Link}
              href="/get-involved"
              variant="contained"
              color="primary"
              size="medium"
            >
              Partner With Us
            </PrimaryButton>
          </Box>

          <IconButton
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
            <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItemButton
                key={link.href}
                component={Link}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Box sx={{ px: 2, mt: 2 }}>
            <PrimaryButton
              component={Link}
              href="/get-involved"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setDrawerOpen(false)}
            >
              Partner With Us
            </PrimaryButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
