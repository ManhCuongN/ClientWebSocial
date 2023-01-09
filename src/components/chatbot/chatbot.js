import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
import Input from "./Input";

import "./styles.css";
import Header from "./Header";
import { useSelector } from "react-redux";
function Chatbot() {
  const { auth } = useSelector(state => state)

  
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
      // /
    );
    setMessages(newMessages);
  };

  const response = res => {
    setMessages(res);
    <BotMessage
      Message={res}
    />
  }
  
  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} onRes = {response} auth={auth}/>
    </div>
  );
}

export default Chatbot