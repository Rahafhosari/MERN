const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Player must have a name"],
        minlength: [2, "Player Name Must be at least two characters" ],
        maxlength: [45, "Name must not exceed 40 Characters"]
    },
    position: {
        type: String,
        optional: [true]
    },
    playerStatus: {
        type: String,
        default: "Undecided"
    }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);