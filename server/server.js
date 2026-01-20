import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendEmail } from "./gmailApi.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Gmail backend is live 🚀");
});

// API route
app.post("/send-email", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).send(error.message || "Backend error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Gmail server running on port ${PORT}`)
);
