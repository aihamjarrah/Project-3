const express = require("express")
const {register,login,getCars}= require("./controller")
const middleWares = require("./middlewares")
const authRouter = express.Router()
authRouter.use((req,res)=>{
    console.log("Test router")
})
authRouter.get("/cars",(req,res)=>{
    res.json(getCars())
    console.log("Test")
})
module.exports = authRouter