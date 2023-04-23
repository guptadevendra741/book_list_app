const express = require("express");
const dotenv = require("dotenv");
const connect = require("./database/connect");
const books = require("./routes/book")
const logout = require("./routes/logout")
const signin_signup = require("./routes/signin_signup");

const cors = require("cors");


const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());

app.use("/",signin_signup)
app.use("/",books)
app.use("/",logout)


app.listen(process.env.PORT, async (req,res)=>{
    connect()
    console.log(`App is connected at port ${process.env.PORT}` );
})