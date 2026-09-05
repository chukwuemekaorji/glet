import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// Self-hosted via next/font — downloaded at build time, served from our own
// origin, zero external request waterfall and zero layout shift.
// Fraunces (a warm, soft-edged serif) + Plus Jakarta Sans replace the
// earlier Poppins/Inter pairing, which read closer to a generic SaaS/AI
// product than GLET's own warm, editorial voice.
const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://theglet.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The GLET Initiative | Grow. Lead. Empower. Thrive.",
    template: "%s | The GLET Initiative",
  },
  description:
    "The GLET Initiative equips adolescent girls aged 10–18 in underserved communities across Nigeria with health literacy, leadership skills, mentorship and confidence to grow, lead, empower and thrive.",
  openGraph: {
    title: "The GLET Initiative",
    description: "Grow. Lead. Empower. Thrive.",
    url: SITE_URL,
    siteName: "The GLET Initiative",
    images: ["/og/home.png"],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The GLET Initiative",
    description: "Grow. Lead. Empower. Thrive.",
    images: ["/og/home.png"],
  },
};

// NGO structured data — lives once in the root layout so every page benefits.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "The GLET Initiative",
  url: SITE_URL,
  logo: `${SITE_URL}/images/glet-logo-transparent.png`,
  description:
    "The GLET Initiative equips adolescent girls aged 10–18 in underserved communities across Nigeria with health literacy, leadership skills, mentorship and confidence.",
  foundingDate: "2026-07-10",
  founder: { "@type": "Person", name: "Nkechi Patience Igwebuike" },
  areaServed: "Nigeria",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
