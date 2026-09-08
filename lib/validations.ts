// Zod schemas for every form on the site. API routes validate against these
// server-side; forms can reuse the same schema client-side so validation
// never drifts between the two. See MASTER.md §7 for the field-level spec.
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000),
  // Hidden field — real users never fill it in. Non-empty means a bot did.
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const PARTNERSHIP_TYPES = [
  "Funding",
  "Volunteering",
  "Programme Delivery",
  "Media & Awareness",
  "Other",
] as const;

export const partnerSchema = z.object({
  organisationName: z.string().trim().min(2, "Please enter an organisation name.").max(150),
  contactName: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  partnershipType: z.enum(PARTNERSHIP_TYPES),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000),
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type PartnerInput = z.infer<typeof partnerSchema>;
