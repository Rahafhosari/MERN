const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "Name Must be at least three characters" ],
        maxlength: [45, "Name must not exceed 40 Characters"]
    },
    }, {timestamps: true});

module.exports.Book = mongoose.model('Book', BookSchema);