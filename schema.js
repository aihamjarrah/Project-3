const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
require("dotenv").config()
const carSchema = new mongoose.Schema({
    color:{type:String,required:true},
    plate:{type:String,required:true,unique:true},
    type:{type:String,required:true},
    engine:{type:String,required:true},
    model:{type:String,required:true},
    year:{type:Number,required:true}

})
const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    phoneNumber:{type:String}
})
userSchema.pre("save",async function(){
    this.password = await bcrypt.hash(this.password,process.env.salt)
})
const permessions = {admin:["r","w","u","d"],user:["r","w"]}
const carModel = mongoose.model("Cars",carSchema)
const userModel = mongoose.model("User",userSchema)
module.exports = {carModel,userModel,permessions}