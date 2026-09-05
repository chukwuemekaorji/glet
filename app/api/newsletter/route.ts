import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations";
import { subscribeToNewsletter } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: parsed.error.issues[0]?.message ?? "Invalid email address." },
      { status: 400 }
    );
  }

  await subscribeToNewsletter(parsed.data.email);

  return NextResponse.json({ success: true, message: "You're subscribed — thank you!" });
}
