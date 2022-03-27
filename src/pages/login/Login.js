import axios from "../../axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Context } from "../../context/Context";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="Login_Title">Login</span>
      <form className="Login_Form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter username..." ref={userRef} />
        <label>Password</label>
        <input type="text" placeholder="Enter password..." ref={passwordRef} />
        <button className="Login_Buttons" type="submit">
          Login
        </button>
      </form>
      <Link to="/register" className="link">
        <button className="Register_Buttons">Register</button>
      </Link>
    </div>
  );
}

export default Login;
