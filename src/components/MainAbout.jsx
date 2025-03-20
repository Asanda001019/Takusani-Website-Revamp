import React from 'react';
import { FaEye, FaBullhorn, FaHandshake } from 'react-icons/fa';

const MainAbout = () => {
  return (
    <div className="bg-gray-100">
      <section
        id="features"
        className="relative block px-4 py-16 md:py-24 lg:py-32 md:px-10 border-t border-b border-neutral-900"
        style={{ backgroundColor: 'rgb(11, 18, 75)' }}
      >
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-12 md:mb-16 text-center">
            {/* <span className="inline-block font-bold py-2 px-6 bg-indigo-300 rounded-full text-lg md:text-xl text-indigo-600 shadow-md transform hover:scale-105 transition-transform duration-300">
              WHY CHOOSE US
            </span> */}
          </div>
          
          <h2 className="block w-full font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-300 mb-6 leading-tight">
            ABOUT TAKUSANI GROUP
          </h2>
          
          <div className="my-8 flex justify-center">
            <p className="text-center font-normal leading-relaxed tracking-wide text-gray-100 max-w-4xl mx-auto text-base md:text-lg px-4">
              Takusani Group offers goal-oriented services in training, skills development, employee wellness programs, and economic development consultancy. As a 100% black-owned Level 1 BBBEE Contributor, the company provides practical, relevant, and sustainable solutions. Takusani is a trusted partner in helping organizations achieve responsible, sustainable economic development through accredited training and Enterprise Supplier Development Consultancy Services. They focus on creating strategies and processes that align with business objectives, improve performance, and drive growth. Takusani works closely with clients to provide realistic solutions and build strong, cooperative partnerships to ensure good corporate governance and sustainable development.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-6 md:gap-8 lg:gap-10 pt-8 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
          {/* Vision Section */}
          <div className="rounded-lg border border-neutral-800 bg-gray-200 p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-300 mb-4"
            style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
              <FaEye className="text-yellow-300 text-3xl" />
            </div>
            <h3 className="mt-4 text-black-100 text-xl md:text-2xl font-bold mb-4">Vision</h3>
            <div className="w-16 h-1 bg-yellow-300 mx-auto mb-4"></div>
            <p className="font-normal leading-relaxed tracking-wide text-black-500 flex-grow">
              To be the leaders in Training, Skills Development, Enterprise Supplier Development and Socio Economic Development Consultancy and make a lasting positive economic impact in Africa and the rest of the world to the benefit of all.
            </p>
          </div>

          {/* Mission Section */}
          <div className="rounded-lg border border-neutral-800 bg-gray-100 p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-300 mb-4"
            style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
              <FaBullhorn className="text-yellow-300 text-3xl" />
            </div>
            <h3 className="mt-4 text-black-100 text-xl md:text-2xl font-bold mb-4">Mission</h3>
            <div className="w-16 h-1 bg-yellow-300 mx-auto mb-4"></div>
            <p className="font-normal leading-relaxed tracking-wide text-black-500 flex-grow">
              To develop and enhance the performance of Corporates, SMMEs, and Government Sector by creating new and existing opportunities through sustainable relationships focused on people, effective leadership, policy business goals. We enable our clients to build capacity in order to have an impactful role in the economy.
            </p>
          </div>

          {/* Values Section */}
          <div className="rounded-lg border border-neutral-800 bg-gray-200 p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-300 mb-4"
            style={{ backgroundColor: 'rgb(11, 18, 75)' }}>
              <FaHandshake className="text-yellow-300 text-3xl" />
            </div>
            <h3 className="mt-4 text-black-100 text-xl md:text-2xl font-bold mb-4">Values</h3>
            <div className="w-16 h-1 bg-yellow-300 mx-auto mb-4"></div>
            <ul className="list-none font-normal leading-relaxed tracking-wide text-black-500 flex-grow">
              <li className="mb-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                Ethical
              </li>
              <li className="mb-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                Integrity
              </li>
              <li className="mb-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                Diversity
              </li>
              <li className="mb-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                Innovative
              </li>
              <li className="mb-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                Knowledgeable
              </li>
              <li className="mb-2 flex items-center justify-center">
                <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                Learning & Skills Transfer
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
};

export default MainAbout;