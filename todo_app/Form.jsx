import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Formcss.module.css";
const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Routing flow no longer needs local isAuthenticated state
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "1234") {
      setError("");
      try {
        sessionStorage.setItem('auth', 'true');
        sessionStorage.setItem('username', username);
      } catch {
        // sessionStorage might be unavailable; ignore persist errors
      }
      navigate('/todo', { state: { username } });
    } else {
      setError("The password you’ve entered is incorrect.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };
  return (
    <div className={styles["login-body"]}>
      <div className={styles["login-container"]}>
        <h2 className={styles["login-title"]}>Welcome Back</h2>
        <form
          onSubmit={handleSubmit}
          className={`${styles["login-form"]} ${error ? styles["has-error"] : ""} ${
            shake ? styles["shake"] : ""
          }`}
        >
          <div className={styles["input-group"]}>
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
          <div className={styles["input-group"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className={error ? styles["input-error"] : ""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            {error && (
              <p className={styles["error-text"]}>
                {error} <a href="#">Forgot Password?</a>
              </p>
            )}
          </div>
          <button type="submit" className={styles["login-button"]}>
            Login
          </button>
        </form>
        <p className={styles["signup-text"]}>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Form;
