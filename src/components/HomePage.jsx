import React from 'react';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Top Contact Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-white border-b border-gray-100">
        <div className="flex gap-6">
          <div className="flex items-center gap-1 text-sm">
            <span>(678) 345-3456</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>380 Albert St, Melbourne, Australia</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>email@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          {/* Social Media Icons */}
          <span className="text-gray-500 cursor-pointer">f</span>
          <span className="text-gray-500 cursor-pointer">t</span>
          <span className="text-gray-500 cursor-pointer">Be</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-bold text-2xl px-4 py-2 rounded-lg">
            Itfirm
          </div>
          <span className="text-xs text-gray-500 ml-2">IT Solutions & Service</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-6">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Home</span> 
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Pages</span> 
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Services</span> 
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Portfolio</span> 
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Blog</span> 
            <ChevronDown size={16} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Elements</span> 
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-200 rounded px-3 py-1">
            <input placeholder="Search..." className="outline-none text-sm" />
            <Search size={18} className="text-gray-500 ml-2" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>English</span> 
            <ChevronDown size={16} />
          </div>
          <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full px-4 py-2 flex items-center gap-2">
            Get a quote now <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[500px] bg-indigo-600 overflow-hidden">
        {/* Purple overlay with diagonal cutout */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-indigo-500 opacity-90 z-10"></div>
        
        {/* Background image */}
        <div className="absolute right-0 top-0 w-8/12 h-full bg-cover bg-center z-0"
             style={{
               backgroundImage: "url('/api/placeholder/1200/800')",
               clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)"
             }}>
        </div>
        
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
