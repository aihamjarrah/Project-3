const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {cars,users,roles} = require("./models")
const { options } = require("./routes")
// bcrypt.hash("iunq_331o",10,(err,hash)=>{
//     if (err) throw err
//     console.log(hash)
// }) 
const register = async (user)=>{
    const searchUser = users.filter((element)=>{
        return element.email === user.email
    })
    if(!searchUser.length){
        user.password = await bcrypt.hash(user.password,Number(process.env.salt))
        users.push(user)
        return "User has been created"
    }
    return "User exists"
}
const login = async (user)=>{
    const savedUser = users.filter((element)=>{
        return element.email === user.email
    })
    if(savedUser.length){
        if(await bcrypt.compare(user.password,savedUser[0].password)){
            const userPer = roles.filter((role)=>{
                return role.id === savedUser[0].role_id
            })
            const payload = {email:savedUser[0].email,permession:userPer[0].permessions}
            const options = {expiresIn:process.env.token_expiration}
            return  await jwt.sign(payload,process.env.secret,options)
        }
        
        
    }
    return "invalid login"
}
const getCars = ()=>{
    return cars
}
const getUsers = ()=>{
    return users
}
module.exports = {register,login,getCars,getUsers}