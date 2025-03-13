import React from 'react';

const TrainingPrograms = () => {
  const accreditedTrainingList = [
    'New Venture Creation NQF Level 2',
    'New Venture Creation NQF Level 4',
    'Project Management NQF Level 4',
    'Project Management NQF Level 5',
    'Real Estate NQF Level 4',
    'Business Administration NQF Level 2',
    'Business Administration NQF Level 4',
    'Generic Management NQF Level 3',
    'Generic Management NQF Level 4',
    'End User Computing NQF 2',
    'Contact Centre NQF Level 2',
    'Contact Centre NQF Level 3',
    'Contact Centre NQF Level 4',
  ];

  const softSkillsTrainingList = [
    'Soft Skills Training',
    'Financial Skills',
    'Finance for Non-Financial Managers',
    'Conflict Management',
    'Emotional Intelligence',
    'Customer Care',
    'Leadership and Supervisory Skills',
    'Business Etiquette',
    'Negotiation Skills',
    'Communication Skills',
    'Problem Solving',
    'Assertiveness Training',
    'Stress Management',
    'Telesales/ Telemarketing',
    'Personnel Planning',
  ];

  return (
    <div className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-16">
      {/* Paragraph Header */}
      <div className="text-center mb-16">
        <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
          Our Training Programmes
        </p>
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          Empowering You with Knowledge and Skills
        </h4>
        <p className="mt-4 text-lg text-gray-400">
          We offer a range of accredited and soft skills training programmes that are designed to meet the needs of your organization. These programmes are crafted to improve the capabilities of your workforce and ensure long-term success.
        </p>
      </div>

      {/* Training Programmes Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Accredited Training Column */}
        <div>
          <h5 className="text-xl font-extrabold text-indigo-500">Accredited Training</h5>
          <ul className="mt-4 space-y-3 font-medium">
            {accreditedTrainingList.map((program, index) => (
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
                <p className="ml-3 leading-5 text-gray-600">{program}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills Training Column */}
        <div>
          <h5 className="text-xl font-extrabold text-indigo-500">Soft Skills Training</h5>
          <ul className="mt-4 space-y-3 font-medium">
            {softSkillsTrainingList.map((program, index) => (
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
                <p className="ml-3 leading-5 text-gray-600">{program}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;
