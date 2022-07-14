const db = require("./../../database/db");
const Sequalize = require("sequelize");

const ASQSEFormsT = db.define(
  "ASQSEFormsT",
  {
    asqseForm: {
      type: Sequalize.STRING,
    },
    formOrder: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = ASQSEFormsT;
