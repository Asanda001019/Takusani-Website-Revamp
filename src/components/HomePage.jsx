import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Shield, Activity, HelpCircle } from 'lucide-react'; // Importing lucide-react icons

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

  // Change background image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

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
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Users size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Training</h3>
              <p className="text-gray-500 text-sm">Services</p>
            </div>

            {/* ESD and SED Solution Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Shield size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">ESD & SED</h3>
              <p className="text-gray-500 text-sm">Solution</p>
            </div>

            {/* Skills Development Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <Activity size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Skills Development</h3>
              <p className="text-gray-500 text-sm">Training</p>
            </div>

            {/* Employee Assistance Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <HelpCircle size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Employee Assistance</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
      <AboutUsSection />
    </>  
  );
};

export default HomePage;
