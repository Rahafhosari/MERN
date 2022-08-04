const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title Must be at least three characters" ],
        maxlength: [45, "Title must not exceed 40 Characters"]
    },
    author: {
        type: String,
        required: [true, "Author Name is required"],
        minlength: [3, "Author Name Must be at least three characters" ],
        maxlength: [45, "Author Name must not exceed 40 Characters"]
    }
    }, {timestamps: true});

module.exports.Book = mongoose.model('Book', BookSchema);