import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  const { name, email, message, honeypot } = parsed.data;

  // Spam trap: a filled honeypot means a bot, not a person. Return success
  // without actually sending so the bot gets no signal to adapt to.
  if (honeypot) {
    return NextResponse.json({ success: true, message: "Thank you for reaching out." });
  }

  await sendEmail({
    subject: `New contact form message from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
    replyTo: email,
  });

  return NextResponse.json({ success: true, message: "Thank you for reaching out — we'll be in touch soon." });
}
