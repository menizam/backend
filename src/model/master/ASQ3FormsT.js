const db = require("./../../database/db");
const Sequalize = require("sequelize");

const ASQ3FormsT = db.define(
  "ASQ3FormsT",
  {
    asq3Form: {
      type: Sequalize.STRING,
    },
    formOrder: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = ASQ3FormsT;
