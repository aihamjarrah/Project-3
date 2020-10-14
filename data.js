const express = require("express");
const {cars,users,roles } = require("./models");
const app = express();
const router = require("./routes")
require("dotenv").config()
const port = 3001 
app.use(express.json())
app.use(router)
app.listen(port,()=>{
    console.log(`Example listening at http://localhost:${port}`)
})