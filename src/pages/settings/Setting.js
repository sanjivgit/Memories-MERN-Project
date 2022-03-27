import axios from "../../axios";
import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import { Context } from "../../context/Context";
import "./setting.css";

function Setting() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [updated, setUpdated] = useState(false);
  const [file, setFile] = useState("");
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATED_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      dispatch({ type: "UPDATED_SUCCESS", payload: res.data });
      setUpdated(true);
    } catch (err) {
      dispatch({ type: "UPDATED_FAILURE" });
    }
  };

  return (
    <div className="setting">
      <Header />
      <div className="setting_wrap">
        <div className="setting_header">
          <h1>Update Your Profile</h1>
          <span className="setting_account_delete" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <span className="account_logout" onClick={handleLogout}>
          Logout
        </span>
        <form className="setting_form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="setting_profileP">
            {file ? (
              <img
                className="profile_img"
                src={URL.createObjectURL(file)}
                alt=""
              />
            ) : (
              <img
                className="profile_img"
                src={
                  user.profilePic ? PF + user.profilePic : "/images/user.png"
                }
                alt=""
              />
            )}
            <label htmlFor="formIcon">
              <i className="settingsProfileIcon fa-solid fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="formIcon"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="setting_update">
            Update
          </button>
          {updated && (
            <span
              style={{ color: "teal", marginTop: "10px", alignSelf: "center" }}
            >
              Account has been updated!!!
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Setting;
