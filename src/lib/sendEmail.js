import nodemailer from "nodemailer";

const smtpPort = Number(process.env.SMTP_PORT || 587);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to, subject, html) {
  await transporter.sendMail({
    to,
    from: {
      name: process.env.SMTP_FROM_NAME || "Innovega",
      address: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
    },
    subject,
    html,
  });
}
