import { Request, Response } from "express";
import { sendMail } from "../utils/mailer";

export const sendEmail = async (req: Request, res: Response) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required!" });
  }

  try {
    await sendMail(email, message);
    res.status(200).json({ message: "Email send successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email." });
  }
};