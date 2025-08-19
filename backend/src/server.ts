import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRouter from "./routes/email";
import { setupSwagger } from "./swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for my frontend
app.use(cors({ origin: "http://localhost:3000" })); // allow frontend requests

// Middleware
app.use(express.json());

// Routes
app.use("/api/email", emailRouter);

// Swagger API docs
setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});