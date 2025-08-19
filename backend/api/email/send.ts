import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

/**
 * Handles contact form submissions and sends an email.
 * 
 * @param req VercelRequest object containing request data
 * @param res VercelResponse object used to send the response
 * 
 * @example
 * POST /api/email/send
 * Body:
 * {
 *   name: "John Doe",
 *   subject: "Hello",
 *   message: "This is a test message"
 * }
 * 
 * @returns {200} { success: true } on success
 * @returns {405} { error: "Method not allowed" } if not POST
 * @returns {500} { error: "Failed to send email" } on failure
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Message from Portfolio Website",
      text: `Name: ${name}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}