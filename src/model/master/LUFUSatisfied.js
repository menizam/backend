const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUFUSatisfied = db.define(
  "LUFUSatisfied",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    satisfactionLevel: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUFUSatisfied;
