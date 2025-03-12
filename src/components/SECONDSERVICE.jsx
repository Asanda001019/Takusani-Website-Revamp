import React from 'react';

const Features = () => {
  return (
    <div className="lg:ml-6 lg:col-start-2 lg:max-w-2xl">
      <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
        Securing your API
      </p>
      <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
        Powerful Security Options
      </h4>

      <ul className="mt-8 space-y-3 font-medium">
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">
            Secure every API endpoint with our built-in authentication.
          </p>
        </li>
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">
            Restrict capabilities using Token-Based Access Controls.
          </p>
        </li>
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">
            Easily manage API Keys.
          </p>
        </li>
        <li className="flex items-start lg:col-span-1">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="ml-3 leading-5 text-gray-600">
            Custom validations to validate input coming to your API.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Features;
