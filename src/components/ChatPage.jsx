import { RxCrossCircled } from "react-icons/rx";
import { LuPenSquare } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react'
import { FaBars } from "react-icons/fa6";

export default function ChatPage() {

  const [chats, setChats] = useState([]); // create a state for chats
  const [inputValue, setInputValue] = useState(''); // create a state for input value
  const [messages, setMessages] = useState([]); // make sure messages is initialized as an empty array
  const [activeChat, setActiveChat] = useState(null); // create a state for active chat
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 控制左边栏显示状态

  useEffect(() => {
    if (activeChat) {
      const storedMessages = JSON.parse(localStorage.getItem(activeChat)) || [];
      setMessages(storedMessages);
    }
  }, [activeChat]);

  const handleNewChat = () => {
    createNewChat();
  };

  const handleEmojiClick = (emoji) => {
    setInputValue(prevValue => prevValue + emoji.native);
  };

  const createNewChat = (initialMessage = '') => {
    const newChat = {
      id: uuidv4(),
      displayId: `${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString('en-GB')}`,
      messages: initialMessage ? [{
        type: 'prompt',
        text: initialMessage,
        timestamp: new Date().toLocaleTimeString('en-GB'),
      }] : [],
    };
    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    localStorage.setItem(newChat.id, JSON.stringify(newChat.messages));
    setActiveChat(newChat.id);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    if (inputValue.trim().length === 0) return;

  const newMessage = {
    type: 'prompt',
    text: inputValue,
    timestamp: new Date().toLocaleTimeString('en-GB'),
  };

  if (!activeChat) {
    createNewChat(inputValue);
    setInputValue('');
  } else {
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages); 
    localStorage.setItem(activeChat, JSON.stringify(updatedMessages)); 
    setInputValue(''); 

    const updatedChats = chats.map((chat) => {
      if (chat.id === activeChat) {
        return { ...chat, messages: updatedMessages };
      }
      return chat;
    });
    setChats(updatedChats);
    localStorage.setItem('chats', JSON.stringify(updatedChats)); 
    setIsTyping(true);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`, 
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: inputValue}],
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    const chatResponse = data.choices[0].message.content.trim();

    const newResponse = {
      type: 'response',
      text: chatResponse,
      timestamp: new Date().toLocaleTimeString('en-GB'),
    };

    const updatedMessagesWithResponse = [...updatedMessages, newResponse];
    setMessages(updatedMessagesWithResponse);
    localStorage.setItem(activeChat, JSON.stringify(updatedMessagesWithResponse));
    setIsTyping(false);

    const updatedChatsWithResponse = chats.map((chat) => {
      if (chat.id === activeChat) {
        return { ...chat, messages: updatedMessagesWithResponse };
      }
      return chat;
    });
    setChats(updatedChatsWithResponse);
    localStorage.setItem('chats', JSON.stringify(updatedChatsWithResponse));
  }
};

    const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
    };

    const handleSelectedChat = (chatId) => {
    setActiveChat(chatId);
    };

    const handleDeleteChat = (chatId) => {
    const updatedChats = chats.filter((chat) => chat.id !== chatId);
    setChats(updatedChats);
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    localStorage.removeItem(chatId);
    if (chatId === activeChat) {
        const newActiveChat = updatedChats.length > 0 ? updatedChats[0].id : null;
        setActiveChat(newActiveChat);
    }
    };

    useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || [];
    setChats(storedChats);
    if (storedChats.length > 0) {
        setActiveChat(storedChats[0].id);
    }
    }, []);

return (
  <div className="w-full h-screen flex bg-gray_blue">
    <style>{`
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #f42f5f, #8e25bf);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #ff79c6, #bd93f9);
      }
      ::-webkit-scrollbar-track {
        background: #1e1e2e;
      }
    `}</style>

    {/* Sidebar Toggle for small screens */}
    <button 
      className="lg:hidden absolute top-4 left-4 z-10 text-white text-3xl"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <FaBars />
    </button>

    {/* Chat List */}
    <div className={`w-1/2 lg:w-1/4 h-full bg-dark_black px-4 flex flex-col space-y-3 absolute lg:relative ${isSidebarOpen ? 'block' : 'hidden lg:block '}`}>
      <div className="w-full flex items-center justify-between pl-2 py-4 text-slate-300">
        <h2 className="text-base lg:text-xl font-bold uppercase pl-10 lg:pt-2 lg:pl-0 ">Chat List</h2>
        <i className="bx bx-x-circle text-2xl lg:pt-2 pr-2 hover:text-slate-100 cursor-pointer "
          onClick={handleNewChat}
        >
          <LuPenSquare />
        </i>
      </div>

      {/* Display the chats */}
      {chats.map((chat) => (
        <div key={chat.id} className={`w-full h-10 ${chat.id === activeChat ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gray-800'} p-2 rounded-lg flex items-center justify-between shadow-md cursor-pointer`}
          onClick={() => handleSelectedChat(chat.id)}
        >
          <h4 className="text-base  lg:text-lg font-light text-gray-300 flex pl-1">Chat  
              <p className="text-xs lg:text-sm flex pt-1 pl-4">
                 { chat.displayId}
              </p>
          </h4>
          <i className="bx bx-x-circle text-2xl text-pink-500 cursor-pointer hover:text-red-600 hover:scale-110 transition ease-in-out"
              onClick={
                  (e) => {
                      e.stopPropagation();
                      handleDeleteChat(chat.id);
                  }
              }
          >
            <RxCrossCircled />
          </i>
        </div>
      ))}
    </div>

    {/* Chat Window */}
    <div className="w-full lg:w-3/4 h-full flex flex-col">
      <div className="w-full min-h-14 bg-dark_black flex items-center justify-between px-8">
        <h3 className="text-base lg:text-xl font-extrabold text-slate-300 font-exo uppercase ml-8 lg:ml-0">
          Chat with GPT-PRO
        </h3>
        <Link to="/" className="flex items-center justify-center p-2 rounded-lg shadow-md">
          <FaArrowRight className="text-2xl text-gray-300 hover:text-gray-100 cursor-pointer hover:scale-110 transition ease-in-out" />
        </Link>
      </div>

      {/* Chat Messages */}
      <div className="w-full flex-grow p-4 flex flex-col space-y-8 overflow-y-auto no-scrollbar">
        {messages.map((message, index) => (
          message.type === 'prompt' ? (
            <div key={index} className="max-w-4/5 ml-16 pt-2 px-4 text-base text-white shadow-md bg-gradient-to-r from-pink-500 to-purple-600 self-end rounded-3xl rounded-bl-none text-right ">
              {message.text}
              <span className="block text-xs mt-0 mb-1 text-right ">{message.timestamp}</span>
            </div>
          ) : (
            <div key={index} className="max-w-4/5 mr-16 pt-3 px-6 text-base text-white shadow-md bg-gradient-to-r from-orange-400 to-red-400 self-start rounded-3xl rounded-br-none text-left">
              {message.text}
              <span className="block text-xs mt-0 mb-1">{message.timestamp}</span>
            </div>
          )
        ))}
        
        <div ref={chatEndRef}></div>
        {isTyping && (
          <div className="w-full min-h-2 bg-gray_blue">
              <p className="text-gray-500 ml-1 text-base">
                  Typing......
              </p>
        </div>
      )}
      </div>

      {/* Message Input */}
      <form className="w-full min-h-14 bg-gray-800 flex items-center pr-4 pl-4  rounded"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <i className="fa-solid fa-face-smile text-gray_blue_light cursor-pointer text-2xl px-5 hover:text-gray-300 transition ease-in-out"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        ></i>
          {showEmojiPicker && (
              <div className="absolute bottom-16">
                  <Picker 
                  data={data}
                  onEmojiSelect={handleEmojiClick} />
              </div>
          )}
        <input
          type="text"
          className="flex-grow bg-transparent border-none text-base text-gray-200 placeholder-gray_blue_light outline-none"
          placeholder="Type a message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onFocus={() => setShowEmojiPicker(false)}
        />
        <i className="fa-solid fa-paper-plane text-2xl text-gray_blue_light cursor-pointer hover:text-gray-300 transition ease-in-out pr-5"
          onClick={sendMessage}
        ></i>
      </form>
    </div>
  </div>
);


}
