const Sequelize = require("sequelize");
const db = require("./../database/db");

const Login = db.define(
  "login",
  {
    username: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
);

module.exports = Login;
