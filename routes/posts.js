const router = require("express").Router();
const Post = require("../models/Post.js");

////////////Creating Post//////////////

router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

////////////Updating Post//////////////

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(401).json(err);
      }
    } else {
      res.status(400).json("you can update only your post...");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

////////////Delete Post//////////////

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.username) {
      await post.delete();
      res.status(200).json("Post has been deleted succesfully...");
    } else {
      res.status(401).json("You can delete only your post...");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

////////////Get Post//////////////

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

////////////Get All Posts//////////////

router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let posts;
    if (username) {
      const post = await Post.find({ username: username });
      res.status(200).json(post);
    } else {
      const post = await Post.find();
      res.status(200).json(post);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
