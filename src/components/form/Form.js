import React, { useContext, useState } from "react";
import "./form.css";
import { Typography, TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { Context } from "../../context/Context";
import axios from "../../axios";
import { Link } from "react-router-dom";

function Form() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [tags, setTags] = useState("#");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      tags,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="Form_Container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          sx={{ margin: "10px 0" }}
          name="Title"
          variant="outlined"
          label="Title"
          fullWidth
          focused
          placeholder="Enter Memories Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          sx={{ margin: "10px 0" }}
          multiline={true}
          rows={4}
          name="Message"
          variant="outlined"
          label="Message"
          fullWidth
          focused
          placeholder="Enter Message"
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          sx={{ margin: "10px 0" }}
          name="Tags"
          variant="outlined"
          label="Tags"
          fullWidth
          focused
          value={tags}
          placeholder="Enter tags"
          onChange={(e) => setTags(e.target.value)}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        {user ? (
          <Button type="submit" variant="container" size="large" fullWidth>
            Submit
          </Button>
        ) : (
          <Link to="/register" className="link">
            <span className="Form_CreateAccount">Create Your Account</span>
          </Link>
        )}
      </form>
    </div>
  );
}

export default Form;
