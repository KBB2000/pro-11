import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {

      const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

    const handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem("user", JSON.stringify(input))
      navigate("/login")
    }

  return (
    <div className="signup-container">
      <div className="welcome-section">
        <h1>Welcome to our community</h1>
        <p>
          Fuse helps developers to build organized and well-coded dashboards
          full of beautiful and rich modules. Join us and start building your
          application today.
        </p>
        <div className="community-stats">
          <img src="https://yt3.ggpht.com/OkTRl1qIqJjK1xfTGbstW43fYmF5VBq1xe8ZIV_-_78ofxny-A8U_9UTSRzqPHhAC62RiGLneQ=s88-c-k-c0x00ffffff-no-rj" alt="Profile 1" />
          <img src="https://yt3.ggpht.com/OkTRl1qIqJjK1xfTGbstW43fYmF5VBq1xe8ZIV_-_78ofxny-A8U_9UTSRzqPHhAC62RiGLneQ=s88-c-k-c0x00ffffff-no-rj" alt="Profile 2" />
          <img src="https://yt3.ggpht.com/OkTRl1qIqJjK1xfTGbstW43fYmF5VBq1xe8ZIV_-_78ofxny-A8U_9UTSRzqPHhAC62RiGLneQ=s88-c-k-c0x00ffffff-no-rj" alt="Profile 3" />
          <img src="https://yt3.ggpht.com/OkTRl1qIqJjK1xfTGbstW43fYmF5VBq1xe8ZIV_-_78ofxny-A8U_9UTSRzqPHhAC62RiGLneQ=s88-c-k-c0x00ffffff-no-rj" alt="Profile 4" />
          <span>More than 17k people joined us, it’s your turn</span>
        </div>
      </div>
      <div className="signup-section">
        <h2>Sign up</h2>
        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full name *</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email address *</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input type="password" placeholder="Enter your password"
             required
             name="password"
             value={input.password}
             onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})}
             />
          </div>
          <div className="form-group">
            <label>Contact *</label>
            <input type="password" placeholder="Enter your company name"
             name="contact"
             value={input.contact}
             onChange={(e) => setInput({...input, [e.target.name] : e.target.value,})}
             required
            />
          </div>
          <div className="form-group">
            <input type="checkbox" required />
            <label>
              I agree to the <a href="/terms">Terms of Service</a> and{" "}
              <a href="/privacy">Privacy Policy</a>
            </label>
          </div>
          <button type="submit">Create your free account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
