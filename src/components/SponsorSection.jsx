import React from 'react';
import PNP from "../assets/PNP.jpeg";
import SETA from "../assets/SETA.jpeg";
import MOBICEL from "../assets/mobicel.jpeg";
import NURT from "../assets/Nurture.jpeg";
import MUTUAL from "../assets/MUTUAL.jpeg";
import RAM from "../assets/RAM.jpeg";
import HIGH from "../assets/HIGH.jpeg";

export default function SponsorSection() {
  const sponsors = [
    { image: PNP, name: "PicknPay" },
    { image: SETA, name: "WRSETA" },
    { image: PNP, name: "PicknPay" }, // You might want to replace this with the correct image
    { image: NURT, name: "INURTURE" },
    { image: MOBICEL, name: "MOBICEL" },
    { image: MUTUAL, name: "OLD MUTUAL" },
    { image: RAM, name: "RAM CHEMICALS" },
    { image: HIGH, name: "HIGHER EDUCATION AND TRAINING" }
  ];

  const scrollLeft = () => {
    document.getElementById('sponsors-container').scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('sponsors-container').scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900">Our Sponsors</h2>
          <p className="max-w-md mx-auto mt-1 text-center text-gray-500">
            We are thankful to each and every company that sponsored our plugin, which helped us continue working on it.
          </p>
        </div>
        
        {/* Scroll buttons */}
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Sponsors container with horizontal scroll */}
          <div 
            id="sponsors-container"
            className="flex overflow-x-auto scrollbar-hide gap-8 py-4 px-10 scroll-smooth snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0 w-48 snap-center group">
                <div className="relative mb-6">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  {sponsor.name}
                </h4>
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Optional: Add indicator dots to show position */}
        <div className="flex justify-center mt-6 gap-2">
          {sponsors.map((_, index) => (
            <button 
              key={index}
              className="h-2 w-2 rounded-full bg-gray-300 hover:bg-indigo-600 focus:outline-none"
              onClick={() => {
                const container = document.getElementById('sponsors-container');
                const width = container.querySelector('div').offsetWidth;
                container.scrollTo({ left: width * index, behavior: 'smooth' });
              }}
              aria-label={`Go to sponsor ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}