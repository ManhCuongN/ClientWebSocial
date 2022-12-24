import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";

import API from "./ChatbotAPI";

import "./styles.css";
import Header from "./Header";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          Message={messages}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    console.log(text);
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      // <BotMessage
      //   key={messages.length + 2}
      //   fetchMessage={async () => await API.GetChatbotResponse(text)}
      // />
    );
    setMessages(newMessages);
  };

  const response = async res => {
    setMessages(res);
    <BotMessage
      Message={res}
    />
  }
  
  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} onRes = {response}/>
    </div>
  );
}

export default Chatbot