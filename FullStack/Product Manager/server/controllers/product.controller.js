const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

//Methods
        //Find All Products
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

        //Create Product
module.exports.createProduct = (request, response) => {
    const { title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })
    // Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

        //Get Product by Id
module.exports.getProductById = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

        //Update a product
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

// module.exports.deleteProduct = (request, response) => {
//     Person.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }