import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Mail, ArrowRight, Users, Shield, Activity, HelpCircle } from 'lucide-react'; // Importing lucide-react icons

// Import images
import bgImage from '../assets/bg.jpg';

import bg from '../assets/BB.jpg';
import bge from '../assets/BG3.jpg';
import esdImage from '../assets/esd.jpg';

// Array to hold image references
const images = [
  bgImage,
  bg,
  esdImage,
  bge,

 
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Top Contact Bar */}
      {/* <div className="flex justify-between items-center px-6 py-1 bg-white border-b border-gray-100">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-sm">
            <Phone size={16} className="text-gray-500" />
            <span>(010) 634-0505</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-gray-500" />
            <span>8 Incubation Riverside View Fourways</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail size={16} className="text-gray-500" />
            <span>info@Takusani.co.za</span>
          </div>
        </div>
      </div> */}

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-2 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-16 w-80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="h-full">
              {/* Arrow head (yellow triangle) */}
              <polygon points="30,40 60,10 90,40" fill="#FFE600"/>
              
              {/* Arrow stem (blue) */}
              <rect x="54" y="40" width="12" height="50" fill="#2A3190"/>
              
              {/* Text "akusani" */}
              <text x="70" y="85" font-family="Arial, sans-serif" font-size="32" font-weight="500" fill="#2A3190">akusani</text>
              
              {/* Tagline */}
              <text x="70" y="105" font-family="Arial, sans-serif" font-size="15" fill="#777777">Adding Value To Your Organisation</text>
            </svg>
          </div>
          <span className="text-xs text-gray-500 ml-4">IT Solutions & Service</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Home</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>About</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Services</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Contact</span> 
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full px-4 py-1.5 flex items-center gap-2">
            Get a quote now <ArrowRight size={16} />
          </button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative min-h-[500px] overflow-hidden bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        {/* Purple overlay with diagonal cutout */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500 opacity-90 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-16 flex items-center min-h-[500px]">
          <div className="max-w-lg text-white">
            {/* <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm mb-6">
              We are IT service agency
            </div> */}
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
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                {/* Updated icon (Users for training) */}
                <Users size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Training</h3>
              <p className="text-gray-500 text-sm">Services</p>
            </div>

            {/* ESD and SED Solution Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                {/* Updated icon (Shield for ESD & SED) */}
                <Shield size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">ESD & SED</h3>
              <p className="text-gray-500 text-sm">Solution</p>
            </div>

            {/* Skills Development Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                {/* Updated icon (Activity for Skills Development) */}
                <Activity size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Skills Development</h3>
              <p className="text-gray-500 text-sm">Training</p>
            </div>

            {/* Employee Assistance Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                {/* Updated icon (HelpCircle for Employee Assistance) */}
                <HelpCircle size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Employee Assistance</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
