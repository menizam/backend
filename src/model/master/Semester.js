const db = require("./../../database/db");
const Sequalize = require("sequelize");

const Semester = db.define(
  "Semester",
  {
    semesterId: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    description: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = Semester;
