const { verifyUser } = require("../lib/jwt");
module.exports =(req, res, next)=> {
const { token } = req.headers;
if(!token){
  res.status(401).send({
    message: 'Unothorized'
  })
}
}