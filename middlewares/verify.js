const { verifyUser } = require("../lib/jwt");
module.exports =(req, res, next)=> {
 const { Authorization } = req.headers
if(!Authorization ){
  return res.status(401).send({
    message: 'Unothorized'
  })
}
next()
}