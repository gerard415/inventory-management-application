const express = require('express')
const router = express.Router()

const { register, login, getProfile, editProfile, logout } = require('../controllers/auth')


router.post('/register', register)
router.post('/login', login)
router.get('/profile', getProfile)
router.post('/logout', logout)
router.patch('/profile', editProfile)

module.exports = router
