const mongoose = require("mongoose");

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("database connected");
    })
}
module.exports = connect;