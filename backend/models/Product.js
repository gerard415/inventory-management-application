const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please provide a product name'],
        maxlength: 20,
        minlength: 3
    },
    category: {
        type: String,
        required: [true, 'please provide a category'],
        maxlength: 20,
        minlength: 3
    },
    quantity: {
        type: Number,
        required: [true, 'please provide the quantity']
    },
    price: {
        type: Number,
        required: [true, 'please provide the price']
    },
    description: {
        type: String,
        required: [true, 'please provide the description'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'please provide an image']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the user'],
    },
}, 
    { timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)