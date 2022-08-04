const { User } = require('../models/user.model');

//Login & Registeration
module.exports.login = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.register = (request, response) => {
    response.json({
        message: "Hello World"
    });
}