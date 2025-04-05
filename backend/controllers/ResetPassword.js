const User = require('../models/User');
const OTP = require('../models/OTP');
const mailSender = require('../utils/mailSender');
const bcrypt = require('bcrypt');
//REset password token
exports.resetPasswordToken = async(req,res)=>{
    //fetch email from user body
    //check if user exist or not,email validation
    //generte token for unique url as well as expiration time
    //update user by adding token and expiration time
    //send email to user with the link
    //return response successfully
    try {
        const {email} = req.body.email;
        //check if user exist or not,email validation
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user not found",
            });
        }
        //generate token for unique url as well as expiration time
        const token = crypto.randomUUID();
        const updatedDetails = await User.findOneAndUpdate(
            {email:email},{
                    token : token,
                    resetPasswordExpires:Date.now() + 3600000,
            },{new:true}// this will return the updated user details
        );
    const url = `http://localhost:3000/resetpassword/${token}`;
    await mailSender(email,"Password Reset Link",`Click on this link to reset your password ${url}`);
    console.log(updatedDetails);   
    return res.status(200).json({
        success:true,
        message:"Password reset link sent successfully,Please check your email",    
        });
    }
    catch(error){
        console.log(error);
        }
}
        //link genration for reset password
        exports.resetPassword = async(req,res)=>{
            try{
            // fetch token from user body
            const{password,confirmPassword,token} = req.body;
            if(password !== confirmPassword){
                return res.status(401).json({
                    success:false,
                    message:"Password and confirm password are not same",
                    });
            }
            // check if user exist or not,email validation
            const userDetails = await User.findOne({token:token});
            if(!userDetails){
                return res.status(401).json({
                    success:false,
                    message:"Token is invalid or expired",
                });
            }

            // check if token is valid or not if no entry - then token invalid , or either it expires
            if(userDetails.resetPasswordExpires < Date.now()){
                //update password and delete token
                return res.status(401).json({
                    success:false,
                    message:"Token is expired,Please generate new token",
                });
            }
            // hash passoword
            const hashedPassword = await bcrypt.hash(password,10);
            
             // then update password
             await User.findOneAndUpdate(
                {token :token},
                {password : hashedPassword,},
                {new:true}// this will return the updated user details
             );
            //return response
            return res.status(200).json({
                success:true,
                message:"Password updated successfully",
            });
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                success:false,
                message:"Internal server error",
            });
        }
     }
//reset password