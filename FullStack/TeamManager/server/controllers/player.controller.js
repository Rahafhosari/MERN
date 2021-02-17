const { Player } = require('../models/player.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//Methods
        //Find all Players
module.exports.getAllPlayers = (request, response) => {
    Player.find({})
        .then(allPlayers => response.json(allPlayers))
        .catch(err => response.json(err))
}

        //Create New Player
module.exports.createPlayer = (request, response) => {
    Player.create(request.body)
        .then(player => response.json(player))
        .catch(err => response.status(400).json(err));
}

        //Get Player by Id
module.exports.getPlayerById = (request, response) => {
    Player.findOne({_id:request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

        //Update an Player
module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.json(err))
}

        //Delete an Player
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
