const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUSite = db.define(
  "LUSite",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    siteShort: {
      type: Sequalize.STRING,
    },
    site: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = LUSite;
