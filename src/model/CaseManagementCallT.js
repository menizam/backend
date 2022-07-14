const db = require("./../database/db");
const Sequalize = require("sequelize");

const CaseManagementCallT = db.define(
  "CaseManagementCallT",
  {
    chid: { type: Sequalize.STRING(255), allowNull: false },
    caseMgmtCallTID: {
      type: Sequalize.UUID,
      primaryKey: true,
      defaultValue: Sequalize.UUIDV4,
    },
    sessionID: {
      type: Sequalize.INTEGER,
      allowNull: false,
    },
    callCoordProgressNbr11: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt11: {
      type: Sequalize.STRING(255),
    },
    caseManagementCallComm: {
      type: Sequalize.STRING(255),
    },
    caseManagementCallDate: {
      type: Sequalize.DATE,
    },
    caseManagementCallStatus: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr12: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt12: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr13: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt13: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr14: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt14: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr15: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt15: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr16: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt16: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressOther1: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressOther2: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressOther3: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressOther4: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr21: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt21: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr22: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt22: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr23: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt23: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr24: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt24: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr25: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt25: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr26: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt26: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr31: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt31: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr32: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt32: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr33: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt33: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr34: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt34: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr35: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt35: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr36: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt36: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr41: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt41: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr42: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt42: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr43: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt43: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr44: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt44: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr45: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt45: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressNbr46: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressTxt46: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressBy1: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressBy2: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressBy3: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressBy4: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressFinal1: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressFinal2: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressFinal3: {
      type: Sequalize.STRING(255),
    },
    callCoordProgressFinal4: {
      type: Sequalize.STRING(255),
    },
    pcpName: {
      type: Sequalize.STRING(255),
    },
    pcpPhone: {
      type: Sequalize.STRING(255),
    },
  },
  { freezeTableName: true, createdAt: false, updatedAt: false }
);

module.exports = CaseManagementCallT;
