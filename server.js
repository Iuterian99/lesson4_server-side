const express = require("express");
const app = express();
const port = 8000;

const customFs = require("./lib/fs");
const posts = new customFs("../module/posts.json");

app.get("/", (req, res) => {
  res.send("salom");
});

app.get("/posts", (req, res) => {
  const allPosts = JSON.parse(posts.read());
  res.status(200).json(allPosts);
});

app.listen(port, () => {
  console.log(`running at localhost://${port}`);
});
