const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUEducation = db.define(
  "LUEducation",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    education: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = LUEducation;
