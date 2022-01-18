const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const verifyMiddleware = require("./middlewares/verify")

//!Middlewares
app.use(express.json())
app.use(cors())

//!controllers
const loginController = require("./controllers/login")
const postsController = require("./controllers/posts")

app.post("/login", loginController);

app.get("/posts", verifyMiddleware, postsController);

app.listen(port, () => {
  console.log(`running at localhost://${port}`);
});
