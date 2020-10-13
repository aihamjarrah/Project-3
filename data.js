const express = require("express");
const app = express();
const router = require("./routes")
require("dotenv").config()
const port = 3001 || process.env.port
app.use(express.json())
app.use(router)
app.listen(port,()=>{
    console.log(`Example listening at http://localhost:${port}`)
})