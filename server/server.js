// server.js
// how to run server /Portfolio_Website/server type in: node server.js
import express from "express";
import cors from "cors";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Gmail API OAuth setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const rawMessage = [
      `From: "Portfolio Contact" <${process.env.MY_EMAIL}>`,
      `To: ${process.env.MY_EMAIL}`,
      `Reply-To: ${email}`,
      `Subject: Portfolio Contact Form`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const encodedMessage = Buffer.from(rawMessage)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodedMessage },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});

app.listen(5000, () =>
  console.log("✅ Gmail server running on http://localhost:5000")
);
