import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function Header() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  return (
    <nav className="app_bar">
      <div className="Logo">
        <h1>Memories</h1>
        <img src="/images/picture.png" alt="" />
      </div>
      {user ? (
        <Link className="link" to="/settings">
          <img
            className="profile"
            src={user.profilePic ? PF + user.profilePic : "/images/user.png"}
            alt=""
          />
        </Link>
      ) : (
        <Link className="link" to="/login">
          <span className="Login">Login</span>
        </Link>
      )}
    </nav>
  );
}

export default Header;
