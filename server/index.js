import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Correct backend API key usage
const googleAPIKey = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const model = googleAPIKey.getGenerativeModel({
      model: "google_genai:gemini-2.0-flash",
    });

    // Flatten chat history into a prompt
    const prompt = messages
      .map((m) =>
        m.role === "user"
          ? `User: ${m.content}`
          : `Assistant: ${m.content}`
      )
      .join("\n");

    const result = await model.generateContent(prompt);

    res.json({
      response: result.response.text(),
    });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Gemini API error" });
  }
});

app.listen(3001, () => {
  console.log("🚀 Gemini server running on http://localhost:3001");
});
