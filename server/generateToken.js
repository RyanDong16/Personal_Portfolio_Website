// generateToken.js
// Run with: node generateToken.js

import dotenv from "dotenv";
dotenv.config();

import { google } from "googleapis";
import readline from "readline";

// ===== DEBUG CHECK (DO NOT SKIP) =====
console.log("CLIENT_ID:", process.env.CLIENT_ID || "❌ MISSING");
console.log("CLIENT_SECRET:", process.env.CLIENT_SECRET ? "OK" : "❌ MISSING");
console.log("REDIRECT_URI:", process.env.REDIRECT_URI || "❌ MISSING");

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.REDIRECT_URI) {
  console.error("\n❌ Fix your .env file before continuing.\n");
  process.exit(1);
}

// ===== CREATE OAUTH CLIENT =====
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// ===== GENERATE AUTH URL =====
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline", // REQUIRED
  scope: ["https://www.googleapis.com/auth/gmail.send"],
  prompt: "consent",      // REQUIRED
  response_type: "code"   // 🔴 FORCE response_type
});

console.log("\n🔗 Open this URL in your browser:\n");
console.log(authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\n📋 Paste the authorization code here: ", async (code) => {
  try {
    const { tokens } = await oAuth2Client.getToken(code.trim());

    if (!tokens.refresh_token) {
      console.error("\n❌ No refresh token returned.");
      console.error("You MUST use prompt=consent and access_type=offline.");
      rl.close();
      process.exit(1);
    }

    console.log("\n✅ SUCCESS — REFRESH TOKEN:\n");
    console.log(tokens.refresh_token);
    console.log("\n➡️  Copy this into Render as REFRESH_TOKEN\n");
    rl.close();
  } catch (err) {
    console.error("\n❌ Token exchange failed:\n", err);
    rl.close();
  }
});
