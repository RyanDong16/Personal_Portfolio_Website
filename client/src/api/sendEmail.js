const API_URL = import.meta.env.VITE_GMAIL_API_URL;

export async function sendEmail({ name, email, message }) {
  const res = await fetch(`${API_URL}/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to send email");
  }

  return res.json();
}
