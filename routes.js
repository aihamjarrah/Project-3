const express = require("express")
const {register,login,getCars,getUsers}= require("./controller")
// const {cars,users,roles} = require("./models")
const middleWare = require("./middlewares")
const bcrypt = require("bcrypt")
const { request } = require("express")
const {carModel,userModel} = require("./db")
// console.log(bcrypt.hash("asde_212",process.env.salt))

const authRouter = express.Router()
const car = new carModel({
    color
})


authRouter.get("/",async (req,res,next)=>{
    console.log("Test")
    res.json("Welcome")
    
})

authRouter.get("/cars",(req,res)=>{
    console.log("Get All The cars")
    res.json(getCars())
    
})
authRouter.get("/car-color",(req,res)=>{
    const carColor = cars.filter((car)=>{
        return car.color === req.body.color
    })
    if(!carColor.length ){
        res.json(`No ${req.body.color} car`)
    }
    res.json(carColor)
})
authRouter.get("/login",async (req,res)=>{
    try {
        res.json(await login(req.body))
    } catch (err) {
        throw err
        
    }

    
})
authRouter.post("/register",async (req,res)=>{
    try {
        res.json(await register(req.body))
    } catch (err) {
        throw err
        
    }
})
authRouter.get("/users",middleWare,async (req,res)=>{
    res.json(await getUsers())

})



module.exports = authRouter