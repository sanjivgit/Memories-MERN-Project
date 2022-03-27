import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../header/Header";
import "./singlePost.css";
import { Context } from "../../context/Context";

function SinglePost() {
  const { user } = useContext(Context);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + postId);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + postId, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put("/posts/" + postId, {
        username: user.username,
        title,
        desc,
      });
      res.data && window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <Header />
      <div className="singlePostWrap">
        <img className="singlePost_Img" src={PF + post.photo} alt="" />

        {updateMode ? (
          <input
            type="text"
            className="updateMode_Input"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h2 className="singlePost_Title">
            {post.title}
            {user.username === post.username && (
              <div className="singlePost_Update">
                <i
                  className="singlePost_Edit fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePost_Delete fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h2>
        )}
        <div className="singlePost_About">
          <Link to={`/?user=${user.username}`} className="link">
            <span>
              Author: <b>{post.username}</b>
            </span>
          </Link>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            className="updateMode_textarea"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePost_Desc">{post.desc}</p>
        )}
      </div>
      {updateMode && (
        <button className="updateMode_Button" onClick={handleUpdate}>
          Update
        </button>
      )}
    </div>
  );
}

export default SinglePost;
