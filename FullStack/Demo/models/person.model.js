const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({

    firstName: { 
        type: String,
        required: [true, "First Name is required"],
        minlength: [3, "First Name must be at least 3 characters long"]
    },

    lastName: { 
        type: String,
        required: [true, "Last Name is required"],
        minlength: [3, "First Name must be at least 3 characters long"]
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [1, "Age must be at greater than 1"]
    },

}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);
