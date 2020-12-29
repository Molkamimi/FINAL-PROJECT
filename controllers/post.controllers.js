const postPub = require("../models/postPub");

exports.post = async (req, res) => {
  try {
    const newpostPub = new postPub(req.body);

    const response = await newpostPub.save();
    res.send({ response: response, message: "post is saved" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "can not save it" });
  }
};
