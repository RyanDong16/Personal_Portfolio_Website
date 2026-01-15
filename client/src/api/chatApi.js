// src/api/chatApi.js

const API_URL =
  import.meta.env.VITE_BACKEND_URL ||
  "https://langchain-chatbot-backend.onrender.com/chat";

export async function sendChatMessage(message, sessionId) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      session_id: sessionId,
    }),
  });

  if (!res.ok) {
    let errMsg = "Server error";
    try {
      const err = await res.json();
      errMsg = err.detail || err.message || errMsg;
    } catch {
      // ignore JSON parse errors
    }
    throw new Error(errMsg);
  }

  return res.json(); // expected: { reply: "..." }
}
