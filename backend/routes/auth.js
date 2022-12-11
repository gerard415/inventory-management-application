const express = require('express')
const router = express.Router()

const { register, login } = require('../../../practice/inventory_management_application/controllers/auth')


router.post('/register', register)
router.post('/login', login)

module.exports = router
