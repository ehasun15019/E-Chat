import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="logo" className="logo" />

      <form className="login-from">
        <h2>{currentState}</h2>

        {/* logic for signup / login */}
        {currentState === "Sign Up" ? (
          <input
            type="text"
            placeholder="User Name"
            required
            className="from-input"
          />
        ) : null}

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

        <button type="submit">
          {currentState === "Sign Up" ? "Create an account" : "Login now"}
        </button>

        <div className="login-term">
          <input type="checkbox" name="" id="" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>

        <div className="login-forgot">
          {/* logic for "have and account" & "create an account" */}
          {currentState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account{" "}
              <span
                onClick={() => {
                  setCurrentState("Login");
                }}
              >
                click here
              </span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span
                onClick={() => {
                  setCurrentState("Sign Up");
                }}
              >
                click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
