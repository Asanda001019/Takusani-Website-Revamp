// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Importing Link from React Router for navigation

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-lg sticky top-0 z-50 transition-all">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="h-16 w-80">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" className="h-full">
            <polygon points="30,40 60,10 90,40" fill="#FFE600" />
            <rect x="54" y="40" width="12" height="50" fill="#2A3190" />
            <text x="70" y="85" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="500" fill="#2A3190">
              AKUSANI.
            </text>
            <text x="70" y="105" fontFamily="Arial, sans-serif" fontSize="25" fill="#777777">
              Adding Value To Your Organisation
            </text>
          </svg>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-lg font-medium text-gray-700">
        <Link to="/" className="cursor-pointer hover:text-indigo-600 transition-all duration-300">
          Home
        </Link>
        <Link
          to="/MainAbout"
          className="cursor-pointer hover:text-indigo-600 transition-all duration-300"
        >
          About
        </Link>
        <Link
          to="/servicescard"
          className="cursor-pointer hover:text-indigo-600 transition-all duration-300"
        >
          Services
        </Link>

        <Link
          to="/JobListingPage"
          className="cursor-pointer hover:text-indigo-600 transition-all duration-300"
        >
          Job Posts
        </Link>


        <Link
          to="/contactus"
          className="cursor-pointer hover:text-indigo-600 transition-all duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* You can add other icons or buttons here */}
      </div>
    </nav>
  );
};

export default Navbar;
