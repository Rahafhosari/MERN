const { User } = require('../models/user.model');
const { Book } = require('../models/book.model');
const { Country } = require('../models/country.model')


        //Find all Books
module.exports.getAllBooks = (request, response) => {
    Book.find({})
        .then(allBooks => response.json(allBooks))
        .catch(err => response.json(err))
}

        //Get Book by Id
module.exports.getBookById = (request, response) => {
    Book.findOne({_id:request.params.id})
        .then(book => response.json(book))
        .catch(err => response.json(err))
}

        //Create Book
module.exports.createBook = (request, response) => {
    Book.create(request.body)
        .then(book => response.json(book))
        .catch(err => response.status(400).json(err));
}
