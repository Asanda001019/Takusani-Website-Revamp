import React from 'react';
import { FaEye, FaBullhorn, FaHandshake } from 'react-icons/fa'; // Import icons for vision, mission, values

const MainAbout = () => {
  return (
    <div className="bg-blue-500"> {/* Solid blue background for the entire section */}
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-blue-500" // Solid blue background for this section
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-100 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="block w-full font-bold text-3xl sm:text-4xl text-gray-100">
            TAKUSANI GROUP
          </h2>
          {/* Reduce margin between heading and paragraph */}
          <div className="my-4 flex justify-center">
            <p className="text-center font-small leading-relaxed tracking-wide text-gray-200 max-w-4xl mx-auto">
              Takusani Group offers goal-oriented services in training, skills development, employee wellness programs, and economic development consultancy. As a 100% black-owned Level 1 BBBEE Contributor, the company provides practical, relevant, and sustainable solutions. Takusani is a trusted partner in helping organizations achieve responsible, sustainable economic development through accredited training and Enterprise Supplier Development Consultancy Services. They focus on creating strategies and processes that align with business objectives, improve performance, and drive growth. Takusani works closely with clients to provide realistic solutions and build strong, cooperative partnerships to ensure good corporate governance and sustainable development.
            </p>
          </div>
        </div>

        {/* Cards section */}
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Vision Section */}
          <div className="rounded-md border border-neutral-800 bg-blue-600 p-8 text-center shadow-lg">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-blue-500">
              <FaEye className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-100 text-xl font-semibold">Vision</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-200">
              To be the leaders in Training, Skills Development, Enterprise Supplier Development and Socio Economic Development Consultancy and make a lasting positive economic impact in Africa and the rest of the world to the benefit of all.
            </p>
          </div>

          {/* Mission Section */}
          <div className="rounded-md border border-neutral-800 bg-blue-600 p-8 text-center shadow-lg">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-blue-500">
              <FaBullhorn className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-100 text-xl font-semibold">Mission</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-200">
              To develop and enhance the performance of Corporates, SMME`s, and Government Sector by creating new and existing opportunities through sustainable relationships focused on people, effective leadership, policy business goals. We enable our clients to build capacity in order to have an impactful role in the economy.
            </p>
          </div>

          {/* Values Section */}
          <div className="rounded-md border border-neutral-800 bg-blue-600 p-8 text-center shadow-lg">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-blue-500">
              <FaHandshake className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-100 text-xl font-semibold">Values</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-200">
              • Ethical
              <br />
              • Integrity
              <br />
              • Diversity
              <br />
              • Innovative
              <br />
              • Knowledgeable
              <br />
              • Learning & Skills Transfer
            </p>
          </div>
        </div>

        {/* Removed gradients for bottom elements */}
        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundColor: 'transparent',  // No gradient
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundColor: 'transparent', // No gradient
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
};

export default MainAbout;
