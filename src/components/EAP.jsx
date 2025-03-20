import React from 'react';

const EAP = () => {
  const employeeAssistanceSolutions = [
    'Employee Assistance Program Solutions',
    'Employee Financial Wellness Solutions',
    'Employee Wellness Solutions',
  ];

  // Updated color scheme with yellow and dark navy
  const colors = {
    primary: '#0a1128', // Dark navy - for primary elements
    secondary: '#1282a2', // Medium blue - complementary to primary
    accent: '#ffc857', // Bright yellow - for highlights and accents
    lightAccent: '#ffeecc', // Light yellow - for subtle highlights
    text: '#0a1128', // Dark navy - for text
    lightText: '#ffffff', // White - for text on dark backgrounds
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="mb-8" style={{ backgroundColor: colors.primary, padding: '2rem', borderRadius: '0.5rem' }}>
        <h1 className="text-3xl font-bold text-center mb-2" style={{ color: colors.accent }}>
          Employee Assistance Programme
        </h1>
        <h2 className="text-xl text-center" style={{ color: colors.lightText }}>
          Bespoke Health and Financial Solutions
        </h2>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8" style={{ borderTop: `4px solid ${colors.accent}` }}>
        <p className="mb-4 text-lg" style={{ color: colors.text }}>
          Our bespoke health and financial solutions are customised based on the unique requirements of each organisation. 
          We have the infrastructure and ability to impeccably provide services to employees across all nine provinces.
        </p>
        
        <p className="mb-4 text-lg" style={{ color: colors.text }}>
          We advocate prevention and early detection of chronic diseases of lifestyle, stress and depression, 
          rather than focusing solely on the treatment. We are specialists in Employee Financial Wellness solutions. 
          A healthy workforce can enhance productivity and reduce absenteeism.
        </p>
        
        <p className="text-lg" style={{ color: colors.text }}>
          Our Employee Assistance Program places a strong emphasis on ensuring a return on healthcare investment.
        </p>
      </div>

      {/* Solutions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-6 pb-2" style={{ color: colors.primary, borderBottom: `2px solid ${colors.accent}` }}>
          Employee Assistance Programme Solutions
        </h3>
        
        <ul className="space-y-4">
          {employeeAssistanceSolutions.map((service, index) => (
            <li 
              key={index} 
              className="flex items-center p-4 rounded-md transition-all duration-300 hover:bg-gray-50"
              style={{ backgroundColor: index % 2 === 0 ? colors.lightAccent : 'white' }}
            >
              <div 
                className="w-3 h-3 rounded-full mr-4" 
                style={{ backgroundColor: colors.accent, border: `1px solid ${colors.primary}` }}
              ></div>
              <span className="text-lg" style={{ color: colors.text }}>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EAP;