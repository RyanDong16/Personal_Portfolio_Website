import { google } from "googleapis";

// Create OAuth client
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Set refresh token
oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Create Gmail client
const gmail = google.gmail({
  version: "v1",
  auth: oAuth2Client,
});

/**
 * Send email using Gmail API
 */
export async function sendEmail({ name, email, message }) {
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
}
