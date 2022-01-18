const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(express.json())
app.use(cors())

const loginController = require("./controllers/login")
const postsController = require("./controllers/posts")

app.post("/login", loginController);

app.get("/posts", postsController);

app.listen(port, () => {
  console.log(`running at localhost://${port}`);
});
