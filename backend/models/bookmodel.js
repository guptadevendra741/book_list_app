const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{type:String},
    author:{type:String},
    description:{type:String},
    date:{type:String},
    publisher:{type:String}
})

const bookModel = mongoose.model("bookModel", bookSchema);
module.exports = bookModel;