// export const createPost = async (req, res) => {
//   const post = req.body;
//   const newPost = new PostMessage(post);

//   try {
//     await newPost.save();
//     res.status(200).json(newPost);
//   } catch (error) {
//     res.status(500).json({ msg: error.msg });
//   }
// };
const Mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  //add a simple if check if the underscore id is really a mongoose object id to do
  if (!Mongoose.Types.ObjectectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatePost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatePost);
};
const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!Mongoose.Types.ObjectectId.isValid(id))
    await PostMessage.findByIdAndRemove(id);
  res.json({ msg: "Post deleted successfully" });
};
const likePost = async (req, res) => {
  const { id } = req.params;
  if (!Mongoose.Types.ObjectectId.isValid(id));
  const post = await PostMessage.findById(id);
  const updatePost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatePost);
};
