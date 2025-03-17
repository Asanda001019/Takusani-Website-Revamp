import React from 'react'; 
import Comp from "../assets/competition-commission_orig.jpg";
import Training from "../assets/trainingf.png";
import RAF from "../assets/RAF-logo.jpg";
import DOLP from "../assets/DOLP.jpeg";



export default function SponsorSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">Our Sponsors</h2>
          <p className="max-w-md mx-auto mt-1 text-gray-500">
            We are thankful to each and every company that sponsored our plugin, which helped us continue working on it.
          </p>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          
          <div className="block group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
            <img
              src={DOLP} // Replace with actual Road Accident Fund logo path
              alt="Road Accident Fund"
          
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
         
          </div>

          <div className="block group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
            <img
              src={RAF} // Replace with actual Department of Labour logo path
              alt="Department of Labour"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Patricia Angely
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Co-Founder
            </span>
          </div>

          <div className="group group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
            <img
              src={Comp} // Replace with actual Training Force logo path
              alt="Training Force"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Jerom Bell
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Chairman
            </span>
          </div>

          <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
            <div className="relative mb-6">
            <img
              src={Training} // Replace with actual Damelin logo path
              alt="Damelin"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Yasmine Tano
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              CEO
            </span>
          </div>

         

        </div>
      </div>
    </section>
  );
}
