const { compare } = require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports = async (req,res,next)=>{
    if(!req.headers.authorization){
        res.send("Login first") 
    }
    const token = req.headers.authorization.split(' ').pop()
    jwt.verify(token,process.env.secret,(err,parsedToken)=>{
        if(err) res.send(err)
        if(parsedToken){
            next()

        }
        
    })
}
  