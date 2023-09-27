/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [token, setToken] = useOutletContext();

  const handleRegister = async (event) => {
    event.preventDefault();
    const req = await fetch(`${import.meta.env.VITE_API_KEY}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName, password: password }),
    });

    const data = await req.json();

    if (data) {
      const { token } = data.data;
      localStorage.setItem('token', token);
      setToken(token);
      navigate('/home');
    }
  };

  return (
    <div>
      <form
        action=""
        method="POST"
        onSubmit={handleRegister}
        className="register-form"
      >
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your User Name Please"
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password Please"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
