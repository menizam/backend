const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUCoordCall = db.define(
  "LUCoordCall",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    coordCallDescription: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUCoordCall;
