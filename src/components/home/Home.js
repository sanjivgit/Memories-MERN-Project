import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../form/Form";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import "./home.css";

function Home() {
  const [post, setPost] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/" + search);
      setPost(res.data);
    };
    fetchPost();
  }, [search]);

  return (
    <div className="Container">
      <div className="Container_wrap">
        <Header />
        <div className="Post_Form">
          <div className="Left_Post">
            {post.map((posts) => (
              <Posts key={posts._id} post={posts} />
            ))}
          </div>
          <div className="Right_Form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
