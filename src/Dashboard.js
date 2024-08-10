import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user_login")) || {};

  return (
    <div className="dashboard-container">
      <h1>Welcome to your Dashboard</h1>
      <p><strong>First Name : </strong>{user.user_firstname}</p>
      <p><strong>Email: </strong>{user.user_email}</p>
      <NavLink to="/login"><button>Logout</button></NavLink>
    </div>
  );
};

export default Dashboard;
