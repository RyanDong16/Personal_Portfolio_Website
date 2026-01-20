const GMAIL_API_KEY = import.meta.env.VITE_GMAIL_API_URL;

export async function sendEmail(formData) {
  const res = await fetch(
    GMAIL_API_KEY + "/send-email",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  console.log(
    "API URL:",
    GMAIL_API_KEY
  );


  const text = await res.text(); // ✅ SAFE for all responses

  if (!res.ok) {
    throw new Error(text || "Backend error");
  }

  return text;
}
