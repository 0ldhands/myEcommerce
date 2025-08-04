import React, { useState } from 'react';

const Settings = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    notifications: true,
    darkMode: false,
  });

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#007BFF',
    textAlign: 'center',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
  };

  const checkboxContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const checkboxLabel = {
    fontSize: '14px',
    color: '#333',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Account Settings</h2>

      <div>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <div style={checkboxContainer}>
          <span style={checkboxLabel}>Enable Notifications</span>
          <input
            type="checkbox"
            name="notifications"
            checked={user.notifications}
            onChange={handleChange}
          />
        </div>

        <div style={checkboxContainer}>
          <span style={checkboxLabel}>Dark Mode</span>
          <input
            type="checkbox"
            name="darkMode"
            checked={user.darkMode}
            onChange={handleChange}
          />
        </div>

        <button style={buttonStyle}>Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
