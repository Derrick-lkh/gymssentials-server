var Sequelize = require("sequelize");
var configDB = require("./configDB");
var database;

database = new Sequelize(
  configDB.mysql.database,
  configDB.mysql.username,
  configDB.mysql.password,
  {
    host: configDB.mysql.host,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: configDB.mysql.logging
  }
);

// import
var User = require("./models/user.model")(database);
var Category = require("./models/category.model")(database);
var Product = require("./models/product.model")(database);
var Product_image = require("./models/product_image.model")(database);
var Product_bullet = require("./models/product_bullet.model")(database);

database
  .sync({
    force: configDB.seed
  })
  .then(() => {
    //seed file is empty
    require("./seed")();
    console.log("Database in Sync Now");
  });

module.exports = {
  User: User,
  Category: Category,
  Product: Product,
  Product_image: Product_image,
  Product_bullet: Product_bullet
};
