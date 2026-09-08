// Structured copy shared across pages/sections, sourced from MASTER.md.
// Centralizing it here means the framework pillars (used on Home and
// Programme) or the journey stages (Programme) are edited in exactly one
// place rather than duplicated per component.
import SpaIcon from "@mui/icons-material/Spa";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import type { SvgIconComponent } from "@mui/icons-material";

// Real contact details, confirmed by the client — used by both the Footer
// and the Get Involved page so there's exactly one place to update them.
// LinkedIn is left out until a real handle is confirmed (never show a
// fabricated one).
export const CONTACT_EMAIL = "gletinitiative@gmail.com";
export const INSTAGRAM_HANDLE = "@thegletinitiative";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE.replace(/^@/, "")}`;

export interface FrameworkPillar {
  letter: "G" | "L" | "E" | "T";
  title: string;
  description: string;
  icon: SvgIconComponent;
}

export const FRAMEWORK_PILLARS: FrameworkPillar[] = [
  {
    letter: "G",
    title: "Grow in Knowledge",
    description:
      "We help girls build the knowledge and awareness they need to understand themselves, their health, their rights and the world around them.",
    icon: SpaIcon,
  },
  {
    letter: "L",
    title: "Lead with Confidence",
    description:
      "We develop girls who can find their voices, make informed decisions, take initiative and lead with courage and purpose.",
    icon: RecordVoiceOverIcon,
  },
  {
    letter: "E",
    title: "Empower Your Community",
    description:
      "We encourage girls to turn knowledge into action by serving others, contributing to their communities and becoming catalysts for positive change.",
    icon: VolunteerActivismIcon,
  },
  {
    letter: "T",
    title: "Thrive for Life",
    description:
      "We equip girls with the resilience, life skills, confidence and sense of purpose needed to navigate life and flourish beyond the programme.",
    icon: AutoAwesomeIcon,
  },
];

export interface JourneyStage {
  name: string;
  description: string;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  { name: "Participant", description: "She enters GLET ready to learn, explore and discover." },
  {
    name: "Learner",
    description:
      "She receives knowledge, asks questions and begins to understand herself, her health and her potential.",
  },
  {
    name: "Growing Girl",
    description:
      "She begins to develop confidence, life skills and a stronger understanding of who she is and who she can become.",
  },
  {
    name: "Emerging Leader",
    description: "She discovers her voice, takes initiative and begins to lead herself and positively influence others.",
  },
  {
    name: "GLET Ambassador",
    description: "She completes the GLET programme, receives her certificate and is equipped to share what she has learned with other girls.",
  },
  {
    name: "Community Change Agent",
    description: "She begins to use her knowledge and influence to encourage, educate and contribute positively within her sphere of influence.",
  },
  {
    name: "Thriving Girl",
    description: "She continues to grow with confidence, resilience, purpose and the ability to positively impact others.",
  },
];

export const AMBASSADOR_CYCLE = ["Learn", "Grow", "Lead", "Share", "Empower", "Thrive"];

export interface CoreValue {
  name: string;
  description: string;
}

export const CORE_VALUES: CoreValue[] = [
  { name: "Compassion", description: "We lead with selfless empathy, kindness and respect." },
  { name: "Integrity", description: "We act honestly, responsibly and with accountability." },
  { name: "Growth", description: "We believe every girl can learn, develop and become more." },
  { name: "Leadership", description: "We inspire girls to lead with courage, purpose and responsibility." },
  { name: "Inclusivity", description: "We believe every girl deserves opportunity and access, regardless of her background." },
  { name: "Service", description: "We use knowledge, skills and leadership to improve our communities." },
  { name: "Collaboration", description: "We believe meaningful change grows through partnerships and teamwork." },
  { name: "Excellence", description: "We strive for quality, intentionality and excellence in everything we do." },
];

export const GLET_GIRL_TRAITS: string[] = [
  "Informed",
  "Confident",
  "Compassionate",
  "Resilient",
  "Growing",
  "A Leader",
  "Inclusive",
  "Of Service",
  "Collaborative",
  "Committed to Excellence",
];

export interface WhatWeDoItem {
  name: string;
  description: string;
}

export const WHAT_WE_DO: WhatWeDoItem[] = [
  { name: "Health Literacy", description: "Building knowledge that helps girls make informed decisions about their health and wellbeing." },
  { name: "Leadership Development", description: "Helping girls develop confidence, communication, decision-making and leadership skills." },
  { name: "Life Skills Education", description: "Equipping girls with practical skills for navigating challenges and making positive choices." },
  { name: "Mentorship", description: "Connecting girls with guidance, encouragement and positive role models." },
  { name: "Community Engagement", description: "Creating opportunities for girls to use their knowledge and leadership to serve and impact their communities." },
];
