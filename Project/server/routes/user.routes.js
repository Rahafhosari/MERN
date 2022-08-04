const UserController = require('../controllers/user.controller');

module.exports = function(app){
    app.get('/api/register', UserController.register);
    app.get('/api/login', UserController.login);
    // app.get('/api/authors', UserController.getAllAuthors);
    // app.post('/api/author', UserController.createAuthor);
    // app.get('/api/author/:id', UserController.getAuthorById);
    // app.put('/api/author/:id', UserController.updateAuthor);
    // app.delete('/api/author/:id', UserController.deleteAuthor);
}
