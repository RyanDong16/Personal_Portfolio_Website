// generateToken.js
// Run: node generateToken.js
// Purpose: Generate a refresh token for Gmail API

import dotenv from "dotenv";
dotenv.config();

import { google } from "googleapis";
import readline from "readline";

// Debug: confirm environment variables
console.log("CLIENT_ID:", process.env.CLIENT_ID ? "OK" : "MISSING");
console.log("CLIENT_SECRET:", process.env.CLIENT_SECRET ? "OK" : "MISSING");
console.log("REDIRECT_URI:", process.env.REDIRECT_URI ? "OK" : "MISSING");

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.REDIRECT_URI) {
  console.error("\n❌ One or more environment variables are missing. Check your .env file!");
  process.exit(1);
}

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Generate the auth URL
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",       // 🔴 REQUIRED for refresh token
  scope: ["https://www.googleapis.com/auth/gmail.send"],
  prompt: "consent"             // 🔴 REQUIRED to force new token
});

console.log("\nAuthorize this app by visiting this URL:\n", authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\nEnter the code from that page here: ", async (code) => {
  try {
    const { tokens } = await oAuth2Client.getToken(code.trim());
    if (!tokens.refresh_token) {
      console.warn("\n⚠️  No refresh token returned. Make sure 'prompt=consent' and 'access_type=offline' are set.");
    }
    console.log("\n✅ SUCCESS! Your refresh token is:\n");
    console.log(tokens.refresh_token);
    console.log("\nCopy this value into your Render backend environment variable: REFRESH_TOKEN");
    rl.close();
  } catch (err) {
    console.error("\n❌ ERROR while exchanging code for token:", err);
    rl.close();
  }
});
