const db = require("./../database/db");
const Sequalize = require("sequelize");

const ReferralFUT = db.define(
  "ReferralFUT",
  {
    chid: {
      type: Sequalize.STRING(255),
      allowNull: false,
    },
    referralFUTID: {
      type: Sequalize.UUID,
      defaultValue: Sequalize.UUIDV4,
      primaryKey: true,
    },
    sessionID: {
      type: Sequalize.INTEGER,
      allowNull: false,
    },
    externalReferral: {
      type: Sequalize.STRING(255),
    },
    learningActivities: {
      type: Sequalize.STRING(255),
    },
    refDate: {
      type: Sequalize.DATE,
    },
    extReflTyT1Ped: {
      type: Sequalize.STRING(255),
    },
    extReflTyT1ECI: {
      type: Sequalize.STRING(255),
    },
    extReflTyT1ChildFindPPCD: {
      type: Sequalize.STRING(255),
    },
    extReflTyT1Community: {
      type: Sequalize.STRING(255),
    },
    extReflTyT1Other: {
      type: Sequalize.STRING(255),
    },
    reasonExtRefT1Community: {
      type: Sequalize.STRING(255),
    },
    reasonExtRefT1ChildFindPPCD: {
      type: Sequalize.STRING(255),
    },
    reasonExtRefT1ECI: {
      type: Sequalize.STRING(255),
    },
    reasonExtRefT1Ped: {
      type: Sequalize.STRING(255),
    },
    reasonForExtRefT1Other: {
      type: Sequalize.STRING(255),
    },
    reasonForExtRefT1OtherSpecify: {
      type: Sequalize.STRING(255),
    },
    extRefAgencyT1ECI: {
      type: Sequalize.STRING(255),
    },
    extRefAgencyT1Community: {
      type: Sequalize.STRING(255),
    },
    extRefAgencyT1ChildFindPPCD: {
      type: Sequalize.STRING(255),
    },
    extRefAgencyT1Other: {
      type: Sequalize.STRING(255),
    },
    extRefAgencyT1PedOther: {
      type: Sequalize.STRING(255),
    },
    extRefAgencyT1Ped: {
      type: Sequalize.STRING(255),
    },
    refFUComments: {
      type: Sequalize.STRING(255),
    },
    reportMailed: {
      type: Sequalize.STRING(255),
    },
    reportMailedComm: {
      type: Sequalize.STRING(255),
    },
    parentUndecided: {
      type: Sequalize.STRING(255),
    },
    nbChangesRef: {
      type: Sequalize.STRING(255),
    },
    declinedECI: {
      type: Sequalize.STRING(255),
    },
    declinedPed: {
      type: Sequalize.STRING(255),
    },
    declinedChildFindPPCD: {
      type: Sequalize.STRING(255),
    },
    declinedCommunity: {
      type: Sequalize.STRING(255),
    },
    declinedOther: {
      type: Sequalize.STRING(255),
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = ReferralFUT;
