import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * Sends an email to myself.
 * @param name Name of the person submitting the form
 * @param subject Subject provided by the person
 * @param message Message content
 */
export const sendMail = async (name: string, subject: string, message: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Message from Portfolio Website",
    text: `Name: ${name}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
  }

  await transporter.sendMail(mailOptions);
};