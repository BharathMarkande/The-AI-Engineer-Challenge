import React from "react";
import type { ChatMessage as ChatMessageType } from "../types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

// Individual chat message bubble component.
export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
          isUser
            ? "bg-blue-500 text-white shadow-blue-200/50 dark:bg-blue-500"
            : "bg-white/90 backdrop-blur-sm text-slate-800 shadow-slate-200/50 dark:bg-slate-800 dark:text-slate-100"
        }`}
      >
        <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
          {message.content}
        </p>
      </div>
    </div>
  );
}

