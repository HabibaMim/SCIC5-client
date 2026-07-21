// components/ChatWidget.jsx
// components/ChatWidget.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! How can I help you on GigsVerse today?" },
  ]);
  const [suggestions, setSuggestions] = useState([
    "How do I place an order?",
    "How do I list a gig?",
    "What are the login options?",
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  const sendMessage = async (overrideText) => {
    const textToSend = overrideText ?? input;
    if (!textToSend.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: textToSend }];
    setMessages(newMessages);
    setInput("");
    setSuggestions([]);
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();

      if (!res.ok) {
        console.error("API error:", res.status, data);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
    } catch (err) {
      console.error("Chat request failed:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 h-96 bg-base-200 border border-base-300 rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between bg-pink-500 text-white px-4 py-3">
            <span className="font-semibold">GigsVerse Assistant</span>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  m.role === "user"
                    ? "self-end bg-pink-500 text-white"
                    : "self-start bg-base-300 text-base-content"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="self-start bg-base-300 text-base-content px-3 py-2 rounded-xl text-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-base-content/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-base-content/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-base-content/50 rounded-full animate-bounce"></span>
              </div>
            )}

            {!loading && suggestions.length > 0 && (
              <div className="flex flex-col gap-1.5 mt-1">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSuggestionClick(s)}
                    className="self-start text-xs text-left bg-base-100 hover:bg-pink-400/10 text-pink-400 border border-pink-400/40 rounded-full px-3 py-1.5 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="flex items-center gap-2 p-3 border-t border-base-300">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="input input-sm input-bordered flex-1 border-base-300 text-base-content bg-base-100 placeholder:text-base-content/40"
            />
            <button
              onClick={() => sendMessage()}
              className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white border-none"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="btn btn-circle btn-lg bg-pink-500 hover:bg-pink-600 text-white border-none shadow-lg"
        >
          <FaComments className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;