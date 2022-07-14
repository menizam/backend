const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUAgency = db.define(
  "LUAgency",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    agency: {
      type: Sequalize.STRING,
    },
    phoneNumber: {
      type: Sequalize.STRING,
    },
    contact: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUAgency;
