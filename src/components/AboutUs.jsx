import React from 'react';


const AboutUs = () => {
  const features = [
    {
      icon: 'clock',
      title: 'Result',
      description: 'Accurate results are our top priority, ensuring you always have reliable information at your fingertips.'
    },
    {
      icon: 'thumbs-up',
      title: 'Quality',
      description: 'We are committed to providing high-quality products and services that exceed your expectations.'
    },
    {
      icon: 'printer',
      title: 'Product',
      description: 'Experience the difference of our feature-rich product that offers everything you requires and many more'
    },
    {
      icon: 'bar-chart',
      title: 'Sales',
      description: 'Experience the difference of our personalized sales approach, where you are always our top priority.'
    },
    {
      icon: 'sitemap',
      title: 'Onboarding',
      description: 'Our onboarding process is designed to be simple and intuitive, so you can start using our platform right away'
    },
    {
      icon: 'headset',
      title: 'Support',
      description: 'Our commitment to exceptional support ensures that you receive the assistance you need, whenever you need it'
    }
  ];

  // Function to render the appropriate icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case 'thumbs-up':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        );
      case 'printer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
        );
      case 'bar-chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        );
      case 'sitemap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="3"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="4.93" y1="17.07" x2="9.17" y2="12.83"></line>
            <line x1="19.07" y1="17.07" x2="14.83" y2="12.83"></line>
            <circle cx="5" cy="19" r="3"></circle>
            <circle cx="19" cy="19" r="3"></circle>
          </svg>
        );
      case 'headset':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="feature-container">
      <div className="feature-header">
        <h1>Every feature designed for the user</h1>
        <p className="feature-subtitle">
          At every step of our process, we prioritize the user, ensuring that our products and
          services are designed with their needs in mind.
        </p>
      </div>
      
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{renderIcon(feature.icon)}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;