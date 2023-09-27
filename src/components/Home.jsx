/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

function Home() {
  const [token, setToken, userInfo] = useOutletContext();

  const [data, setData] = useState();

  return (
    <div>
      {userInfo ? (
        <h1>Hello {userInfo?.data.username}</h1>
      ) : (
        <Link
          to={'/login'}
          style={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '10%',
            backgroundColor: 'beige',
          }}
        >
          Please login
        </Link>
      )}
    </div>
  );
}

export default Home;
