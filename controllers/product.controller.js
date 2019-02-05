const Product = require('../models/product.model');

//welcome to CRUD
exports.welcome = function (req, res) {
    res.send('Welcome to CRUD!');
};

//(Create)RUD
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created Successfully')
    })
};

//C(Read)UD
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send(product);
    })
};

//CR(Update)D
exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send('Product Updated Successfully');
    });
};

//CRU(Delete)
exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Deleted Successfully');
    })
};