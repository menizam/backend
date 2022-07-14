const db = require("./../database/db");
const Sequelize = require("sequelize");

const Asqset = db.define(
  "Asqset",
  {
    asqSETID: {
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
    asqSEYesNo: {
      type: Sequelize.STRING(255),
    },
    asqSEUsed: {
      type: Sequelize.STRING(255),
    },
    asqSETestDate: {
      type: Sequelize.DATE,
    },
    asqSESite: {
      type: Sequelize.STRING(255),
    },
    asqSEExaminer: {
      type: Sequelize.STRING(255),
    },
    asqSEAgeAtTest: {
      type: Sequelize.STRING(255),
    },
    asqSEFormUsed: {
      type: Sequelize.STRING(255),
    },
    asqSEp3: {
      type: Sequelize.STRING(255),
    },
    asqSEp4: {
      type: Sequelize.STRING(255),
    },
    asqSEp5: {
      type: Sequelize.STRING(255),
    },
    asqSEp6: {
      type: Sequelize.STRING(255),
    },
    asqSEp7: {
      type: Sequelize.STRING(255),
    },
    asqSETot: {
      type: Sequelize.STRING(255),
    },
    asqSERating: {
      type: Sequelize.STRING(255),
    },
    asqSELanguage: {
      type: Sequelize.STRING(255),
    },
    asqSENotes: {
      type: Sequelize.STRING(255),
    },
    autoChangeASQSEMMDD: {
      type: Sequelize.STRING,
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = Asqset;
