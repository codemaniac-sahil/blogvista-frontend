import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { NavLink } from "react-router-dom";
import "../styles/signup.css";

function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit=async()=>{
    
  }
  return (
    <>
      <Navbar />
      <div className="signup-page">
        <div className="signup-page-heading">
          <h1>Welcome back!</h1>
          <p>
            Don't have an account <NavLink to="/signup">Signup</NavLink>
          </p>
        </div>
        <div className="signup-form">
          <div className="signup-form-input">
            <p>Email</p>
            <input
              type="text"
              placeholder="Johndoe@example.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup-form-input">
            <p>Password</p>
            <input
              type="password"
              placeholder="......."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button-class">
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
