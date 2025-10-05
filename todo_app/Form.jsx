import React, { useState } from "react";
import "./Formcss.css";
import Todo_App from "./Todo_App";
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1234") {
      setError("");
      setIsAuthenticated(true);
    } else {
      setError("The password you’ve entered is incorrect.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };
  if (isAuthenticated) {
    return <Todo_App value={username} />;
  }
  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <form
          onSubmit={handleSubmit}
          className={`login-form ${error ? "has-error" : ""} ${
            shake ? "shake" : ""
          }`}
        >
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className={error ? "input-error" : ""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            {error && (
              <p className="error-text">
                {error} <a href="#">Forgot Password?</a>
              </p>
            )}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Form;
