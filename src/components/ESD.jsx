import React from 'react';

const ESD = () => {
  const enterpriseSupplierDevelopmentServices = [
    'ED advisory',
    'SMME beneficiary identification',
    'SMME project planning and development',
    'SMME Accelerator Program',
    'Supplier Development',
  ];

  const supplierDevelopmentServices = [
    'Data collection of suppliers’ B-BBEE certificates and analysis',
    'Documentation inspection in line with verification guidelines',
    'Identification, vetting and implementation of outsourced suppliers',
    'Procurement advisory',
    'SMME beneficiary identification',
    'SMME project planning and development',
    'Supplier development management',
    'SME support',
    'Innovation management and product development strategies',
    'Strategic business formulation and commercialisation of ideas',
    'Fundraising, bid management and advisory services for SMEs',
  ];

  const businessDevelopmentServices = [
    'Business plans',
    'Business profiles',
    'Sales and marketing advisory and training',
    'Financial management advisory and training',
    'Monitoring, evaluation and reporting',
  ];

  const socioEconomicDevelopmentServices = [
    'SED advisory',
    'SED beneficiary identification',
    'SED project planning and development',
  ];

  return (
    <div className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-16">
      {/* Paragraph Header */}
      <div className="text-center mb-16">
        <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
          Enterprise Supplier Development & Socio Economic Development Solutions
        </p>
        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
          Empowering Enterprises for Sustainable Growth
        </h4>
        <p className="mt-4 text-lg text-gray-400">
          This element measures the extent to which enterprises carry out enterprise development initiatives intended to assist and accelerate the growth and sustainability of black enterprises. 1% of Net Profit After Tax is committed to Economic Development spend.
        </p>
      </div>

      {/* Enterprise Supplier Development & Socio Economic Development Services Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Enterprise Development Column */}
        <div>
          <h5 className="text-xl font-extrabold text-indigo-500">Enterprise Development Solutions</h5>
          <ul className="mt-4 space-y-3 font-medium">
            {enterpriseSupplierDevelopmentServices.map((service, index) => (
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

        {/* Supplier Development Column */}
        <div>
          <h5 className="text-xl font-extrabold text-indigo-500">Supplier Development Solutions</h5>
          <ul className="mt-4 space-y-3 font-medium">
            {supplierDevelopmentServices.map((service, index) => (
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

      {/* Business Development Column */}
      <div className="mt-8">
        <h5 className="text-xl font-extrabold text-indigo-500">Business Development Services</h5>
        <ul className="mt-4 space-y-3 font-medium">
          {businessDevelopmentServices.map((service, index) => (
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

      {/* Socio-Economic Development Column */}
      <div className="mt-8">
        <h5 className="text-xl font-extrabold text-indigo-500">Socio-Economic Development Services</h5>
        <ul className="mt-4 space-y-3 font-medium">
          {socioEconomicDevelopmentServices.map((service, index) => (
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
  );
};

export default ESD;
