const express = require("express")
const { users } = require("./models")
const models = require("./models")
const authRouter = express.Router()
authRouter.use((req,res)=>{
    console.log("Test router")
})
authRouter.get("/cars",(req,res)=>{
    res.json(users)
    console.log("Test")
})
module.exports = authRouter