const { Author } = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//Methods
    //Find all authors
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json(err))
}

    //Create New Author
module.exports.createAuthor = (request, response) => {
    // const { name } = request.body;
    // Author.create({
    //     name
    // })
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}


