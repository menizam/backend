const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUNames = db.define(
  "LUNames",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    fullNameFL: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUNames;
