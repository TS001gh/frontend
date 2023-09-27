// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logout from './Logout';

function Navbar(props) {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const { setToken, userInfo, setUserInfo, token } = props;
  const navigate = useNavigate();
  return (
    <div className="navbar">
      {!userInfo ? (
        <>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <button
            onClick={() => {
              setUserInfo('');
              setToken('');
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            Logout
          </button>
          <Link to={'/home'}>Home</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
