import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    const { user_email, user_password } = formData;

    if (user_email === "") {
      setError("Email Address Required*");
    } else if (!user_email.includes('@')) {
      setError("Please Enter Valid Email Address*");
    } else if (user_password === "") {
      setError("Password Field is required");
    } else if (user_password.length < 5) {
      setError("Password Length greater than 5*");
    } else {
      const getUserAllArr = JSON.parse(localStorage.getItem("userData")) || [];
      const userLogin = getUserAllArr.find(
        (user) => user.user_email === user_email && user.user_password === user_password
      );

      if (!userLogin) {
        setError("Invalid Details");
      } else {
        alert("User Login Successfully ...");
        localStorage.setItem("user_login", JSON.stringify(userLogin));
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-left">
        <h1>Welcome back!</h1>
        <p>
          Join our community of developers and start building your projects with ease. Your dashboard is just a few clicks away.
        </p>
        <div className="community-info">
          <img src="https://via.placeholder.com/50" alt="Community" />
          <span>More than 17k people joined us, it's your turn</span>
        </div>
      </div>
      <div className="sign-in-right">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <p>Don't have an account? <NavLink to="/signup">Sign up</NavLink></p>
          {error && <p className="error-message">{error}</p>}
          <input
            type="email"
            name="user_email"
            placeholder="Email address"
            value={formData.user_email}
            onChange={handleChange}
            required
            autoComplete='off'
          />
          <input
            type="password"
            name="user_password"
            placeholder="Password"
            value={formData.user_password}
            onChange={handleChange}
            required
            autoComplete='off'
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
