import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * Sends an email to myself.
 * @param fromEmail Email address of the person submitting the form
 * @param message Message content
 */
export const sendMail = async (fromEmail: string, message: string) => {
  const mailOptions = {
    from: fromEmail,
    to: process.env.EMAIL_USER,
    subject: "New message from portfolio website",
    text: message
  }

  await transporter.sendMail(mailOptions);
};