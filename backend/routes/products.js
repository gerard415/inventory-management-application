const express = require('express')
const router = express.Router()
const {upload} = require('../utils/multer')

const {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/products')


router.route('/').post( upload.single('image'), createProduct).get(getAllProducts)
router.route('/:id').get(getProduct).patch( upload.single('image'), updateProduct).delete(deleteProduct)

module.exports = router