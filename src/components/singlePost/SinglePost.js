import React from "react";
import Header from "../header/Header";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <Header />
      <div className="singlePostWrap">
        <img className="singlePost_Img" src="/images/bg-memories.jpg" alt="" />

        <h2 className="singlePost_Title">
          Hello guys!!!
          <div className="singlePost_Update">
            <i className="singlePost_Edit fa-solid fa-pen-to-square"></i>
            <i className="singlePost_Delete fa-solid fa-trash-can"></i>
          </div>
        </h2>
        <div className="singlePost_About">
          <span>
            Author: <b>Sanjiv</b>
          </span>
          <span>2 march</span>
        </div>
        <p className="singlePost_Desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          officiis maiores accusantium excepturi nobis quod, dolor omnis
          mollitia blanditiis ratione eligendi, nihil voluptas ex, eum beatae
          atque consectetur laborum! Aliquid. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia, sequi? Pariatur repellendus
          temporibus eius quasi harum molestias qui laboriosam adipisci rem
          iure, alias enim labore? Ipsam quam facere esse quos.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
