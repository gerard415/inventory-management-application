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
        enum:['electronics', 'stationery', 'cosmestics and personal hygiene', 'household', 'textiles', 'medical', 'vehicle', 'canned food', 'glass' ],
        maxlength: 32,
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
    images: {
        type: [Object],
        default: []
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