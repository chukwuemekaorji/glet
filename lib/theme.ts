// MUI theme — the single source of color, type and spacing tokens for the
// whole site. Nothing outside this file should hardcode a hex code, a font
// size, or a breakpoint. See MASTER.md §4 for the design rationale.
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Palette — a warm terracotta/olive earth-tone palette rather than the
// golden-yellow-on-cream combination originally proposed in MASTER.md §4,
// which read too close to a generic AI-product brand (Claude's own
// yellow-on-cream look) rather than something distinctly GLET's. Update
// here (and nowhere else) if a formal client brand guide arrives.
const palette = {
  primary: {
    main: "#B5541F", // Terracotta — CTAs, accents, framework letters
    light: "#E4C4AE",
    dark: "#7A3814",
    contrastText: "#FFFFFF", // passes WCAG AA (4.94:1) with white text
  },
  secondary: {
    main: "#5C6E4B", // Muted olive — secondary accents, tags
    light: "#D3D9C6",
    dark: "#3D4A32",
    contrastText: "#FFFFFF", // passes WCAG AA (5.55:1) with white text
  },
  text: {
    primary: "#2B2420", // Warm charcoal-brown
    secondary: "#6B6259", // Warm muted taupe
  },
  background: {
    default: "#F5F2ED", // Calm warm neutral — not cream, not stark white
    paper: "#FFFFFF",
  },
};

const theme = createTheme({
  palette: {
    mode: "light",
    ...palette,
  },
  shape: {
    borderRadius: 16, // soft, organic corners per the brand's blob/leaf shape language
  },
  typography: {
    fontFamily: "var(--font-body), 'Work Sans', sans-serif",
    h1: {
      fontFamily: "var(--font-heading), 'Georgia', serif",
      fontSize: "2.5rem", // 40px
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h2: {
      fontFamily: "var(--font-heading), 'Georgia', serif",
      fontSize: "2rem", // 32px
      lineHeight: 1.2,
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: "var(--font-heading), 'Georgia', serif",
      fontSize: "1.5rem", // 24px
      lineHeight: 1.3,
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-heading), 'Georgia', serif",
      fontSize: "1.25rem",
      lineHeight: 1.4,
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem", // 16px
      lineHeight: 1.6, // slightly airier, calmer paragraph rhythm
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999, // pill-shaped buttons per brand
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999, // pill badges, echoing the "GLET" wordmark treatment
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
