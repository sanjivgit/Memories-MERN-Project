import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "../../axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="Register">
      <span className="Register_Title">Register</span>
      <form className="Register_Form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="Register_Button" type="submit">
          Register
        </button>
      </form>
      <Link to="/login" className="link">
        <button className="Login_Button">Login</button>
      </Link>

      {error && (
        <span style={{ color: "tomato", marginTop: "10px" }}>
          Something Went Wrong!!!!
        </span>
      )}
    </div>
  );
}

export default Register;
