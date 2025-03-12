import React from 'react';
import { FaEye, FaBullhorn, FaHandshake } from 'react-icons/fa'; // Import icons for vision, mission, values

const MainAbout = () => {
  return (
    <div className="bg-black">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Build a Website That Your Customers Love
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Our templates allow for maximum customization. No technical skills required – our intuitive design tools
            let you get the job done easily.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* Vision Section */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style={{
                backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                borderColor: 'rgb(93, 79, 240)',
              }}
            >
              <FaEye className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-400">Vision</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Our vision is to empower businesses by creating beautiful, user-friendly websites with minimal effort.
            </p>
          </div>

          {/* Mission Section */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style={{
                backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                borderColor: 'rgb(93, 79, 240)',
              }}
            >
              <FaBullhorn className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-400">Mission</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Our mission is to provide innovative tools that simplify the process of creating stunning websites.
            </p>
          </div>

          {/* Values Section */}
          <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div
              className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
              style={{
                backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)',
                borderColor: 'rgb(93, 79, 240)',
              }}
            >
              <FaHandshake className="text-white text-3xl" />
            </div>
            <h3 className="mt-6 text-gray-400">Values</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              We value collaboration, transparency, and simplicity, always working towards providing the best for our
              clients.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
};

export default MainAbout;
