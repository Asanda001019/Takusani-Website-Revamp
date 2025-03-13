import React from 'react';

const SkillsDevelopment = () => {
  const skillsDevelopmentServices = [
    'Learnership sourcing and implementation',
    'Skills committee training',
    'Skills audit coordination',
    'Skills committee establishment',
    'Quarterly skills reporting',
    'Annual training report submissions',
    'Workplace skills planning, development, and implementation',
    'SETA registration and administration solutions',
    'Disabilities integration and advisory',
  ];

  return (
    <div className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-16">
      {/* Paragraph Header */}
      <div className="text-center mb-16">
        <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
          Skills Development
        </p>
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          Empowering Your Workforce with Skills Development Initiatives
        </h4>
        <p className="mt-4 text-lg text-gray-400">
          The Skills Development element measures the extent to which employers carry out initiatives designed to develop the competencies of employees, both internally and externally, in line with the Skills Development Act of 1998, as amended. At Takusani Group, we espouse the following services to enhance employee development and organizational success.
        </p>
      </div>

      {/* Skills Development Services Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills Development Column */}
        <div>
          <h5 className="text-xl font-extrabold text-indigo-500">Skills Development Services</h5>
          <ul className="mt-4 space-y-3 font-medium">
            {skillsDevelopmentServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
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

export default SkillsDevelopment;
