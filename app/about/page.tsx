import type { Metadata } from "next";
import FounderStory from "@/components/sections/FounderStory";
import MissionVision from "@/components/sections/MissionVision";
import ValuesGrid from "@/components/sections/ValuesGrid";
import GetInvolvedCTA from "@/components/sections/GetInvolvedCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The GLET Initiative was founded by Nkechi Patience Igwebuike on 10 July 2026 to equip adolescent girls in Nigeria to grow, lead, empower and thrive — and to equip other girls to do the same.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | The GLET Initiative",
    description: "The story, mission, vision and values behind The GLET Initiative.",
  },
};

export default function AboutPage() {
  return (
    <>
      <FounderStory />
      <MissionVision />
      <ValuesGrid />
      <GetInvolvedCTA />
    </>
  );
}
