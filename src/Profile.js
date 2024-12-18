
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axios from "axios";
import Navbar from "./frontend/Navbar";
import Header from "./frontend/Header";
import Footer from './frontend/Footer';
const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [logoutMessage, setLogoutMessage] = useState(""); // State to store logout message
  const navigate = useNavigate(); // Hook to navigate to different routes

  useEffect(() => {
    // Fetch data from localStorage and set it to user state
    const username = localStorage.getItem("uname");
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const mobile = localStorage.getItem("mobile");
    const password = localStorage.getItem("pwd");

    if (username) {
      setUser({
        username,
        name,
        email,
        mobile,
        password, // Password should not be stored in localStorage for security, avoid updating password this way
      });
    } else {
      alert("User not logged in");
            navigate("/auth");
      
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the updated data to the backend (Register logic)
    axios
      .put(`http://localhost:5000/user/${user.username}`, user)
      .then((response) => {
        setSuccessMessage("Profile updated successfully!");
        alert("Profile updated successfully!");
        // You can choose to update localStorage or sessionStorage here if needed.
        localStorage.setItem("name", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem("mobile", user.mobile);
        // Don't store the password in localStorage or sessionStorage
      })
      .catch((error) => {
        alert("Error updating profile");
      });
  };

  const handleLogout = () => {
    // Delete the username and other details from localStorage to log out
    localStorage.removeItem("uname");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("pwd");

    // Display logout message
    setLogoutMessage("You have logged out successfully.");

    // Redirect to the Authentication page after a short delay
    setTimeout(() => {
      navigate("/auth");
    }, 1500); // Redirect after 1.5 seconds to show the logout message
  };

  return (
    <>
      <Header />
      <div className="profile-page">
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {logoutMessage && <p className="logout-message">{logoutMessage}</p>}

        <div className="profile-container">
          <h2>Profile</h2>
          <form onSubmit={handleSubmit}>
            <table className="profile-table">
              <tbody>
                {/* Username is not editable */}
                <tr>
                  <td>Username</td>
                  <td>
                    <input
                      type="text"
                      value={user.username}
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>
                    <input
                      type="text"
                      name="mobile"
                      value={user.mobile}
                      onChange={handleChange}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  {/* <td>Password</td>
                  <td>
                  <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </td> */}
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;