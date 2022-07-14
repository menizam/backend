const db = require("./../database/db");
const Sequelize = require("sequelize");

const Concern = db.define(
  "Concerns",
  {
    ConcernsID: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    chid: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    sessionID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    testDate: {
      type: Sequelize.DATE,
    },
    vision: {
      type: Sequelize.STRING,
    },
    hearing: {
      type: Sequelize.STRING,
    },
    health: {
      type: Sequelize.STRING,
    },
    speech: {
      type: Sequelize.STRING,
    },
    armsLegsMovements: {
      type: Sequelize.STRING,
    },
    fingerMovements: {
      type: Sequelize.STRING,
    },
    learning: {
      type: Sequelize.STRING,
    },
    sleep: {
      type: Sequelize.STRING,
    },
    appetite: {
      type: Sequelize.STRING,
    },
    behaviour: {
      type: Sequelize.STRING,
    },
    other: {
      type: Sequelize.STRING,
    },
    comments: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = Concern;
