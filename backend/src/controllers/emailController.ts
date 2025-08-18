import { Request, Response } from "express";
import { sendMail } from "../utils/mailer";

export const sendEmail = async (req: Request, res: Response) => {
  const { name, subject, message } = req.body;

  if (!name || !subject || !message) {
    return res.status(400).json({ error: "Name, subject and message are required!" });
  }

  try {
    await sendMail(name, subject, message);
    res.status(200).json({ message: "Email send successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email." });
  }
};