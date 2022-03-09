import React from "react";
import "./posts.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Posts() {
  return (
    <div className="Posts_Container">
      <img className="Posts_BackgroundImg" src="/images/posts-bg.jpg" alt="" />
      <div className="Posts">
        <div className="Posts_Creater">
          <h3>Sanjiv</h3>
          <span>3 month ago</span>
        </div>
        <div className="Circles">
          <div className="Circle"></div>
          <div className="Circle"></div>
          <div className="Circle"></div>
        </div>
      </div>
      <div className="Posts_Tags">
        <span>#sanjiv #kumar</span>
        <h2>This is my first Memories</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia vero
          aliquam doloribus quae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil iste aliquam culpa repudiandae! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ipsa eligendi, suscipit
          quo, fuga dolores beatae consectetur aut quas quaerat nesciunt quod,
          reiciendis voluptas. Necessitatibus explicabo mollitia aliquid,
          provident hic voluptatem, dignissimos eos delectus facere dicta illo
          culpa beatae veniam sapiente distinctio quibusdam, tempore minus nisi
          qui vero quia at excepturi!
        </p>
      </div>
      <div className="Like_Delete">
        <div className="Posts_LikesDelete">
          <ThumbUpIcon fontSize="x-small" sx={{ color: "rgb(49, 49, 241)" }} />
          <span>LIKE 0</span>
        </div>
        <div className="Posts_LikesDelete">
          <DeleteIcon fontSize="x-small" sx={{ color: "rgb(49, 49, 241)" }} />
          <span>DELETE</span>
        </div>
      </div>
    </div>
  );
}

export default Posts;
