import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navi=useNavigate();

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
    color: isDarkMode ? 'white' : 'black',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={containerStyle}>
      <h2>Settings</h2>

      <button style={buttonStyle} onClick={handleLoginLogout}>
       Logout
      </button>

      
        <button
          style={secondaryButtonStyle}
          onClick={() => navi('/AdminDashboard')}
        >
          Admin Panel
        </button>
    

      <button style={buttonStyle} onClick={handleThemeToggle}>
        Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})
      </button>
    </div>
  );
};

export default Settings;
