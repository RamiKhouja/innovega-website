// src/app/api/send-email/route.js
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const { name, phone, email, company, state, city, meetingDate, message, demoRequest } = await req.json();

    const subject = `${demoRequest ? "New demo request" : "New contact form submission"} from ${name}`;
    const html = `
      <h2>${demoRequest ? "Demo Request" : "Contact Form Submission"}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${state ? `<p><strong>State:</strong> ${state}</p>` : ""}
      ${city ? `<p><strong>City:</strong> ${city}</p>` : ""}
      ${meetingDate ? `<p><strong>Preferred meeting date:</strong> ${meetingDate}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    //await sendEmail("contact@innovega.tn", subject, html);
    await sendEmail("innovegatn@gmail.com", subject, html);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
