var Sequelize = require("sequelize");

module.exports = function(database) {
  return database.define(
    "Product_bullet",
    {
      bullet_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      product_id: {
        type: Sequelize.STRING(100),
        primaryKey: false,
        allowNull: false
      },
      details: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      section: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    },
    {
      tableName: "Product_bullet",
      timestamps: false
    }
  );
};
