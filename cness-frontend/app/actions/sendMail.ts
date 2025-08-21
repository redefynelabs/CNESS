"use server";

import nodemailer from "nodemailer";

export async function sendMail({
  name,
  email,
  phone,
  companyName,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true if 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Submission from ${name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Company:</b> ${companyName || "-"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
