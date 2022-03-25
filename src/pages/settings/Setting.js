import React from "react";
import Header from "../../components/header/Header";
import "./setting.css";

function Setting() {
  return (
    <div className="setting">
      <Header />
      <div className="setting_wrap">
        <div className="setting_header">
          <h1>Update Your Profile</h1>
          <span className="setting_account_delete">Delete Account</span>
        </div>
        <form className="setting_form">
          <label>Profile Picture</label>
          <div className="setting_profileP">
            <img className="profile_img" src="/images/user.png" alt="" />
            <label htmlFor="formIcon">
              <i className="settingsProfileIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="formIcon" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="username" />
          <label>Email</label>
          <input type="email" placeholder="username@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button type="submit" className="setting_update">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Setting;
