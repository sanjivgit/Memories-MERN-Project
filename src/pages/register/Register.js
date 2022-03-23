import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="Register">
      <span className="Register_Title">Register</span>
      <form className="Register_Form">
        <label>Username</label>
        <input type="text" placeholder="Enter username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter password..." />
        <button className="Register_Button" type="submit">
          Register
        </button>
      </form>
      <button className="Login_Button" type="submit">
        Login
      </button>
    </div>
  );
}

export default Register;
