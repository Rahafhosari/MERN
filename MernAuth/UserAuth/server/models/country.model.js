const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    }, {timestamps: true});

module.exports.Country = mongoose.model('Country', CountrySchema);  