const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUJCSite = db.define(
  "LUJCSite",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    jcSite: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUJCSite;
