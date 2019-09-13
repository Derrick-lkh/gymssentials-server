var Sequelize = require("sequelize");

// import model
var Category = require("../database").Category;
var Product = require("../database").Product;
var Product_bullet = require("../database").Product_bullet;

exports.listCategory = function(req, resp) {
  Category.findAll({})
    .then(result => {
      resp
        .status(200)
        .type("application/json")
        .json(result);
    })
    .catch(err => {
      resp
        .status(500)
        .type("application/json")
        .json({ error: true });
    });
};

// Products
exports.listProduct = function(req, resp) {
  Product.findAll({})
    .then(result => {
      resp
        .status(200)
        .type("application/json")
        .json(result);
    })
    .catch(err => {
      resp
        .status(500)
        .type("application/json")
        .json({ error: true });
    });
};

exports.listBullets = function(req, resp) {
  Product_bullet.findAll({
    where: { product_id: req.params.product_id }
  })
    .then(result => {
      resp
        .status(200)
        .type("application/json")
        .json(result);
    })
    .catch(err => {
      resp
        .status(500)
        .type("application/json")
        .json({ error: true });
    });
};
