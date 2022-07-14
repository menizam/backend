const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUReferralIn = db.define(
  "LUReferralIn",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    idpCode: {
      type: Sequalize.STRING,
    },
    incomingReferralReason: {
      type: Sequalize.STRING,
    },
    luNotes: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = LUReferralIn;
