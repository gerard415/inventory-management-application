const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')  //for hashing
const jwt  = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a name'],
        maxlength: 50,
        minlength: 4
    },
    email: {
        type: String,
        required: [true, 'please provide an email'], 
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique: true,
    },
    password: {
        type: String,
        required: [true, 'please provide a password'],
        minlength: 8
    }
})

//hashing the password using mongoose middleware
UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt) 
})

//creating the token using mongoose instance mathods
UserSchema.methods.createJWT = function(){
    return jwt.sign({name: this.name, userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME} )
}

module.exports = mongoose.model('User', UserSchema)