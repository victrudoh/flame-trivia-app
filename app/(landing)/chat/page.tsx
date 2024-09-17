"use client"; // Ensure client-side rendering for chat

// import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft, Send, User } from "lucide-react";
import Link from "next/link";
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
    <>
      {/* <MainContainer> */}
      <div className="text-brand-dark relative flex flex-col items-center justify-start text-lg font-geistsans gap-8 py-8">
        <TopSection>
          <div className="w-full flex items-center justify-start gap-4">
            <Link href={"/"}>
              <ArrowLeft className="bg-brand-white shadow-lg w-10 h-10 p-1 ml-4 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark" />
            </Link>
            <div className="flex items-center gap-2">
              <User className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer" />
              <div className="flex flex-col items-start gap-1">
                <span className="font-bold text-xl text-brand-white">
                  Edi Khan
                </span>
                <span className="font-normal text-sm text-brand-white">
                  Computer Science - Gaia.
                </span>
              </div>
            </div>
          </div>
        </TopSection>

        {/* Main Chat Section */}
        {/* <div className="flex flex-col w-full relative"> */}
        {/* Chat messages */}
        <div className="flex-grow overflow-y-auto bg-blue-100/80 h-screen rounded-lg shadow-lg p-4 pb-24 w-full">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500 text-base font-geistsans font-bold">
              No messages yet.
            </p>
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
                      : "bg-brand-white text-gray-800"
                  } p-3 rounded-lg max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Message input box (fixed to the bottom) */}
        {/* </div> */}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-2 py-4 flex items-center gap-3 shadow-lg"> */}
        <div className="glass-fx fixed bottom-0 max-w-screen-md w-full px-1 z-50 h-[72px] rounded-t-xl bg-brand-white flex items-center justify-evenly gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-lg font-geistsans font-semibold text-base"
            placeholder="Send a Message"
          />
          <button
            onClick={handleSendMessage}
            className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            <Send />
          </button>
        </div>
      </div>
      {/* </MainContainer> */}
    </>
  );
};

export default ChatPage;
