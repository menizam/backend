const db = require("./../../database/db");
const Sequalize = require("sequelize");

const LUReferralOut = db.define(
  "LUReferralOut",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    outgoingReferralReason: {
      type: Sequalize.STRING,
    },
    luNotes: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = LUReferralOut;
