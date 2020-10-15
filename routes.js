const express = require("express")
const {register,login,getCars}= require("./controller")
const {cars,users,roles} = require("./models")
const middleWares = require("./middlewares")

const authRouter = express.Router()

authRouter.get("/",async (req,res,next)=>{
    console.log("Test")
    res.json("hel")
    
})

authRouter.get("/cars",(req,res)=>{
    console.log("Get All The cars")
    res.json(getCars())
    
})
authRouter.get("/car-color",(req,res)=>{
    const carColor = cars.filter((car)=>{
        return car.color === req.body.color
    })
    if(!carColor.length){
        res.json(`No ${req.body.color} car`)
    }
    res.json(carColor)
})



module.exports = authRouter