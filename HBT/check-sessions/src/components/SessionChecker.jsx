// src/components/SessionChecker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SessionChecker = ({ onLogout }) => {
  const [message, setMessage] = useState('');

  const checkSession = async () => {
    try {
      const response = await axios.get('http://localhost:3000/protected', { withCredentials: true });
      setMessage(response.data.message);
    } catch (err) {
      setMessage('You are not logged in.');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3000/auth/logout', { withCredentials: true });
      setMessage('You have been logged out.');
      onLogout(false);
    } catch (err) {
      setMessage('Error logging out.');
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div>
      <h2>Session Checker</h2>
      <p>{message}</p>
      <button onClick={checkSession}>Check Session</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SessionChecker;
