const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUQualRatingASQSE = db.define(
  "LUQualRatingASQSE",
  {
    ordr: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    idpCategory: {
      type: Sequalize.STRING,
    },
    asqse: {
      type: Sequalize.STRING,
    },
    luNotes: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = LUQualRatingASQSE;
