const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUFUCallResult = db.define(
  "LUFUCallResult",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    callResult: {
      type: Sequalize.STRING,
    },
    lu_Notes: { type: Sequalize.STRING },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUFUCallResult;
