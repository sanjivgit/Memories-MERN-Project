import React from "react";
import "./header.css";

function Header() {
  const user = true;
  return (
    <nav className="app_bar">
      <div className="Logo">
        <h1>Memories</h1>
        <img src="/images/picture.png" alt="" />
      </div>
      {user ? (
        <img className="profile" src="/images/user.png" alt="" />
      ) : (
        <span className="Login">Login</span>
      )}
      {/* <span className="Logout">Logout</span> */}
    </nav>
  );
}

export default Header;
