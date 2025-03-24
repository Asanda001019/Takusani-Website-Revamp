import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from React Router

const AboutUsSection = () => {
  return (
    <div className="bg-gray-100">
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="Our Company" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-yellow-300">
            About <span className="text-[#111875]">Takusani Group</span>
          </h2>
          <p className="text-gray-700">
            Takusani is the preferred service provider for organisations towards achieving and maintaining
            responsible sustainable economic development through our innovative and flexible accredited and soft skills Training interventions,
            Enterprise Supplier Development Consultancy Services.
          </p>

          {/* Wrap the button with the Link component */}
          <Link to="/mainabout">
            <button
              className="mt-4 text-white hover:bg-indigo-700 focus:outline-none py-2 px-4 flex items-center space-x-2 rounded"
              style={{ backgroundColor: 'rgb(11, 18, 75)' }}>

          

              <span>Why Choose Us</span>
            </button>
          </Link>

        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsSection;
