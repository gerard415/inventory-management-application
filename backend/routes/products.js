const express = require('express')
const router = express.Router()
const {photoMiddleware} = require('../utils/multer')

const {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct, upload} = require('../controllers/products')


router.route('/').post( photoMiddleware.array('images', 100), createProduct).get(getAllProducts)
router.route('/:id').get(getProduct).patch( photoMiddleware.array('images', 100), updateProduct).delete(deleteProduct)
router.route('/upload').post(photoMiddleware.array('images', 100), upload)

module.exports = router