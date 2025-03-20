import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Shield, Activity, HelpCircle, X } from 'lucide-react';

// Import images
import bgImage from '../assets/bg.jpg';
import bg from '../assets/BB.jpg';
import bge from '../assets/BG3.jpg';
import esdImage from '../assets/esd.jpg';
import Layout from './Layout';
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
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [userMessage, setUserMessage] = useState('');

  // Change background image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { sender: 'user', text: userMessage },
        { sender: 'bot', text: 'Thanks for your message! Please reach out to info@Takusani for now?' },
      ]);
      setUserMessage('');
    }
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <>
      {/* Hero Section with Enhanced Styling */}
      <div
        className="relative min-h-[600px] overflow-hidden bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-indigo-600 opacity-85 z-10"></div>

        <div className="relative z-20 container mx-auto px-6 py-24 flex items-center min-h-[600px]">
          <div className="max-w-xl">
            <div className="bg-white bg-opacity-95 rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                <span className="text-yellow-500 drop-shadow-sm">TAKUSANI GROUP</span>
                <div className="w-24 h-1 bg-yellow-500 my-2"></div>
                <span className="text-[#111875] text-4xl">TRAINING AND SKILLS DEVELOPMENT</span>
              </h1>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed font-light">
                We place you at the centre of international networks to
                advance your strategic interests and unlock your full potential.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-6 -mt-16 relative z-30">
          <div className="max-w-5xl mx-auto grid grid-cols-4 gap-6">
            {/* Training Card */}
            <div className="p-4 rounded-lg shadow-sm text-center flex flex-col items-center"
            style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Users size={24} className="text-yellow-300" />
              </div>
              <h2 className="text-gray-100 font-medium text-lg">Training</h2>
              <h4 className="text-gray-100 text-sm">Services</h4>
            </div>

            {/* ESD and SED Solution Card */}
            <div className="p-4 rounded-lg shadow-sm text-center flex flex-col items-center"
             style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Shield size={24} className="text-yellow-300" />
              </div>
              <h3 className="text-gray-100 font-medium text-lg">ESD & SED</h3>
              <p className="text-gray-100 text-sm">Solution</p>
            </div>

            {/* Skills Development Card */}
            <div className="p-4 rounded-lg shadow-sm text-center flex flex-col items-center"
             style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Activity size={24} className="text-yellow-300" />
              </div>
              <h3 className="text-gray-100 font-medium text-lg">Skills Development</h3>
              <p className="text-gray-100 text-sm">Training</p>
            </div>

            {/* Employee Assistance Card */}
            <div className="p-4 rounded-lg shadow-sm text-center flex flex-col items-center"
             style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <HelpCircle size={24} className="text-yellow-300" />
              </div>
              <h3 className="text-gray-100 font-medium text-lg">Employee Assistance</h3>
              <p className="text-gray-100 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Chatbot Icon */}
      <div
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white rounded-full p-4 cursor-pointer shadow-lg hover:bg-indigo-800"
      >
        <HelpCircle size={32} />
      </div>

      {/* Chat window */}
      {showChat && (
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-white shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Chat with us</h3>
            <button onClick={closeChat} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-scroll mb-4">
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