const API_URL = import.meta.env.VITE_GMAIL_API_URL;

export async function sendEmail({ name, email, message }) {
  const res = await fetch(`${API_URL}/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  // If backend failed, read text safely
  if (!res.ok) {
    const text = await res.text();
    console.error("Backend error:", text);
    throw new Error("Failed to send email");
  }

  // ✅ DO NOT parse JSON
  return;
}
