import React, { useContext, useState } from "react";
import Navbar from "../component/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/signup.css";
import axios from "axios";
import { UserContext } from "../App";

/**
 * Renders the login page. It is used to log in a user to Samsung. You need to be logged in before using this page.
 *
 *
 * @return { JSX } The login page as a React element. Note that this page does not render the user's page
 */
function Login() {
  const { dispatch } = useContext(UserContext);
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = async () => {
    await axios.post(
      "https://blog-vista.centralindia.cloudapp.azure.com/login",
      {
        email: Email,
        password: password,
      },
      { withCredentials: true }
    );
    dispatch({ type: "USER", payload: true });
    navigate("/dashboard");
  };
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
            <button onClick={handleOnSubmit}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
