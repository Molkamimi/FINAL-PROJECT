const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postSchema = new schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: String,
    default: "0",
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});
module.exports = mongoose.model("post", postSchema);
