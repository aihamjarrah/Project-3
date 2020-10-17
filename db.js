const mongoose = require("mongoose")
const db = mongoose.connection;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};
const connection = mongoose.connect(process.env.DB_URL,options,()=>{
    console.log("The DataBase connected")
})
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

const carModel = mongoose.model("Cars",carSchema)
const userModel = mongoose.model("User",userSchema)
module.exports = {carModel,userModel}