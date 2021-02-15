const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const payload = {
    id: user._id
};
const userToken = jwt.sign(payload, process.env.SECRET_KEY);

        //Create User (Register)
module.exports.createUser = (request, response) => {
    User.create(request.body)
    .then(user => {
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
 
        res
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!", user: user });
    })
    .catch(err => res.json(err));
}


        //Login
module.exports.createUser = (request, response) => {
    const user = await User.findOne({ email: req.body.email });
    
    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }
    
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    
    if(!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }
    
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    
    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, secret, {
            httpOnly: true
        })
        .json({ msg: "success!" });
}

        //Get User by Id
module.exports.getUserById = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}

        //Logout
module.exports.logout = (request, response) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

        //Authnicate
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) { 
        res.status(401).json({verified: false});
    } else {
        next();
    }
  });
}