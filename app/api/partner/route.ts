import { NextResponse } from "next/server";
import { partnerSchema } from "@/lib/validations";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = partnerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const { organisationName, contactName, email, phone, partnershipType, message, honeypot } =
    parsed.data;

  if (honeypot) {
    return NextResponse.json({ success: true, message: "Thank you for your interest." });
  }

  // Distinct subject prefix so partner inquiries are easy to triage
  // separately from general contact messages in the inbox.
  await sendEmail({
    subject: `[Partnership Inquiry] ${organisationName} — ${partnershipType}`,
    html: `
      <p><strong>Organisation:</strong> ${organisationName}</p>
      <p><strong>Contact name:</strong> ${contactName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Partnership type:</strong> ${partnershipType}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
    replyTo: email,
  });

  return NextResponse.json({
    success: true,
    message: "Thank you for your interest in partnering with GLET — we'll be in touch soon.",
  });
}
