"use client";

// The MUI theme object contains functions (breakpoints.up/down/etc.), which
// can't cross the Server->Client Component boundary as a prop. Importing
// `theme` here (inside a Client Component) rather than in the root layout
// and passing it down avoids that RSC serialization error entirely.
import type { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/lib/theme";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
