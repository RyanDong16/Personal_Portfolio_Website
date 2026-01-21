import { useEffect, useRef, useState } from "react";
import { sendChatMessage } from "../api/chatApi";
import { BotMessageSquare, Ellipsis, Minimize2 } from "lucide-react";

export function Chatbot() {
  // Messages
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat_messages");
    return saved ? JSON.parse(saved) : [];
  });

  // Input field
  const [input, setInput] = useState("");

  // Loading / Open state
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(() => {
    const saved = localStorage.getItem("chat_open");
    return saved ? JSON.parse(saved) : true;
  });

  // Ref for auto-scroll
  const messagesEndRef = useRef(null);

  // Footer observer for floating chat
  const [footerVisible, setFooterVisible] = useState(false);
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Save messages and open state in localStorage
  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chat_open", JSON.stringify(open));
  }, [open]);

  // Auto-scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message handler
  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setMessages([...messages, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      let sessionId = localStorage.getItem("chat_session_id");

      const data = await sendChatMessage(userMessage, sessionId);

      if (!sessionId && data.session_id) {
        localStorage.setItem("chat_session_id", data.session_id);
      }

      // Check if backend returned a quota message
      const isQuotaMessage =
        data.response.includes("quota") || data.response.includes("Please try again later");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response, isQuota: isQuotaMessage }
      ]);
    } catch (err) {
      const errorMessage = err.message?.toLowerCase().includes("rate")
        ? "⚠️ I'm getting too many requests. Please wait a moment."
        : "⚠️ Something went wrong. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorMessage, isQuota: true }
      ]);
    } finally {
      setLoading(false);
    }
  }

  // Clear chat
  function clearChat() {
    setMessages([]);
    localStorage.removeItem("chat_messages");
  }

  return (
    <div className={`fixed right-5 z-50 transition-all duration-300 ${footerVisible ? "bottom-32" : "bottom-5"}`}>
      
      {/* Chat Window */}
      <div
        className={`mb-2 w-80 h-[26rem] bg-card text-foreground border border-border rounded-xl shadow-lg
          flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
          ${open ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <span className="font-semibold text-sm">AI Assistant</span>
          <button onClick={clearChat} className="text-xs text-red-500 hover:underline">
            Clear
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-3 py-2 rounded-lg
                ${m.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "mr-auto bg-background border border-border"}
                ${m.isQuota ? "border-l-4 border-yellow-400 bg-yellow-50 text-black" : ""}`}
            >
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-gray-500">
              <Ellipsis className="animate-pulse" />
              <span>Typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-2 border-t border-border">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            disabled={loading}
            className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="cosmic-button px-4 py-2 text-sm"
          >
            {loading ? <Ellipsis /> : "Send"}
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-end">
        <button onClick={() => setOpen(!open)} className="cosmic-button px-4 py-2 text-sm cursor-pointer">
          {open ? <Minimize2 /> : <BotMessageSquare />}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;