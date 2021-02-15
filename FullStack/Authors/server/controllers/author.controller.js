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
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
}

        //Get Author by Id
module.exports.getAuthorById = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

        //Update an Author
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

        //Delete an Author
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

