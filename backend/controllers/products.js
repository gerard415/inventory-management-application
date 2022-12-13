const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors') 

const createProduct = async (req, res) => {
    req.body.createdBy = req.user.userId
    const product = await Product.create({...req.body, image: req.file.originalname})
    res.status(StatusCodes.CREATED).json({product})   
}

const getAllProducts = async (req, res) => {
    const products = await Product.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({products, count: products.length})
}

const getProduct = async (req, res) => {
    res.send('get product')

const updateProduct = async (req, res) => {
    res.send('update product')
}

const deleteProduct = async (req, res) => {
    res.send('delete product')
}

module.exports = {
    getAllProducts, createProduct, getProduct, updateProduct, deleteProduct
}