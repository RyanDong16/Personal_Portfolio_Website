const API_URL = "http://localhost:8000/chat";

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
    const err = await res.json();
    throw new Error(err.detail || "Server error");
  }

  return res.json();
}
