const postRoutes = require("./routes/posts");
const cors = require("cors");
const express = require("express");

const connectDB = require("./.config/dbConnect");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

//connect  DB
connectDB(),
  //routes

  app.use(express.json()),
  app.use("/user", require("./routes/user"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`the server is running on${PORT}`)
);
