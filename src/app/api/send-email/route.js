// src/app/api/send-email/route.js
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const { name, phone, email, company, state, city, meetingDate, message, demoRequest, quoteRequest, surfaceArea, singleValves, doubleValves, pumps, pumpType, pumpPowerSupply, has220v } = await req.json();

    const subject = `${demoRequest ? "New demo request" : quoteRequest ? "New quote request" : "New contact form submission"} from ${name}`;
    const html = `
      <h2>${demoRequest ? "Demo Request" : quoteRequest ? "Quote Request" : "Contact Form Submission"}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${state ? `<p><strong>State:</strong> ${state}</p>` : ""}
      ${city ? `<p><strong>City:</strong> ${city}</p>` : ""}
      ${meetingDate ? `<p><strong>Preferred meeting date:</strong> ${meetingDate}</p>` : ""}
      ${surfaceArea ? `<p><strong>Surface area:</strong> ${surfaceArea}</p>` : ""}
      ${singleValves ? `<p><strong>Single valves:</strong> ${singleValves}</p>` : ""}
      ${doubleValves ? `<p><strong>Double valves:</strong> ${doubleValves}</p>` : ""}
      ${pumps ? `<p><strong>Pumps:</strong> ${pumps}</p>` : ""}
      ${pumpType ? `<p><strong>Pump type:</strong> ${pumpType}</p>` : ""}
      ${pumpPowerSupply ? `<p><strong>Pump power supply:</strong> ${pumpPowerSupply}</p>` : ""}
      ${has220v ? `<p><strong>220V power supply:</strong> ${has220v}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await sendEmail("contact@innovega.tn", subject, html);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
