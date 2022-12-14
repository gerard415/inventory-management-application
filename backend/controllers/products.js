const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors') 
const cloudinary = require('../utils/cloudinary')
const {fileSizeFormatter} = require('../utils/multer')

const createProduct = async (req, res) => {
    req.body.createdBy = req.user.userId

    let fileData = {};
    if (req.file) {
        // Save image to cloudinary
        let uploadedFile 
        try{
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "products",
                resource_type: "image",
            });
        }catch(error){
            res.status(500);
            throw new Error("Image could not be uploaded");
        }

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
        };
    }
    const product = await Product.create({...req.body, image: fileData})
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

    let fileData = {};
    if (req.file) {
        // Save image to cloudinary
        let uploadedFile 
        try{
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "products",
                resource_type: "image",
            });
        }catch(error){
            res.status(500);
            throw new Error("Image could not be uploaded");
        }

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
        };
    }
    

    const updatedProduct = await Product.findOneAndUpdate({_id: productId, createdBy: userId}, {...req.body, image: Object.keys(fileData).length === 0 ? product?.image : fileData} , { new: true, runValidators: true })
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
    getAllProducts, createProduct, getProduct, updateProduct, deleteProduct
}