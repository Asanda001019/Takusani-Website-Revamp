import React from 'react';

const EAP = () => {
  const employeeAssistanceSolutions = [
    'Employee Assistance Program Solutions',
    'Employee Financial Wellness Solutions',
    'Employee Wellness Solutions',
  ];

  return (
    <div className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-16">
      {/* Paragraph Header */}
      <div className="text-center mb-16">
        <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
          Employee Assistance Programme
        </p>
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          Bespoke Health and Financial Solutions
        </h4>
        <p className="mt-4 text-lg text-gray-400">
          Our bespoke health and financial solutions are customised based on the unique requirements of each organisation. We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          We advocate prevention and early detection of chronic diseases of lifestyle, stress and depression, rather than focusing solely on the treatment. We are specialists in Employee Financial Wellness solutions. A healthy workforce can enhance productivity and reduce absenteeism.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          Our Employee Assistance Program places a strong emphasis on ensuring a return on healthcare investment.
        </p>
      </div>

      {/* Employee Assistance Solutions Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Solutions Column */}
        <div>
          <h5 className="text-xl font-extrabold text-indigo-500">Employee Assistance Programme Solutions</h5>
          <ul className="mt-4 space-y-3 font-medium">
            {employeeAssistanceSolutions.map((service, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 000-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="ml-3 leading-5 text-gray-600">{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EAP;
