import React from 'react'; 
import Comp from "../assets/competition-commission_orig.jpg";
import Training from "../assets/trainingf.png";
import RAF from "../assets/RAF-logo.jpg";
import DOLP from "../assets/DOLP.jpeg";

const SponsorSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 mt-28">
      <div className="flex flex-col justify-center">

        <div className="text-center">
          <h2 className="font-bold text-3xl">Our Sponsors</h2>
          <p className="max-w-md mx-auto mt-1 text-gray-500">
            We are thankful to each and every company that sponsored our plugin, which helped us continue working on it.
          </p>
        </div>

        <br></br>
        <br></br>

        {/* Updated flex to ensure the logos are in one row */}
        <div className="flex justify-center gap-8 mt-4">
          {/* Damelin Logo */}
          <div className="text-gray-400 flex justify-center items-center">
            <img
              src={Training} // Replace with actual Damelin logo path
              alt="Damelin"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>

          {/* Training Force Logo */}
          <div className="text-gray-400 flex justify-center items-center">
            <img
              src={Comp} // Replace with actual Training Force logo path
              alt="Training Force"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>

          {/* Department of Labour Logo */}
          <div className="text-gray-400 flex justify-center items-center">
            <img
              src={RAF} // Replace with actual Department of Labour logo path
              alt="Department of Labour"
              className="w-32 h-32 rounded-full border-5 border-blue-500 object-cover"
            />
          </div>

          {/* Road Accident Fund Logo */}
          <div className="text-gray-400 flex justify-center items-center">
            <img
              src={DOLP} // Replace with actual Road Accident Fund logo path
              alt="Road Accident Fund"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
