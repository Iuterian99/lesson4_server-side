const customFs = require("../lib/fs");
const posts = new customFs("../module/posts.json");

module.exports = (req, res) => {
  const allPosts = JSON.parse(posts.read());
  res.status(200).json(allPosts);
}