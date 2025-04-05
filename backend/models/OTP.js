const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const OTPSchema  = new mongoose.Schema({
    email:{
        type:String,
        required:true,

    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expries:5*60, // 5 minutes
    },
});


//a function :to send mails premiddleware
async function sendVerificationEmail(email,otp){
    try{
        const mailResponse = await mailSender(email, "Verification mail from group 29",otp);
        console.log("mail sent successfully",mailResponse);
    }
    catch(error){
        console.log("error occured at sending mails:",error);
        throw error;
    }
}
OTPSchema.pre("save", async function(next){
    await sendVerificationEmail(this.email, this.otp);
    next();
})
module.exports = mongoose.model("OTP", OTPSchema);