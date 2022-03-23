import React from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import "./home.css";

function Home() {
  return (
    <div className="Container">
      <div className="Container_wrap">
        <Header />
        <div className="Post_Form">
          <div className="Left_Post">
            <Posts />
            {/* <Posts />
            <Posts />
            <Posts /> */}
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
