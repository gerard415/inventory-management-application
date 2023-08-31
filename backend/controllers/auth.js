const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res) => {
    //creating the user. before the model saves the user, it hashes the passes first in the User schema.
    const user = await User.create({...req.body})
    
    //the token was created using an instance method in the user model. you are invoking it here. so as not to clog up the controllers.
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).cookie('token', token).json({ name: user.name})
}

const login = async (req, res) => {
    //checking both email and password are available
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestError('Please provide both email and password')
    }
    
    //finding the user with the particular email
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid credentials')
    }

    //comparing passwords
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid credentials')
    }

    //creating the token
    const token = user.createJWT()
    res.status(StatusCodes.OK).cookie('token', token).json({ name: user.name})
}

module.exports = {
    register, login
}