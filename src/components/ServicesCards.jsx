import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from React Router
import Training from "../assets/training.jpeg";
import ESD from "../assets/esd.jpg";
import SKILLS from "../assets/skill.jpeg";
import EAP from "../assets/eap.png";

export const ServicesCards = () => {
  return (

    <div className=" mt-0 text-center
    " style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
      <br></br>
      <br></br>
    <span className="fontFamily-Arial, sans-serif font-bold py-1 px-4 rounded-full text-xl font-large text-gray-100 text-center"  
    >
             List of services we offer.
             </span>
             <br></br>
             <p className="mt-4 text-lg text-gray-100">
          At every step of our process, we prioritize the user, ensuring<br></br> that our products and services are designed with their needs in mind.
        </p>
             <br></br>
             <br></br>
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" 
     style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
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
          <p className="text-gray-100 text-sm mb-4">
          All our facilitators have practical experience of implementation of the knowledge framework they are transferring to learners. Programs are further enhanced to provide learners with additional information and skills to be applied and sustained within the client’s organisation.'
        
          </p>
          <div className="flex items-center justify-between">
            {/* Link component used here */}
            <Link to="/training">
              <button className="bg-yellow-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
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
          <p className="text-gray-100 text-sm mb-4">
          The extent to which enterprises carry out enterprise development initiatives intended to assist and accelerate the growth and sustainability of black enterprises.
          </p>
          <div className="flex items-center justify-between">
          <Link to="/skillsdevelopment">
              <button className="bg-yellow-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
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
          <p className="text-gray-100 text-sm mb-4">
          We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.'
          </p>
          <div className="flex items-center justify-between">
          <Link to="/esd">
              <button className="bg-yellow-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
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
          <p className="text-gray-100 text-sm mb-4">
          We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.'
          </p>
          <div className="flex items-center justify-between">
          <Link to="/eap">
              <button className="bg-yellow-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicesCards;
