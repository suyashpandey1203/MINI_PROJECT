const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/mailSender");
require("dotenv").config();
//send otp function is avaliable in the model
exports.sendOTP  = async(req, res) =>{
    //fetch email from user body
    try {
    const {email} = req.body;
    //check if user already exist
    const checkUserPresent = await User.findOne({email});
    //if user exist the send response
    if(checkUserPresent){
        return res.status(401).json({
            success: false,
            message: "user already registered",
        });
    }
    //generate otp
    var otp = otpGenerator.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets: false,
        specialChars:false,
    });
        console.log("OTP generated :",otp);
            let otpExist = await OTP.findOne({opt: otp});
            while(otpExist){
                otp = otpGenerator.generate(6,{
                    upperCaseAlphabets:false,
                    lowerCaseAlphabets: false,
                    specialChars:false,
                });
                otpExist = await OTP.findOne({opt: otp});
            } 
             const otpPayload = {email,otp};
             // create an entry for OTP;
                const otpBody = await OTP.create(otpPayload);
                console.log(otpBody);
                //return response successfully;
                res.status(200).json({
                    success: true,
                    message: "OTP sent successfully",
                });

    }
        catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
};
// //signup

    exports.signUp = async(req,res)=>{
        //fetch data from req
        // validate the user then hen redirect to the login
        //match passwords
        //check user already exist or not
        // find most recent otp for the user
        //validate the otp
        //Hash the password
        //create entry in DataBase

        try { 

            const {
                firstName,
                lastName,
                email, 
                password,
                confirmPassword,
                accoutType,
                contactNumber,
                otp

            } = req.body;
            //validate
            if(!firstName || !lastName ||!email ||!password ||!confirmPassword || !otp) {
                return res.status(403).json({
                    success: false,
                    message: "All fields are requried",
                });

            }
            //match 2 passoword
            if(password !== confirmPassoword){
                    return res.status(400).json({
                        success: false,
                        message: "Password do not match,please try again",
                    });
            }
            //check existing user
            const checkExistingUser = await User.findOne({email});
            if(checkExistingUser){
                return res.status(400).json({
                    success: false,
                    message: "User is already registered",
                });
            }
            //find most recent otp
            const recentOtp = await OTP.find({email}).sort({createdAt: -1}).limit(1);//sort on basis of time and fetch most recent value
            console.log(recentOtp);
            //validate OTP
            if(recentOtp.length ==0){
                //otp not found
                return res.status(400).json({
                    success: false,
                    message: "OTP not found",
                });

                
            }else if(otp !==recentOtp){
                //Invalid otp
                return res.status(400).json({
                    success: false,
                    message:"Invalid OTP",
                })
            }
            // hashing of password
            const hashedPassword = await bcrypt.hash(password, 10);
            const profileDetails = await Profile.create({
                    gender: null,
                    dateOfBirth: null,
                    about: null,
                    contactNumber:null,
            });
            //create user entry in database
            const user = await User.create({
                    firstName,
                    lastName,
                    email,
                    contactNumber,
                    password: hashedPassword,
                    accoutType,
                    additionalDetails: profileDetails._id,
                    image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,


            });
                return res.status(200).json({
                    success: true,
                    message: "User registered successfully",
                    });
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "User can't be registered try again!!",
            });
        }
    }
//login
exports.login = async(req,res)=>{
    try{
        //get data from the user
        const {email,password} = req.body;
        //validate
        if(!email || !password){
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }
        //check if user exist
        const user = await User.findOne({email}).populate("additionalDetails");
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not registered",
            });
        }
        //check if password is correct
        if(await bcrypt.compare(password,user.password)){
            const payload = {
                    email: user.email,
                    id: user._id,
                    accountType: user.accountType,
            }  
            const token = jwt.sign(payload,process.env.JWT_SECRET_KEY,{
                expiresIn: "2h",

            });
            user.token = token;
            user.password = undefined;

        
       
        //create token  
      
        //set cookie
        const options = {
            expires: new Date(Date.now() + 3*24*60*60*1000), //3 days
            httpOnly: true,
        }
        res.cookie('token',token,options).status(200).json({
            success: true,
            token,
            user,
            message: "User logged in successfully"
        });
    }
    else{
        return res.status(401).json({
            success: false,
            message: "Invalid credentials",
        });
    }
        //return response
        // return res.status(200).json({   
        //     success: true,
        //     message: "User logged in successfully",
        //     });
    }
            catch(error){
                console.log(error);
                return res.status(500).json({
                    success: false,
                    message: "User can't be logged in try again!!",
                });
            }
}
//change Password
exports.changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body;

        // 1. Validate input
        if (!oldPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // 2. Find user
        const user = await User.findOne({ email: req.user.email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // 3. Check old password
        const validPassword = await bcrypt.compare(oldPassword, user.password);
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                message: "Old password is incorrect",
            });
        }

        // 4. Check if new password is same as old password
        if (newPassword === oldPassword) {
            return res.status(400).json({
                success: false,
                message: "New password must be different from old password",
            });
        }

        // 5. Check if confirm password matches
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Confirm password does not match new password",
            });
        }

        // 6. Hash new password and update in DB
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        // 7. Send password change notification email (optional)
        await sendEmail({
            to: user.email,
            subject: "Password Changed",
            text: `Hi ${user.name}, your password was successfully changed.`,
        });

        // 8. Send response
        return res.status(200).json({
            success: true,
            message: "Password changed successfully",
        });

    } catch (error) {
        console.error("Change Password Error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while changing password. Please try again.",
        });
    }
};