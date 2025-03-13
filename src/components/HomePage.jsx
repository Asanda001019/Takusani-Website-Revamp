import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Shield, Activity, HelpCircle, X } from 'lucide-react'; // Importing lucide-react icons

// Import images
import bgImage from '../assets/bg.jpg';
import bg from '../assets/BB.jpg';
import bge from '../assets/BG3.jpg';
import esdImage from '../assets/esd.jpg';
import Layout from './Layout'; // Import the Layout component
import AboutUsSection from './AboutUsSection';

// Array to hold image references
const images = [
  bgImage,
  bg,
  esdImage,
  bge,
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showChat, setShowChat] = useState(false); // State to toggle chat window
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]); // Store messages for chat history
  const [userMessage, setUserMessage] = useState(''); // User input

  // Change background image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Handle the click to open chat window
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  // Handle sending a user message and bot response
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { sender: 'user', text: userMessage },
        { sender: 'bot', text: 'Thanks for your message! How else can I assist you?' },
      ]);
      setUserMessage('');
    }
  };

  // Handle closing the chat window
  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <> {/* Layout component automatically includes Navbar */}
      {/* Hero Section */}
      <div
        className="relative min-h-[500px] overflow-hidden bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500 opacity-90 z-10"></div>

        <div className="relative z-20 container mx-auto px-6 py-16 flex items-center min-h-[500px]">
          <div className="max-w-lg text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              TAKUSANI GROUP<br />
              TRAINING AND SKILLS DEVELOPMENT
            </h1>
            <p className="mb-8 text-lg">
              We place you at the centre of international networks to<br />
              advance your strategic interests.
            </p>
            <button className="bg-indigo-400 hover:bg-indigo-800 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all">
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-6">
        <div className="container mx-auto px-6 -mt-16 relative z-30">
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6">
            {/* Training Card */}
            <div className="bg-[#E0F7FA] p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Users size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Training</h3>
              <p className="text-gray-500 text-sm">Services</p>
            </div>

            {/* ESD and SED Solution Card */}
            <div className="bg-[#E0F7FA] p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Shield size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">ESD & SED</h3>
              <p className="text-gray-500 text-sm">Solution</p>
            </div>

            {/* Skills Development Card */}
            <div className="bg-[#E0F7FA] p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Activity size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Skills Development</h3>
              <p className="text-gray-500 text-sm">Training</p>
            </div>

            {/* Employee Assistance Card */}
            <div className="bg-[#E0F7FA] p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <HelpCircle size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Employee Assistance</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Chatbot Icon (Fixed position in the bottom-right corner) */}
      <div
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white rounded-full p-4 cursor-pointer shadow-lg hover:bg-indigo-800"
      >
        <HelpCircle size={32} />
      </div>

      {/* Chat window (Hidden by default, shown when 'showChat' is true) */}
      {showChat && (
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-white shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Chat with us</h3>
            <button onClick={closeChat} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-scroll mb-4">
            {/* Chat messages go here */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="flex items-center mt-auto">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full p-2 border rounded-l-lg border-gray-300"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-indigo-600 text-white p-2 rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
