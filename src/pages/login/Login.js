import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="Login_Title">Login</span>
      <form className="Login_Form">
        <label>Username</label>
        <input type="text" placeholder="Enter username..." />
        <label>Password</label>
        <input type="text" placeholder="Enter password..." />
        <button className="Login_Button" type="submit">
          Login
        </button>
      </form>
      <button className="Register_Button" type="submit">
        Register
      </button>
    </div>
  );
}

export default Login;
