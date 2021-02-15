const UserController = require('../controllers/user.controller');
const BookController = require('../controllers/book.controller');

module.exports = function(app){
    app.get('/api', UserController.index);
    //User
    app.post('/api/user', UserController.createUser);
    app.get('/api/user/:id', UserController.getUserById);

    //Books
    app.post('/api/book', UserController.createBook);
    app.get('/api/books', BookController.getAllBooks);
    app.get('/api/book/:id', BookController.getBookById);
    
    
    // app.put('/api/author/:id', AuthorController.updateAuthor);
    // app.delete('/api/author/:id', AuthorController.deleteAuthor);
}

