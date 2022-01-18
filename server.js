const express = require("express");
const app = express();
const port = 8000;

const customFs = require("./lib/fs");
const { verifyUser, signUser } = require("./lib/jwt");
const posts = new customFs("../module/posts.json");
const users = new customFs("../module/users.json");

app.post("/users", (req, res) => {
  const { userName, password } = req.body;
  const allUsers = JSON.parse(users.read());
  foundUser = allUsers.find(
    (e) => e.userName == userName && e.password == password
  );
  if (!foundUser) {
    return res.status(401).send({ message: "unothorized" });
  }
  res.status(200).json({
    token: signUser({ id: foundUser.id, userName: foundUser.userName }),
  });
});

app.get("/posts", (req, res) => {
  const allPosts = JSON.parse(posts.read());
  res.status(200).json(allPosts);
});

app.listen(port, () => {
  console.log(`running at localhost://${port}`);
});
