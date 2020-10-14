const express = require("express")
const {register,login,getCars}= require("./controller")
const middleWares = require("./middlewares")

const authRouter = express.Router()

authRouter.get("/",(req,res)=>{
    console.log("Test")
    res.json("hel")
    
})

authRouter.get("/cars",(req,res)=>{
    console.log("Test")
    res.json(getCars())
    
})
module.exports = authRouter