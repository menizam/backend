const Sequelize = require("sequelize");
const db = require("./../database/db");

const Asq3t = db.define(
  "Asq3t",
  {
    asq3tId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    chid: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    sessionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    asq3YesNo: {
      type: Sequelize.STRING(255),
    },
    asq3TestDate: {
      type: Sequelize.DATE,
    },
    asq3Site: {
      type: Sequelize.STRING(255),
    },
    asq3Examiner: {
      type: Sequelize.STRING(255),
    },
    asq3AgeAtTest: {
      type: Sequelize.INTEGER,
    },
    asq3FormUsed: {
      type: Sequelize.STRING(255),
    },
    asq3Communication: {
      type: Sequelize.INTEGER,
    },
    asq3GM: {
      type: Sequelize.INTEGER,
    },
    asq3FM: {
      type: Sequelize.INTEGER,
    },
    asq3ProblemSolving: {
      type: Sequelize.INTEGER,
    },
    asq3Social: {
      type: Sequelize.INTEGER,
    },
    asq3CommunicationRating: {
      type: Sequelize.STRING(255),
    },
    asq3GMRating: {
      type: Sequelize.STRING(255),
    },
    asq3FMRating: {
      type: Sequelize.STRING(255),
    },
    asq3ProblemSolvingRating: {
      type: Sequelize.STRING(255),
    },
    asq3SocialRating: {
      type: Sequelize.STRING(255),
    },
    asq3Language: {
      type: Sequelize.STRING(255),
    },
    asq3Notes: {
      type: Sequelize.STRING(255),
    },
    autoChangeASQ3MMDD: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = Asq3t;
