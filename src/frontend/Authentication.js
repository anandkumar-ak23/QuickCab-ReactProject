

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For redirection

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track if the user is authenticated
  const navigate = useNavigate(); // Hook to redirect

  useEffect(() => {
    // Check if user is already authenticated by checking localStorage
    const usernameFromStorage = localStorage.getItem("uname");
    if (usernameFromStorage) {
      setIsAuthenticated(true);
      navigate("/profile"); // If authenticated, redirect to profile
    }
  }, [navigate]);

  // Toggle between login and signup forms
  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  // Handle the login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      if (response.data.success) {
        // Store the username and password in localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("uname", username);
        localStorage.setItem("name", name);
        localStorage.setItem("mobile", mobile);
        setIsAuthenticated(true); // Set the authenticated state to true
        setMessage("Login successful!");
        navigate("/home"); // Redirect to home page after login
      } else {
        setMessage(response.data.message || "Login failed");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error during login");
    }
  };

  // Handle the signup form submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        mobile,
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("email", email);
        localStorage.setItem("uname", username);
        localStorage.setItem("name", name);
        localStorage.setItem("mobile", mobile);

        alert("Signup successful! You can now log in.");
        setIsLogin(true); // Switch to login form after successful signup
      } else {
        setMessage(response.data.message || "Signup failed");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error during signup");
    }
  };

  return (
    <div className="container home-page">
      <h1>QuickCab</h1>
      <h1>Continue to explore more...</h1>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      {/* Login Form */}
      {isLogin ? (
        <div className="form-container">
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
              <button type="button" onClick={handleSignupClick}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Sign Up Form
        <div className="form-container">
          <form onSubmit={handleSignupSubmit}>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Sign Up</button>
              <button type="button" onClick={handleLoginClick}>
                Login
              </button>
            </div>
          </form>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Authentication;
