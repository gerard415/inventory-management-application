const getAllProducts = async (req, res) => {
    res.send('get All products')
}
const createProduct = async (req, res) => {
    res.send('create Product')   
}

const getProduct = async (req, res) => {
    res.send('get product')
}

const updateProduct = async (req, res) => {
    res.send('update product')
}

const deleteProduct = async (req, res) => {
    res.send('delete product')
}

module.exports = {
    getAllProducts, createProduct, getProduct, updateProduct, deleteProduct
}