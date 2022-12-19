import React, { Fragment, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/config";

export default function Input({ onSend, onRes }) {
  const [message, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const handleSend = async e => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      
    }
     setText("");
    onSend(message);
   var  body = message
   fetch(`${BASE_URL}/api/chatbot`, {
    method: 'POST', // or 'PUT'
    headers:headers,
    body,
  }).then((res) => onRes(res.data.message))
      .catch((error) => {
       console.log("error: " + error);
      })
    
  //  const a =  fetch('http://localhost:5000/api/chatbot', {
  //     method: 'POST', // or 'PUT'
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(message),
  //   }).then((res) => console.log(res.json()))
    // setText("");
    // onSend(message);
  };

  return (
    <Fragment>
      <div className="messages">
      abc
      <div/>
      </div>
    <div className="input">
      <form onSubmit={handleSend}>
        <input
          type="text"
          onChange={handleInputChange}
          value={message}
          placeholder="Enter your message here"
        />
        <button>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 500 500"
          >
            <g>
              <g>
                <polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" />
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
    </Fragment>
    
    
  );
}
