var Sequelize = require("sequelize");

module.exports = function(database) {
  return database.define(
    "Product_image",
    {
      product_id: {
        type: Sequelize.STRING(100),
        primaryKey: true,
        allowNull: false
      },
      product_image: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    },
    {
      tableName: "Product_image",
      timestamps: false
    }
  );
};
