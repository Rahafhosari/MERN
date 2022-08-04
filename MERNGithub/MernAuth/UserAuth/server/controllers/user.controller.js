const { User } = require('../models/user.model');
const { Book } = require('../models/book.model');
const { Country } = require('../models/country.model');
const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require('bcrypt');


        //Create User (Register)
module.exports.createUser = (request, response) => {
User.create(request.body)
        .then(user => {
                const payload = {
                        id: user._id
                };
        const userToken = jwt.sign(payload, process.env.SECRET_KEY);
     
        response
                .cookie("usertoken (Cookie)", userToken, secret, {httpOnly: true})
                .json({ msg: "Successfully Registered!", user: user });
        })
        .catch(err => response.json(err));
}

        //Login
module.exports.login = async(request, response) => {
        const user = await User.findOne({ email: request.body.email });

        if(user === null) {
        // email not found in users collection
        return response.sendStatus(400);
        }

        // if we made it this far, we found a user with this email addresscopy
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(request.body.password, user.password);

        if(!correctPassword) {
        // password wasn't a match!
        return response.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
                id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        response.cookie("usertoken (Cookie)", userToken, secret, {httpOnly: true})
        .json({ msg: "Successfully Logged In!" });
    }

        //Logout
module.exports.logout = (request, response) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

        //Get All Users
module.exports.getAllUsers = (request, response) => {
        User.find({})
                .then(allUsers => response.json(allUsers))
                .catch(err => response.json(err))
        }

        //Get User by Id
module.exports.getUserById = (request, response) => {
        User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}

