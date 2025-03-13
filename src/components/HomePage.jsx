import React, { useEffect, useState } from 'react';

import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react'; 

// Import images
import bgImage from '../assets/bg.jpg';
import trainingImage from '../assets/training.jpeg';
import skillImage from '../assets/skill.jpeg';
import esdImage from '../assets/esd.jpg';

// Array to hold image references
const images = [
  bgImage,
  trainingImage,
  skillImage,
  esdImage
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
      <div className="flex justify-between items-center px-6 py-2 bg-white border-b border-gray-100">
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
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold text-2xl px-4 py-2 rounded-lg">
            Takusani Grou
          </div>
          <span className="text-xs text-gray-500 ml-2">IT Solutions & Service</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Home</span>
            {/* Removed ChevronDown and other links */}
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Pages</span>
            {/* Removed ChevronDown and other links */}
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Services</span>
            {/* Removed ChevronDown and other links */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Removed Search Bar and English Dropdown */}
          <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full px-4 py-2 flex items-center gap-2">
            Get a quote now <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative min-h-[500px] overflow-hidden bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${images[currentImage]})`, // Dynamically changing the background image
          transition: 'background-image 1s ease-in-out', // Smooth transition effect for the background
        }}
      >
        {/* Purple overlay with diagonal cutout */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500 opacity-90 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 py-16 flex items-center min-h-[500px]">
          <div className="max-w-lg text-white">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm mb-6">
              We are IT service agency
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Think Big. We make<br />
              IT, possible!
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
          <div className="grid grid-cols-4 gap-4">
            {/* Training Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                {/* Replace with training icon */}
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m9-9H3" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">Training</h3>
              <p className="text-gray-500 text-sm">Services</p>
            </div>

            {/* ESD and SED Solution Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                {/* Replace with ESD icon */}
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l7 7 7-7" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">ESD & SED</h3>
              <p className="text-gray-500 text-sm">Solution</p>
            </div>

            {/* Skills Development Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                {/* Replace with skills development icon */}
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">Skills Development</h3>
              <p className="text-gray-500 text-sm">Training</p>
            </div>

            {/* Employee Assistance Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                {/* Replace with employee assistance icon */}
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v20M2 12h20" />
                </svg>
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
