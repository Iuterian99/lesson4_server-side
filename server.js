const express = require("express");
const app = express();
const port = 8000;

const customFs = require("./lib/fs");
const posts = new customFs("../module/posts.json");
const users = new customFs("../module/users.json");

app.post("/users", (req, res) => {
  // const { name, password } = req.body;
  const allUsers = JSON.parse(users.read());
  console.log(allUsers);
  res.send("users");
});

app.get("/posts", (req, res) => {
  const allPosts = JSON.parse(posts.read());
  res.status(200).json(allPosts);
});

app.listen(port, () => {
  console.log(`running at localhost://${port}`);
});
