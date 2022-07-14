const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LULearningActivities = db.define(
  "LULearningActivities",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    laDomains: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LULearningActivities;
