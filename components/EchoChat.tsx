"use client";
import { useState, useRef, useEffect } from "react";
import EchoCircle from "./EchoCircle";
import { getEchoReply } from "../utils/echoReplies";

export default function EchoChat() {
  const [messages, setMessages] = useState([
    { from: "system", text: "Hii im Echo 👋" },
    { from: "system", text: "For now i only know abt bala’s projects 😎" },
    { from: "system", text: "Ask me anything abt his work 🔥" }
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;

    const user = input;
    setInput("");
    setMessages(prev => [...prev, { from: "user", text: user }]);
    setThinking(true);

    setTimeout(() => {
      const reply = getEchoReply(user);
      setMessages(prev => [...prev, { from: "system", text: reply }]);
      setThinking(false);
    }, 1500);
  };

  return (
    <div className="mt-8 w-full max-w-md mx-auto text-center">
      <EchoCircle isThinking={thinking} />

      <div
        ref={scrollRef}
        className="mt-6 h-48 overflow-y-auto text-left border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur-sm"
      >
        {messages.map((m, i) => (
          <p
            key={i}
            className={`text-sm mb-2 ${
              m.from === "user" ? "text-cyan-300" : "text-gray-300"
            }`}
          >
            {m.text}
          </p>
        ))}
      </div>

      <form className="flex gap-2 mt-4" onSubmit={sendMessage}>
        <input
          className="flex-1 px-3 py-2 bg-transparent text-sm text-white border border-white/20 rounded-md outline-none"
          placeholder="Ask Echo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="px-4 py-2 border border-white/20 text-white rounded-md">
          Send
        </button>
      </form>
    </div>
  );
}
