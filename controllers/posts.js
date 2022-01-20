const customFs = require("../lib/fs");
const posts = new customFs("../module/posts.json");
const { verifyUser } = require("../lib/jwt")

module.exports = (req, res) => {
  const { Authorization } = req.headers; 

  const { id } = verifyUser(Authorization)
  const allPosts = JSON.parse(posts.read());

  const userPost = allPosts.filter(e => e.userId = id)
  
  res.status(200).json(userPost);
}