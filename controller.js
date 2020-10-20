const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
// const { options, use } = require("./routes")
const { carModel,userModel,permessions } = require("./schema")
require("dotenv").config()
// const db = require("./db")
// bcrypt.hash("iunq_331o",10,(err,hash)=>{
//     if (err) throw err
//     console.log(hash)
// }) 

const register =async (information)=>{
    try {
        if(information.Key === process.env.adminKey){
            const newUser = new userModel({
                email:information.email,
                password:information.password,
                name:information.name,
                phoneNumber:information.phoneNumber,
                role:"admin"
            })

        }else{
            const newUser = new userModel({
                email:information.email,
                password:information.password,
                name:information.name,
                phoneNumber:information.phoneNumber,
                role:"user"
            })

        }
        newUser
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
    const searchUser =await userModel.findOne({email:loginInfo.email})
    if(searchUser){
        console.log(searchUser)
        if(await bcrypt.compare(loginInfo.password,searchUser.password,(err,result)=>{
            if(err) throw err
            console.log("Password matches :",result)
        })){
            if(searchUser.role === "admin"){
                const payLoad = {permessions:permessions[0].admin,email:searchUser.email}
                const options = {expiresIn:process.env.token_expiration}
                return jwt.sign(payLoad,process.env.secret,options)

            }else{
                const payLoad = {permessions:permessions[0].user,email:searchUser.email}
                const options = {expiresIn:process.env.token_expiration}
                return jwt.sign(payLoad,process.env.secret,options)

            }
            
            
                
            
            
        }
        else{
            return "Invalid password"
        }
        

        
    }
    else{
        return "User is not registerd"
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
}
module.exports = {register,login,getCars,getUsers,addCar,findCar}