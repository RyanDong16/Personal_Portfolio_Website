// server.js
// how to run server /Portfolio_Website/server type in: node server.js
// server.js
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

// verify an error
app.get("/debug/ping", (req, res) => {
  res.status(200).send("PING_OK_v3");
});

// API route
app.post("/send-email", async (req, res) => {
  console.log("SEND EMAIL HIT");
  console.log("BODY:", req.body);

  return res.status(500).send("FORCED_BACKEND_ERROR_TEST");
});

// verify the .env variables
app.get("/debug/env", (req, res) => {
  res.json({
    CLIENT_ID: !!process.env.CLIENT_ID,
    CLIENT_SECRET: !!process.env.CLIENT_SECRET,
    REFRESH_TOKEN: !!process.env.REFRESH_TOKEN,
    MY_EMAIL: !!process.env.MY_EMAIL,
  });
});


// IMPORTANT for deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Gmail server running on port ${PORT}`)
);
