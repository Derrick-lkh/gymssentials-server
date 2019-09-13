var Sequelize = require("sequelize");

module.exports = function(database) {
  return database.define(
    "Product",
    {
      product_id: {
        type: Sequelize.STRING(100),
        primaryKey: true,
        allowNull: false
      },
      product_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      product_description: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      product_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      category_id: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      bundle: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      product_bullet: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      product_preparation: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      product_tip: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      product_recommendation: {
        type: Sequelize.STRING(1000),
        allowNull: true
      },
      product_image: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      product_ingredients: {
        type: Sequelize.STRING(1000),
        allowNull: true
      }
    },
    {
      tableName: "Product",
      timestamps: false
    }
  );
};
