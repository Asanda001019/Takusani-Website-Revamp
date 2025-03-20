import React from 'react';
import { Link } from 'react-router-dom';
import Training from "../assets/training.jpeg";
import ESD from "../assets/esd.jpg";
import SKILLS from "../assets/skill.jpeg";
import EAP from "../assets/eap.png";

export const ServicesCards = () => {
  return (
    <div className="relative py-20 text-center" style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
      {/* Premium heading section */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-white mb-6">Our Professional Services</h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-yellow-400 mx-1"></div>
          <div className="w-4 h-1 bg-yellow-400 mx-1"></div>
          <div className="w-2 h-1 bg-yellow-400 mx-1"></div>
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          At every step of our process, we prioritize the user, ensuring that our products and services are designed with their needs in mind.
        </p>
      </div>
      
      {/* Services cards with premium styling */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Card 1 - Training */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                src={Training}
                alt="Training Services"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                TRAINING
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">TRAINING</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                All our facilitators have practical experience of implementation of the knowledge framework they are transferring to learners. Programs are further enhanced to provide learners with additional information and skills to be applied and sustained within the client's organisation.
              </p>
              <div className="flex justify-center">
                <Link to="/training">
                  <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 - Skills Development */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                src={SKILLS}
                alt="Skills Development"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                SKILLS
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">SKILLS DEVELOPMENT</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The extent to which enterprises carry out enterprise development initiatives intended to assist and accelerate the growth and sustainability of black enterprises.
              </p>
              <div className="flex justify-center">
                <Link to="/skillsdevelopment">
                  <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 - ESD & SED Solutions */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                src={EAP}
                alt="ESD & SED Solutions"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                ESD & SED
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">ESD & SED SOLUTIONS</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.
              </p>
              <div className="flex justify-center">
                <Link to="/esd">
                  <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 - Employee Assistance Programme */}
          <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                src={ESD}
                alt="Employee Assistance Programme"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                EAP
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">EMPLOYEE ASSISTANCE PROGRAMME</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.
              </p>
              <div className="flex justify-center">
                <Link to="/eap">
                  <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center">
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;