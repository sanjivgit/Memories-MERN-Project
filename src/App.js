import React, { useContext } from "react";
import "./App.css";
import Home from "./components/home/Home";
import SinglePost from "./components/singlePost/SinglePost";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/settings" element={user ? <Setting /> : <Register />} />
          <Route path="/post/:postId" element={<SinglePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
