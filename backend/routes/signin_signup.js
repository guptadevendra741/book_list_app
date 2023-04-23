const userModel = require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = require("express").Router()

///for sign up
router.post("/signup", async (req, res) => {
    try {
        const { email, password, confirmpassword } = req.body
        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.json({
                message: "user already exists"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await userModel.create({
            email: email,
            password: password,
            confirmpassword: hashPassword
        })

        const token = await jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY)
        res.status(201).json({
            status: "success",
            user,
            token
        })

    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

///for sign in
router.post("/signin", async(req,res)=>{
    try {
        const {email,password} = req.body;
        const existingUser = await userModel.findOne({email:email}).select('+password')
        if(!existingUser){
            return res.json({
                status:"failed",
                message:"user not found"
            })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if(password !== existingUser.password){
            return res.json({
                message:"invalid credentials"
            })
        }

        const token = await jwt.sign({email:existingUser.email, id:existingUser._id}, process.env.JWT_KEY)

        res.json({
            status:"success",
            existingUser,
            token
        })
    } catch (error) {
        res.status(400).json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = router;