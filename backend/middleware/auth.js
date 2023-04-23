
const userModel = require('../models/user')
const jwt = require('jsonwebtoken');

const isAuthenticated = async(req,res,next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({
                message : "Please login first"
            });
        }
    

    const verifyUser = await jwt.verify(token, process.env.JWT_KEY);

    req.user = await userModel.findById(verifyUser._id);
    next();

    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }

}
module.exports=isAuthenticated;