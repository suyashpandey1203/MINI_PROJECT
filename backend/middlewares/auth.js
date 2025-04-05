const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");
const OTP = require("../models/OTP");
//auth
// here we will check authentication of the user by verifying the token
// we will use this middleware in the routes where we need authentication

exports.auth = async(req,res, next) =>{
    try{
        //extract token
        const token = req.cookies.token || req.body.token || req.headers["Authorisation"].replace("Bearer ","");
        //check if token is present or not
        if(!token){
            return res.status(401).json({error: "Token is missing"});
        }
        //verify
        try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        }
        catch(err){
                //verification issue
                res.status(401).json({
                    success:false,
                    message:"token is invalid",
                });
        }
        next();
    }catch(error){
            return res.status(401).json({
                success:false,
                message:"Internal server error",
            });
    }
}
//isstudents
    // here we will check if the user is student or not
exports.isStudents = async(req,res,next) =>{
    try{
        const user = await User.findById(req.user.id);
        if(user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"You are not a student",
            });
        }
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Internal server error",
        });
    }
}
//isInstructor
exports.isInstructor = async(req,res,next) =>{
    try{
        const user = await User.findById(req.user.id);
        if(user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"You are not a instructor",
            }); 
        }
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Internal server error",
        });
    }
}
//IsAdmin
exports.isAdmin = async(req,res,next) =>{
    try{
        const user = await User.findById(req.user.id);
        if(user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"You are not a admin",
            });
        }
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message:"Internal server error",
        });
    }
}