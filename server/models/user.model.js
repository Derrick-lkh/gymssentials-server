var Sequelize = require("sequelize");

module.exports = function(database) {
  return database.define(
    "user",
    {
      user_id: {
        type: Sequelize.STRING(100),
        primaryKey: true,
        allowNull: false
      },
      user_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      user_password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      DOB: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      BMI: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: "User",
      timestamps: false
    }
  );
};
