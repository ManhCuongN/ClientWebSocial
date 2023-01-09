import React, { useState, useEffect } from "react";

export default function BotMessage({ Message }) {
  console.log("fetchMessage", Message);
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg =  Message;
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [Message]);

  return (
    <div className="message-container">
      <div className="bot-message">{message}</div>
    </div>
  );
}
