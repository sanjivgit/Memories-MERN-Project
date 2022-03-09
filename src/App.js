import React from "react";
import "./App.css";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="Container">
      <div className="Container_wrap">
        <nav className="app_bar">
          <h1>Memories</h1>
          <img src="/images/picture.png" alt="" />
        </nav>
        <div className="Post_Form">
          <div className="Left_Post">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </div>
          <div className="Right_Form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
