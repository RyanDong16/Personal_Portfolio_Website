// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// 🔥 Crash logging (CRITICAL)
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Gmail backend is live 🚀");
});

// Debug ping (optional but helpful)
app.get("/debug/ping", (req, res) => {
  res.send("PING_OK_v3");
});

// 🔧 FORCED DEBUG ROUTE (NO GMAIL)
app.post("/send-email", async (req, res) => {
  console.log("SEND EMAIL HIT");
  console.log("BODY:", req.body);

  return res.status(500).send("FORCED_BACKEND_ERROR_TEST");
});

// IMPORTANT for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Gmail server running on port ${PORT}`)
);
