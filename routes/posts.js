const express = require("express");
const getPosts = require("../controllers/posts");
const PostMessage = require("../models/postMessage");
const router = express.Router();
const updatePost = require("../controllers/posts");
const deletePost = require("../controllers/posts");
router.get("/posts", async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    return res.status(404).json({ msg: error.msg });
  }
});
router.post("/", async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
  } catch (error) {
    res.status(404).json({ message: error.msg });
  }
});

//update functionality
router.patch("/:id");
//delete functionality
router.delete("/:id");

module.exports = router;
