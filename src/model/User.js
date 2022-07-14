const Sequelize = require("sequelize");
const db = require("./../database/db");

const User = db.define(
  "user",
  {
    uid: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    tillSessions: {
      type: Sequelize.INTEGER,
    },
    sessionId: {
      type: Sequelize.INTEGER,
    },
    cb: {
      type: Sequelize.STRING(255),
    },
    ulName: {
      type: Sequelize.STRING(255),
    },
    ufName: {
      type: Sequelize.STRING(255),
    },
    dob: {
      type: Sequelize.DATE,
    },
    comment: {
      type: Sequelize.STRING(255),
    },
    comments: {
      type: Sequelize.STRING(255),
    },
    parent1LName: {
      type: Sequelize.STRING(255),
    },
    parent1FName: {
      type: Sequelize.STRING(255),
    },
    parent2LName: {
      type: Sequelize.STRING(255),
    },
    parent2FName: {
      type: Sequelize.STRING(255),
    },
    plp: {
      type: Sequelize.STRING(255),
    },
    pic: {
      type: Sequelize.STRING(255),
    },
    ir: {
      type: Sequelize.STRING(255),
    },
    inactive: {
      type: Sequelize.STRING(255),
    },
    nl: {
      type: Sequelize.ENUM,
      values: ["Yes", "No"],
    },
    cid: {
      type: Sequelize.STRING(255),
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    initialAutoIncrement: 1,
  }
);

module.exports = User;
