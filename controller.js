const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {cars,users,roles} = require("./models")
// bcrypt.hash("osp_98ppd",10,(err,hash)=>{
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
        return element === user.email
    })
    if(savedUser.length){
        if(await bcrypt.compare(user.password,savedUser[0].password)){
            const permessions = roles.
        }
        
    }
}
