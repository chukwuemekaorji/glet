// Shared email-sending helper used by every API route, so retry/error
// handling and the Resend client setup live in exactly one place.
import { Resend } from "resend";

interface SendEmailParams {
  subject: string;
  html: string;
  replyTo?: string;
}

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function sendEmail({ subject, html, replyTo }: SendEmailParams): Promise<void> {
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const resend = getResendClient();

  if (!resend || !toEmail) {
    // No provider configured yet (e.g. local dev without env vars set).
    // Log instead of throwing so form submissions don't 500 during setup.
    console.warn(
      "[email] RESEND_API_KEY or CONTACT_TO_EMAIL not set — email not sent.",
      { subject }
    );
    return;
  }

  await resend.emails.send({
    from: "GLET Website <onboarding@resend.dev>", // swap for a verified domain sender once available
    to: toEmail,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
}

// Stub for whichever mailing list provider GLET ends up choosing
// (Mailchimp, ConvertKit, Buttondown, etc.). Wire this up once a provider
// and API key are picked — don't block launch on this decision.
export async function subscribeToNewsletter(email: string): Promise<void> {
  const apiKey = process.env.NEWSLETTER_PROVIDER_API_KEY;

  if (!apiKey) {
    console.warn(
      "[newsletter] NEWSLETTER_PROVIDER_API_KEY not set — subscription not sent.",
      { email }
    );
    return;
  }

  // TODO: call the chosen provider's API here once selected.
}
