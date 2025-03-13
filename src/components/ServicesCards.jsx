import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from React Router
import Training from "../assets/training.jpeg";
import ESD from "../assets/esd.jpg";
import SKILLS from "../assets/skill.jpeg";
import EAP from "../assets/eap.png";

export const ServicesCards = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-full"
            src={Training}
            alt="Training Image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">TRAINING</h3>
          <p className="text-gray-600 text-sm mb-4">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus
            sit amet euismod lorem. */}
          </p>
          <div className="flex items-center justify-between">
            {/* Link component used here */}
            <Link to="/training">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-full"
            src={SKILLS}
            alt="Skills Image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">SKILLS DEVELOPMENT</h3>
          <p className="text-gray-600 text-sm mb-4">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus
            sit amet euismod lorem. */}
          </p>
          <div className="flex items-center justify-between">
          <Link to="/skillsdevelopment">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-full"
            src={EAP}
            alt="EAP Image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">ESD & SED SOLUTIONS</h3>
          <p className="text-gray-600 text-sm mb-4">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus
            sit amet euismod lorem. */}
          </p>
          <div className="flex items-center justify-between">
          <Link to="/esd">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <div className="relative">
          <img
            className="w-full"
            src={ESD}
            alt="EAP Image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">EMPLOYEE ASSISTANCE PROGRAMME</h3>
          <p className="text-gray-600 text-sm mb-4">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus
            sit amet euismod lorem. */}
          </p>
          <div className="flex items-center justify-between">
          <Link to="/eap">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
