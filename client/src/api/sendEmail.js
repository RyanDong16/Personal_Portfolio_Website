export async function sendEmail(formData) {
  const res = await fetch(
    import.meta.env.VITE_GMAIL_API_URL + "/send-email",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  console.log(
    "API URL:",
    import.meta.env.VITE_GMAIL_API_URL
  );


  const text = await res.text(); // ✅ SAFE for all responses

  if (!res.ok) {
    throw new Error(text || "Backend error");
  }

  return text;
}
