import { useState } from "react";
import Todo_App from "./Todo_App";
import "./Formcss.css";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Password incorrect");
    }
  };

  if (isAuthenticated) {
    return <Todo_App value={formData.name} />;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="frm">
      <h2>Login Form</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
