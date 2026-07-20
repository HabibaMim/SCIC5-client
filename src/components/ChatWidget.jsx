// components/ChatWidget.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! How can I help you on GigsVerse today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
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
    } catch (err) {
      console.error("Chat request failed:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
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
              <div className="self-start bg-base-300 text-base-content px-3 py-2 rounded-xl text-sm">
                Typing...
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
              onClick={sendMessage}
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