import "dotenv/config";
import { google } from "googleapis";
import readline from "readline";

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
} = process.env;

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
  console.error("❌ Missing required env vars");
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: ["https://www.googleapis.com/auth/gmail.send"],
});

console.log("\n🔑 Authorize this app by visiting:\n");
console.log(authUrl, "\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("📥 Paste the authorization code here:\n", async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code.trim());

    if (!tokens.refresh_token) {
      console.error(
        "\n❌ No refresh token returned.\n" +
        "➡️ Make sure prompt:'consent' is set and you haven't authorized this client before."
      );
      process.exit(1);
    }

    console.log("\n✅ REFRESH TOKEN (SAVE THIS SAFELY):\n");
    console.log(tokens.refresh_token, "\n");
  } catch (err) {
    console.error("\n❌ Failed to get refresh token");
    console.error(err.message);
  } finally {
    rl.close();
  }
});
