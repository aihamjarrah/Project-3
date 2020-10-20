const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
// const {cars,users,roles} = require("./models")
const { options, use } = require("./routes")
const { carModel,userModel,permessions } = require("./schema")
// require("dotenv").config()
// const db = require("./db")
// bcrypt.hash("iunq_331o",10,(err,hash)=>{
//     if (err) throw err
//     console.log(hash)
// }) 
// const register = async (user)=>{
//     const searchUser = users.filter((element)=>{
//         return element.email === user.email
//     })
//     if(!searchUser.length){
//         user.password = await bcrypt.hash(user.password,Number(process.env.salt))
//         users.push(user)
//         return "User has been created"
//     }
//     return "User exists"
// }
// const login = async (user)=>{
//     const savedUser = users.filter((element)=>{
//         return element.email === user.email
//     })
//     if(savedUser.length){
//         if(await bcrypt.compare(user.password,savedUser[0].password)){
//             const userPer = roles.filter((role)=>{
//                 return role.id === savedUser[0].role_id
//             })
//             const payload = {email:savedUser[0].email,permession:userPer[0].permessions}
//             const options = {expiresIn:process.env.token_expiration}
//             return  await jwt.sign(payload,process.env.secret,options)
//         }
        
        
//     }
//     return "invalid login"
// }
const register =async (information)=>{
    try {
        const newUser = new userModel({
            email:information.email,
            password:information.password,
            name:information.name,
            phoneNumber:information.phoneNumber
        })
        console.log(newUser)
        
        userModel.pre("save",async function(){
            this.password = await bcrypt.hash(this.password,process.env.salt)
            if(information.accessKey === process.env.secret){
                newUser.role = "admin"
            }
        })
        userModel
                 .save()
                 .then((result)=>{
                     console.log(result)
                     
                 })
                 .catch((err)=>{
                     console.error(err)
                 })
        return "User has been created successfuly"
    } catch (err) {
        console.error(err)
        return "User exists"
    }
}
const login =async (loginInfo)=>{
    const searchUser = userModel.find({email:loginInfo.email})
    if(searchUser){
        const checkPass = await bcrypt.compare(loginInfo.password,searchUser.password,process.env.salt)
        if(checkPass){
            const payload = {}
        }
        
    }
}
const getCars = ()=>{
    return db.car
}
const getUsers = ()=>{
    return users
}
const addCar = (color,plate,type,engine,model,year)=>{
    const car = new carModel({
        color:color,
        plate:plate,
        type:type,
        engine:engine,
        model:model,
        year:year
    
    
    })
    car
      .save()
      .then((result)=>{
          console.log("Result",result)
          return result
          
      })
      .catch((err)=>{
          console.error(err)
      })
}
const findCar = async (plateNumber)=>{
    return await carModel
       .find({
           plate:plateNumber
       })
    //    .then((result)=>{
    //        console.log("Result:",result)
    //        return result
    //    })
    //    .catch((err)=>{
    //        console.error(err)
    //    })
    
}
module.exports = {register,login,getCars,getUsers,addCar,findCar}