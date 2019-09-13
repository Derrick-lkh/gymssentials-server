var Sequelize = require("sequelize");

module.exports = function(database) {
  return database.define(
    "Category",
    {
      cat_id: {
        type: Sequelize.STRING(100),
        primaryKey: true,
        allowNull: false
      },
      cat_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    },
    {
      tableName: "Category",
      timestamps: false
    }
  );
};
