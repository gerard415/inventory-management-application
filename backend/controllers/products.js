const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors') 
const cloudinary = require('../utils/cloudinary')
const fs = require('fs')
const {fileSizeFormatter} = require('../utils/multer')

const upload = async (req, res) => {
    let fileData = [];
    if (req.files) {
        // Save image to cloudinary
        let uploadedFile 
        for(let i = 0; i< req.files.length; i++){
            try {
                const localFilePath = req.files[i].path
                uploadedFile = await cloudinary.uploader.upload(localFilePath, {
                    folder: "products",
                    resource_type: "image",
                })
                fileData.push({
                    fileName: req.files[i].originalname,
                    filePath: uploadedFile.secure_url,
                })

            } catch (error) {
                res.status(500);
                throw new Error('Image could not be Uploaded');
            }
        }
    }
    res.json(fileData) 
}

const createProduct = async (req, res) => {
    req.body.createdBy = req.user.userId
    const product = await Product.create({...req.body})
    res.status(StatusCodes.CREATED).json({product})   
}

const getAllProducts = async (req, res) => {
    const products = await Product.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({products, count: products.length})
}

const getProduct = async (req, res) => {
    const {id: productId} = req.params
    const {userId} = req.user

    const product = await Product.findOne({_id: productId, createdBy: userId})
    if(!product){
        throw new NotFoundError(`No product with id ${productId}`)
    }

    res.status(StatusCodes.OK).json({product})
}

const updateProduct = async (req, res) => {
    const {id: productId} = req.params          //getting the product id
    const {userId} = req.user                   //getting the user id
    const {name, category, quantity, price, description} = req.body

    //seeing if that product exists
    const product = await Product.findById(productId);
    if(!product){
        throw new NotFoundError(`No product with id ${productId}`)
    }

    
    if(name === '' || category === '' || quantity === '' || price === '' || description === '' ){
        throw new BadRequestError('Fields cannot be empty')
    }    

    const updatedProduct = await Product.findOneAndUpdate({_id: productId, createdBy: userId}, {...req.body})
    res.status(StatusCodes.OK).json({updatedProduct})
}

const deleteProduct = async (req, res) => {
    const {id: productId} = req.params
    const {userId} = req.user
    
    const product = await Product.findOneAndRemove({_id: productId, createdBy: userId})
    if(!product){
        throw new NotFoundError(`No product with id ${productId}`)
    }

    res.status(StatusCodes.OK).send('product deleted')
}

module.exports = {
    getAllProducts, createProduct, getProduct, updateProduct, deleteProduct, upload
}