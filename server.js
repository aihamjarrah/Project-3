const express = require("express");
const {cars,users,roles } = require("./models");
const router = require("./routes")
require("dotenv").config()
const dataBase = require("./db");
const { userModel, carModel } = require("./schema");
const app = express();
app.use(express.json())
app.use(router)







const port = 3001 
app.listen(port,()=>{
    console.log(`Example listening at http://localhost:${port}`)
})