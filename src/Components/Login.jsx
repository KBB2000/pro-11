import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (
      loggedUser &&
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", "true"); 
      navigate("/home");
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Log In</button>
        <div className="signup-link">
          <p>
            Don't have an account? <NavLink to="/signup">Register Here</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
