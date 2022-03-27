import React, { useEffect, useState } from "react";
import "./posts.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link, useLocation } from "react-router-dom";
import axios from "../../axios";

function Posts({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="Posts_Container">
      <img className="Posts_BackgroundImg" src={PF + post.photo} alt="" />
      <div className="Posts">
        <div className="Posts_Creater">
          <h3>{post.username}</h3>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div className="Circles">
          <div className="Circle"></div>
          <div className="Circle"></div>
          <div className="Circle"></div>
        </div>
      </div>
      <div className="Posts_Tags">
        {post.tags ? <span>{post.tags}</span> : <span>#</span>}
        <Link className="link" to={"/post/" + post._id}>
          <h2>{post.title}</h2>
        </Link>
        <p>{post.desc}</p>
      </div>
      <div className="Posts_Likes">
        <ThumbUpIcon fontSize="x-small" sx={{ color: "rgb(49, 49, 241)" }} />
        <span>LIKE 0</span>
      </div>
    </div>
  );
}

export default Posts;
