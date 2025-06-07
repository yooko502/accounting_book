import React, { useState } from "react";
import styles from "./ChatInput.module.css";

interface ChatInputProps {
  onSend?: (message: string) => void;
  loading?: boolean;
}

export default function ChatInput({ onSend, loading }: ChatInputProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    try {
      onSend && (await onSend(input));
      setInput("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles["chat-input-wrapper"]}>
      <textarea
        className={styles["chat-input-textarea"]}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="请输入记账内容，如：'今天午饭花了30元'..."
        rows={2}
        disabled={isLoading || loading}
      />
      <button
        className={styles["chat-input-send"]}
        onClick={handleSend}
        disabled={isLoading || loading || !input.trim()}
      >
        {isLoading || loading ? "发送中..." : "发送"}
      </button>
    </div>
  );
} 