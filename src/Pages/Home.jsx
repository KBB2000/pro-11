import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className='home-container'>
      <header className='home-header'>
        <h1>Welcome</h1>
      </header>
      <main className='home-content'>
        {user ? (
          <div className='user-info'>
            <h2>Hello, {user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>Please log in to access your dashboard.</p>
        )}
        <button className='logout-button' onClick={handleLogout}>
          Logout
        </button>
      </main>
    </div>
  );
}

export default Home;
