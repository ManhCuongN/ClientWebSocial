import React, { useState, useEffect } from "react";

export default function BotMessage({ Message }) {
  console.log("fetchMessage", Message);
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("a");

  // useEffect(() => {
  //   async function loadMessage() {
  //     const msg =  fetchMessage;
  //     setLoading(false);
  //     setMessage(msg);
  //   }
  //   loadMessage();
  // }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message">\abc</div>
    </div>
  );
}
