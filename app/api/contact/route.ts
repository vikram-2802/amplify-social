import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = process.env.CONTACT_EMAIL ?? "info@amplifysocial.in";
const FROM = process.env.SMTP_FROM ?? process.env.SMTP_USER;

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  message: string;
}

function buildEmailBody(payload: ContactPayload) {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    "",
    payload.message,
  ].join("\n");
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload?.name || !payload?.email || !payload?.company || !payload?.message) {
    return NextResponse.json(
      { error: "Please complete all fields before sending your enquiry." },
      { status: 400 },
    );
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json(
      {
        error:
          "Email transport is not configured on the server. Set SMTP_HOST, SMTP_USER, and SMTP_PASS to deliver enquiries via email.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: FROM ?? `"Website Contact" <${process.env.SMTP_USER}>`,
    to: RECIPIENT,
    subject: `Website enquiry from ${payload.name}`,
    text: buildEmailBody(payload),
    html: `<p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Company:</strong> ${payload.company}</p><p><strong>Message:</strong></p><p>${payload.message.replace(/\n/g, "<br />")}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ ok: true, message: "Enquiry sent to info@amplifysocial.in." });
  } catch (err) {
    console.error("SMTP send error:", err);
    const message = err instanceof Error ? err.message : "Unknown SMTP error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
