const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/allProducts', ProductController.getAllProducts);
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProductById);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}

