import React from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  return (
    <div className="login">
      <img src={assets.logo_big} alt="logo" />

      <form className="login-from">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="User Name"
          required
          className="from-input"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="from-input"
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="from-input"
        />

        <button type="submit">Sign Up</button>

        <div className="login-term">
          <input type="checkbox" name="" id="" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
