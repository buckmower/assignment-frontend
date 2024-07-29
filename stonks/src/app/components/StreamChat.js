import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import './css/StreamChat.css';
import StarWhite from '../../../public/assets/star-white.png';
import GearWhite from '../../../public/assets/gear-white.png';

const StreamChatComponent = (props) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <StreamChat theme={props.theme} className="stream-chat">
      <div className="chat-header">
        <h3>Stream Chat</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <span className="username">User{index + 1}:</span> {msg}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <div style={{margin: "10px", padding: "2px", display: "flex", position: "relative", width: "20px", height: "20px", backgroundColor: "#454C4C"}}>
            <Image style={{width: "15px", height: "15px"}} src={StarWhite} />
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message"
        />
      </div>
      <div className='chat-actions'>
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "flex", padding: "10px"}}><Image style={{width: "15px", height: "15px"}} src={GearWhite} /></div>
                <button onClick={handleSendMessage}>
                    <span style={{fontSize: "14px", fontWeight: "700", padding: "5px 7px"}}>Chat</span>
                </button>
            </div>
        </div>
      </div>
    </StreamChat>
  );
};

const StreamChat = styled.div`
    
    display: flex;
    flex-direction: column;
    height: 100%;
    border-left: 1px solid #666;
  
  .chat-header {
    padding: 10px;
    background-color: #1B1D1D;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #666;
  }
  
  .chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    background-color: #1B1D1D;
    color: #fff;
    border: none;
  }
  
  .chat-message {
    margin-bottom: 10px;
  }
  
  .username {
    font-weight: bold;
    color: #00aaff;
  }
  
  .chat-input {
    display: flex;
    padding: 5px;
    background-color: #1B1D1D;
    border-top: none;
  }
  
  .chat-input input {
    flex: 1;
    padding: 5px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
    background-color: #1B1D1D;
    color: #fff;
  }

  .chat-input input::placeholder {
        font-size: 12px;
        padding: 5px;
   }

   .chat-actions {
    display: flex;
    padding: 5px;
    background-color: #1B1D1D;
    border-top: none;
    }
  
  .chat-actions button {
    display: flex;
    position: relative;
    height: 30px;
    width: 50px;
    border: none;
    border-radius: 4px;
    background-color: #9146FF;
    color: #fff;
    cursor: pointer;
  }
  
  .chat-input button:hover {
    background-color: #5b6eae;
  }
}`;

export default StreamChatComponent;