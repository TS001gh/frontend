/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setToken, setUserInfo }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUserInfo('');
    navigate('/');
  };
  return (
    <button type="submit" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
