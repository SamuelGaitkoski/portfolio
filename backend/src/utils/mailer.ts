import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendMail = async (fromEmail: string, message: string) => {
  await transporter.sendMail({
    from: fromEmail,
    to: process.env.EMAIL_USER,
    subject: "New message from portfolio website",
    text: message
  });
};