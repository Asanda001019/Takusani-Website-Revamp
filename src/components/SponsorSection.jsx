import React from 'react';

const SponsorSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-5 mt-28">
      <div className="flex flex-col justify-center">

        <div className="text-center">
          <h2 className="font-semibold text-3xl">Our Sponsors</h2>
          <p className="max-w-md mx-auto mt-2 text-gray-500">
            We are thankful to each and every company that sponsored our plugin, which helped us continue working on it.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">

          {/* Damelin Logo */}
          <div className="text-gray-400">
            <img
              src="path_to_damelin_logo.svg" // Replace with actual Damelin logo path
              alt="Damelin"
              width="120"
              height="60"
              className="w-auto h-15"
            />
          </div>

          {/* Training Force Logo */}
          <div className="text-gray-400">
            <img
              src="path_to_training_force_logo.svg" // Replace with actual Training Force logo path
              alt="Training Force"
              width="120"
              height="60"
              className="w-auto h-15"
            />
          </div>

          {/* Department of Labour Logo */}
          <div className="text-gray-400">
            <img
              src="path_to_department_of_labour_logo.svg" // Replace with actual Department of Labour logo path
              alt="Department of Labour"
              width="120"
              height="60"
              className="w-auto h-15"
            />
          </div>

          {/* Road Accident Fund Logo */}
          <div className="text-gray-400">
            <img
              src="path_to_road_accident_fund_logo.svg" // Replace with actual Road Accident Fund logo path
              alt="Road Accident Fund"
              width="120"
              height="60"
              className="w-auto h-15"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SponsorSection;
