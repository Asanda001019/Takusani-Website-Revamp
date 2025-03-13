import React from 'react';

const AboutUs = () => {
  const features = [
    {
      icon: 'education',
      title: 'TRAINING',
      description: 'All our facilitators have practical experience of implementation of the knowledge framework they are transferring to learners. Programs are further enhanced to provide learners with additional information and skills to be applied and sustained within the client’s organisation.'
    },
    {
      icon: 'growth',
      title: 'ESD & SED SOLUTIONS',
      description: 'The extent to which enterprises carry out enterprise development initiatives intended to assist and accelerate the growth and sustainability of black enterprises.'
    },
    {
      icon: 'skills',
      title: 'SKILLS DEVELOPMENT',
      description: 'The extent to which enterprises carry out enterprise development initiatives intended to assist and accelerate the growth and sustainability of black enterprises.'
    },
    {
      icon: 'support',
      title: 'EMPLOYEE ASSISTANCE PROGRAMME',
      description: 'We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.'
    }
  ];

  // Function to render the appropriate icon based on the name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'education':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-500">
            <path d="M12 2L2 7h3v6h4V7h6v6h4V7h3L12 2z" />
            <path d="M2 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2" />
          </svg>
        );
      case 'growth':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-500">
            <path d="M12 6v6h6" />
            <path d="M18 12l6-6-6-6" />
            <path d="M6 18v-6H0" />
            <path d="M6 6L0 12l6 6" />
          </svg>
        );
      case 'skills':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-500">
            <path d="M12 2l2 7h7l-5 4 2 7-5-4-5 4 2-7-5-4h7z" />
          </svg>
        );
      case 'support':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-500">
            <path d="M3 12l9 9 9-9" />
            <path d="M12 3v18" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-16">
      {/* Heading for "Our Services" */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Our Services</h1>
        <p className="mt-4 text-lg text-gray-400">
          At every step of our process, we prioritize the user, ensuring that our products and services are designed with their needs in mind.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition duration-300 hover:bg-indigo-700">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-indigo-600 rounded-full">
                {renderIcon(feature.icon)}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
