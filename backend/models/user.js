const mongoose = require("mongoose");
require('dotenv').config();

const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    confirmpassword:{type:String, required:true}
})

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;