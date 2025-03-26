import React from 'react';
import { Link } from 'react-router-dom';

const Nopage = () => {
  // Inline CSS styles
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'navy',
    textAlign: 'center',
  };

  const contentStyle = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '100px',
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: '20px',
  };

  const messageStyle = {
    fontSize: '20px',
    color: '#333',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    fontSize: '18px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: 'nayv',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>404</h1>
        <p style={messageStyle}>Oops! The page you’re looking for doesn’t exist.</p>
        <Link 
          to="/" 
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} 
          onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Nopage;
