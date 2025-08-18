import { Router } from "express"
import { sendEmail } from "../controllers/emailController";

const router = Router();

/**
 * @swagger
 * /api/email/send:
 *   post:
 *     tags:
 *       - Email           
 *     summary: Send an email
 *     description: Sends an email from a frontend form to your inbox
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               subject:
 *                 type: string
 *                 example: "Job opportunity"
 *               message:
 *                 type: string
 *                 example: "Hello, I'm interested in your work and would like to connect."
 *             required:
 *               - name
 *               - email
 *               - subject
 *               - message
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Failed to send email
 */
router.post("/send", sendEmail);

export default router;