const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: { type: String, requuired: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, default: "user" }
    // tokens: [{type: Object}]
})


// now we are making an event that will encrypt the password before saving it
userSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10)
})

//Jwt token
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id},"secretkey", {expiresIn:"24h"} )
}

//Compare Password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model('User', userSchema);






