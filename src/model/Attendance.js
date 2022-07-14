const db = require("./../database/db");
const Sequelize = require("sequelize");

const Attendance = db.define(
  "Attendance",
  {
    ARID: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    chid: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    sessionID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    week: {
      type: Sequelize.STRING,
    },
    semesterId: {
      type: Sequelize.STRING,
    },
    attendance: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = Attendance;
