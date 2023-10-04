import React from "react";

export default function ChatMessagesList({ messages = [] }) {
  return (
    <div className="chat-container">
      <ul className="chat-box chatContainerScroll">
        {messages.map((message, idx) => (
          <li className="chat-left" key={message.id}>
            <div className="chat-avatar">
              <img src={message?.author.avatar} alt="Retail Admin" />
              <div className="chat-name">Test User 1</div>
            </div>
            <div className="chat-text-wrapper">
              <span className="chat-text">{message.content}</span>
              <span className="chat-spacer"></span>
              <div className="chat-hour">{message.timestamp}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
