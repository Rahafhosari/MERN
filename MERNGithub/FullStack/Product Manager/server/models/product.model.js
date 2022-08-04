const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    price: { 
        type: Number,
        required: [true, "First name is required"],
        min: [1, "Price must be at least 1 or more"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [6, "Description must be at least 6 characters long"]
    },
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);

// or
// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product;
