const { BadRequestError, UnauthenticatedError } = require('../errors')
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('Authentication invalid')
    }

    const token = authHeader.split(' ')[1]

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {userId, name} = decoded
        req.user = {userId, name}  
        next()
    }
    catch(error){
        throw new UnauthenticatedError('Authentication invalid')
    }
}

module.exports = authMiddleware