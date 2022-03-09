import React from "react";
import "./form.css";
import { Typography, TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";

function Form() {
  return (
    <div className="Form_Container">
      <form autoComplete="off" noValidate action="">
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          sx={{ margin: "10px 0" }}
          name="Creater"
          variant="outlined"
          label="Creater"
          fullWidth
          focused
          placeholder="Enter Creater Name"
        />
        <TextField
          sx={{ margin: "10px 0" }}
          name="Title"
          variant="outlined"
          label="Title"
          fullWidth
          focused
          placeholder="Enter Memories Title"
        />
        <TextField
          sx={{ margin: "10px 0" }}
          name="Message"
          variant="outlined"
          label="Message"
          fullWidth
          focused
          placeholder="Enter Message"
        />
        <TextField
          sx={{ margin: "10px 0" }}
          name="Tags"
          variant="outlined"
          label="Tags"
          fullWidth
          focused
          placeholder="Enter tags"
        />
        <FileBase type="file" multiple={false} />
        <Button type="submit" variant="container" size="large" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
