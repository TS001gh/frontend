import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const fetchToken = async () => {
    const myToken = localStorage.getItem('token');
    if (!myToken) {
      return;
    }
    const data = await fetch(`${import.meta.env.VITE_API_KEY}/user/token`, {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    });

    const user = await data.json();
    setUserInfo(user);
    setToken(myToken);
  };
  useEffect(() => {
    fetchToken();
  }, [token]);
  return (
    <>
      <div className="app-wrapper">
        <Navbar
          token={token}
          setToken={setToken}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <Outlet context={[token, setToken, userInfo]} />
      </div>
    </>
  );
}

export default App;
