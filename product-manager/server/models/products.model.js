const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required!"],
        minlength: [3, "Product title must be at least 3 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Product must have a price!"],
        min: [.01, "You can't give out free things!"]
    },
    description: {
        type: String,
        required: [true, "Product must have a description!"],
        minlength: [5, "Description must be at least 5 characters!"]
    }
}, {timestamps:true})


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;