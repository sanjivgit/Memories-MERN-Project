const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    tags: {
      type: String,
      required: false,
      default: "#",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", PostSchema);
