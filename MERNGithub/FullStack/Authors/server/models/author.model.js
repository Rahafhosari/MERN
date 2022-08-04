const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "Author must have a name"],
        minlength: [3, "Name Must be at least three characters" ],
        maxlength: [45, "Name must not exceed 40 Characters"]
    }
    
}, { timestamps: true });


module.exports.Author = mongoose.model('Author', AuthorSchema);