const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUReasonsN = db.define(
  "LUReasonsN",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    reasonId: {
      type: Sequalize.STRING,
    },
    reasons: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = LUReasonsN;
