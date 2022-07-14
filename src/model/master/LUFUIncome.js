const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUFUIncome = db.define(
  "LUFUIncome",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    incomeBracket: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUFUIncome;
