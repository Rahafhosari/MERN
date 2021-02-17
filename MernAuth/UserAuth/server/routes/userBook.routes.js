const UserController = require('../controllers/user.controller');
const BookController = require('../controllers/book.controller');
// const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    //User
    app.post('/api/registeruser', UserController.createUser);
    app.post('/api/login', UserController.login);
    app.get('/api/user/:id', UserController.getUserById);
    app.get('/api/users', UserController.getAllUsers);
    // app.get('/api/users', authenticate, UserController.getAllUsers);
    app.delete('/api/logout', UserController.logout);

    // this route now has to be authenticated
//   app.get("/api/users", authenticate, Users.getAll);

    // //Books
    app.post('/api/book', BookController.createBook);
    app.get('/api/books', BookController.getAllBooks);
    app.get('/api/book/:id', BookController.getBookById);
    
    // // app.put('/api/author/:id', AuthorController.updateAuthor);
    // // app.delete('/api/author/:id', AuthorController.deleteAuthor);
}

