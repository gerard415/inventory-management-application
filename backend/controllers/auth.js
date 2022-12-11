const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res) => {
    //creating the user. before the model saves the user, it hashes the passes first in the User schema.
    const user = await User.create({...req.body})
    
    //the token was created using an instance method in the user model. you are invoking it here. so as not to clog up the controllers.
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user, token})
}

const login = async (req, res) => {
    res.send('login user')
}

module.exports = {
    register, login
}