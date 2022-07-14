const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUQualRatingASQ3 = db.define(
  "LUQualRatingASQ3",
  {
    ordr: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    idpCategory: {
      type: Sequalize.STRING,
    },
    asqCategory: {
      type: Sequalize.STRING,
    },
    luNotes: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = LUQualRatingASQ3;
