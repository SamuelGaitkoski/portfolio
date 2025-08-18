import express from "express";
import dotenv from "dotenv";
import emailRouter from "./routes/email";
import { setupSwagger } from "./swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

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