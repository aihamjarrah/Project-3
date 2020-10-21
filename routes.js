const express = require("express")
const {carModel,userModel} = require("./schema")
const {register,login,getCars,getUsers,addCar,findCar,updateCarModel}= require("./controller")
const middleWare = require("./middlewares")
const bcrypt = require("bcrypt")
const request  = require("express")
const router = express.Router()
router.get("/",async (req,res)=>{
    console.log("Test")
    res.json("Welcome")
    
})

router.get("/cars",async(req,res)=>{
    console.log("All The cars")
    res.json(await getCars())
})
router.get("/car-color",(req,res)=>{
    const carColor = cars.filter((car)=>{
        return car.color === req.body.color
    })
    if(!carColor.length ){
        res.json(`No ${req.body.color} car`)
    }
    res.json(carColor)
})
router.get("/login",async (req,res)=>{
    try {
        res.json(await login(req.body))
    } catch (err) {
        throw err
        
    }

    
})
router.post("/register",async (req,res)=>{
    try {
        res.json(await register(req.body))
    } catch (err) {
        throw err
        
    }
})
router.get("/users",middleWare,async (req,res)=>{
    res.json(await getUsers())

})
router.post("/add-car",middleWare,async (req,res)=>{
    res.json(await addCar(req.body.color,req.body.plate,req.body.type,req.body.engine,req.body.model,req.body.year))
})
router.get("/find-car-plate",async (req,res)=>{
    res.json(await findCar(req.body.plate))
})
router.post("/update",async(req,res)=>{
    res.json(await updateCarModel(req.body))
});

module.exports = router