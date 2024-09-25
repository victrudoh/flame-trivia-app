"use client"; // Ensure client-side rendering for chat

import React, { useState, useEffect } from "react";

interface Message {
  text: string;
  sender: "user" | "other"; // Distinguish between user and other sender
}

const ChatPage = () => {
  // Initialize with some example messages
  const initialMessages: Message[] = [
    { text: "Hello, how are you?", sender: "other" },
    { text: "I'm good, thanks! How about you?", sender: "user" },
    { text: "I'm doing well, just working on some projects.", sender: "other" },
    {
      text: "That sounds interesting! What projects are you working on?",
      sender: "user",
    },
    {
      text: "Just some updates to the app and improving the UI.",
      sender: "other",
    },
    { text: "Nice! If you need any help, feel free to ask.", sender: "user" },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Append new message to the messages list
    setMessages([...messages, { text: newMessage, sender: "user" }]);
    setNewMessage(""); // Clear the input field

    // Send message to the backend or WebSocket
    // Example: sendMessageToServer(newMessage);
  };

  useEffect(() => {
    // Initialize chat or fetch initial messages
    // Example: fetchMessagesFromServer();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-grow overflow-auto bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500">No messages yet.</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`message p-2 mb-2 rounded-lg flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  } p-2 rounded-lg max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="flex items-center border-t border-gray-300 bg-white p-2 rounded-lg shadow-md">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
