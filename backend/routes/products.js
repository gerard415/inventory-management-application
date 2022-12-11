const express = require('express')
const router = express.Router()

const {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct} = require('../../../practice/inventory_management_application/controllers/products')


router.route('/').post(createProduct).get(getAllProducts)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router