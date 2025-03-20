import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Screenshot__141_-removebg-preview.png';

const LoginCMS = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Sign in with Firebase authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully:', userCredential.user);
      
      // Redirect to UsersCMS after successful login
      navigate('/CMS/UsersCMS');
    } catch (error) {
      console.error('Error signing in:', error);
      
      // Handle specific error codes
      if (error.code === 'auth/invalid-credential' || 
          error.code === 'auth/user-not-found' || 
          error.code === 'auth/wrong-password') {
        setError('Invalid email or password. Please try again.');
      } else if (error.code === 'auth/too-many-requests') {
        setError('Too many failed login attempts. Please try again later.');
      } else {
        setError('Failed to sign in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: 'white',
    position: 'relative',
    backgroundImage: "url('../../src/assets/signin bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const formContainerStyles = {
    width: '100%',
    maxWidth: '28rem',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.5rem',
    borderRadius: '16px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(209, 213, 219, 0.3)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease',
    margin: '20px',
  };

  const titleStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#2B2B2B',
    textAlign: 'center',
  };

  const subtitleStyles = {
    fontSize: '1.125rem',
    color: '#8D8D00',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const logoStyles = {
    width: '8rem',
    height: 'auto',
    marginBottom: '1.5rem',
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
  };

  const formStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const inputContainerStyles = {
    position: 'relative',
    width: '100%',
  };

  const inputStyles = {
    width: '100%',
    padding: '1rem',
    paddingLeft: '1.25rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
    color: '#333',
  };

  const focusedInputStyles = {
    ...inputStyles,
    outline: 'none',
    borderColor: '#007BFF',
    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)',
  };

  const buttonStyles = {
    width: '100%',
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: loading ? 'not-allowed' : 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    marginTop: '1rem',
    opacity: loading ? 0.7 : 1,
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyles = {
    ...buttonStyles,
    backgroundColor: '#0069d9',
    transform: 'translateY(-2px)',
  };

  const errorStyles = {
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: '1rem',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: 'rgba(231, 76, 60, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(231, 76, 60, 0.3)',
    fontSize: '0.9rem',
  };

  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <img
          src={logo}
          alt="School Logo"
          style={logoStyles}
        />

        <h3 style={titleStyles}>Welcome Back</h3>
        <p style={subtitleStyles}>Please sign in to continue</p>
        
        {error && <div style={errorStyles}>{error}</div>}
        
        <form onSubmit={handleSignIn} style={formStyles}>
          <div style={inputContainerStyles}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyles}
              required
            />
          </div>
          <div style={inputContainerStyles}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyles}
              required
            />
          </div>
          <button 
            type="submit" 
            style={buttonStyles}
            disabled={loading}
            onMouseOver={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor;
                e.currentTarget.style.transform = buttonHoverStyles.transform;
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor;
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCMS;