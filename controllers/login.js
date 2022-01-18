const customFs = require("../lib/fs");
const users = new customFs("../module/users.json");
const { signUser } = require("../lib/jwt");


module.exports =  (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const allUsers = JSON.parse(users.read())
  foundUser = allUsers.find(
    (e) => e.name == username && e.password == password
  );
  if (!foundUser) {
    return res.status(401).send({ message: "unothorized" });
  }
  res.status(200).json({
    token: signUser({ id: foundUser.id, userName: foundUser.name }),
  });
}