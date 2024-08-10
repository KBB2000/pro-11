import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_email: "",
    user_password: "",
    user_phone: "",
  });

  const navigate = useNavigate();
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("userData")) || []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    const { user_firstname, user_email, user_password, user_phone } = formData;

    if (user_firstname === "") {
      alert("Name Field Required*");
    } else if (user_email === "") {
      alert("Email Address Required*");
    } else if (!user_email.includes('@')) {
      alert("Please Enter Valid Email Address*");
    } else if (user_password === "") {
      alert("Password Field is required");
    } else if (user_password.length < 5) {
      alert("Password Length greater than 5*");
    } else if (user_phone.length < 10) {
      alert("Contact num. length must be 10 digits");
    } else {
      const newUser = { user_firstname, user_email, user_password, user_phone };
      const updatedData = [...data, newUser];
      localStorage.setItem("userData", JSON.stringify(updatedData));
      setData(updatedData);
      navigate("/login");
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-left">
        <h1>Welcome to our community</h1>
        <p>
          Fuse helps developers to build organized and well-coded dashboards full of beautiful and rich modules. Join us and start building your application today.
        </p>
        <div className="community-info">
          <img src="https://via.placeholder.com/150" alt="Community" />
          <span>More than 17k people joined us, it's your turn</span>
        </div>
      </div>
      <div className="sign-up-right">
        <form className="sign-up-form" onSubmit={addData}>
          <h2>Sign up</h2>
          <p>Already have an account? <NavLink to="/login">Sign in</NavLink></p>
          <input
            type="text"
            name="user_firstname"
            placeholder="Full name"
            value={formData.user_firstname}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email address"
            value={formData.user_email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="password"
            name="user_password"
            placeholder="Password"
            value={formData.user_password}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="phone"
            name="user_phone"
            placeholder="Phone"
            value={formData.user_phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <div className="terms flex">
            <input type="checkbox" required />
            <label>
              I agree to the <NavLink to="/terms">Terms of Service</NavLink> and{" "}
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </label>
          </div>
          <button type="submit">Create your free account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
