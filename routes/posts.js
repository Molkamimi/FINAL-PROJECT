const { response } = require("express");
const express = require("express");
const router = express.Router();
const postPub = require("../models/postPub");
const controllers = require("../controllers/post.controllers");
//test routing
router.get("/hello", (req, res) => {
  res.send("hello routing ");
});

//post pub
//get all posts
//get post by id
//delete post by id
//update post by id

//@POST method
//@desc post a pub
//@path:http://localhost:5000/api/post/add
//Params Body
router.post("/add", controllers.post);

//@Method Get
//@desc GET all posts
//@Path:http://localhost:5000/api/post/
router.get("/", async (req, res) => {
  try {
    const result = await postPub.find();
    res.send({ response: result, message: "geeting posts successfully " });
  } catch (error) {
    res.status(400).send({ message: "can not get posts" });
  }
});
//@Method Get
//@desc GET one post
//@Path:http://localhost:5000/api/post/:id
//@params id
router.get("/:id", async (req, res) => {
  try {
    const result = await postPub.findOne({ _id: req.params.id });
    res.send({ response: result, message: "geeting posts successfully " });
  } catch (error) {
    res.status(400).send({ message: "there is no post with this id" });
  }
});

//@method DELETE
//@desc delete one post by id
//@Path:http://localhost:5000/api/post/:id
//@Params id
router.delete("/:id", async (req, res) => {
  try {
    const result = await postPub.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "post deleted" })
      : res.send("there is no post with this id ");
  } catch (error) {
    res.send("there is no id ");
  }
});
//@method PUT
//@desc update a post by id
//@PATH http://localhost:5000/api/post/:id
//@Params id Body
router.put("/:id", async (req, res) => {
  try {
    const result = await postPub.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    res.send("updated ");
  } catch (error) {
    res.status(400).send("not updated");
  }
});
module.exports = router;
