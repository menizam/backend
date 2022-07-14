const db = require("./../database/db");
const Sequalize = require("sequelize");

const MoFUCallT = db.define(
  "1MoFUCallT",
  {
    moFUCallID: {
      type: Sequalize.UUID,
      defaultValue: Sequalize.UUIDV4,
      primaryKey: true,
    },
    chid: {
      type: Sequalize.STRING(255),
      allowNull: false,
    },
    sessionID: {
      type: Sequalize.INTEGER,
      allowNull: false,
    },
    callerCall11m: {
      type: Sequalize.STRING(255),
    },
    callerCall21m: {
      type: Sequalize.STRING(255),
    },
    callerCall31m: {
      type: Sequalize.STRING(255),
    },
    callerCall41m: {
      type: Sequalize.STRING(255),
    },
    callerCall51m: {
      type: Sequalize.STRING(255),
    },
    dateCall11m: {
      type: Sequalize.DATE,
    },
    dateCall21m: {
      type: Sequalize.DATE,
    },
    dateCall31m: {
      type: Sequalize.DATE,
    },
    dateCall41m: {
      type: Sequalize.DATE,
    },
    dateCall51m: {
      type: Sequalize.DATE,
    },
    statusCall11m: {
      type: Sequalize.STRING(255),
    },
    statusCall21m: {
      type: Sequalize.STRING(255),
    },
    statusCall31m: {
      type: Sequalize.STRING(255),
    },
    statusCall41m: {
      type: Sequalize.STRING(255),
    },
    statusCall51m: {
      type: Sequalize.STRING(255),
    },
    finalStatus1m: {
      type: Sequalize.STRING(255),
    },
    satisfAssess1m: {
      type: Sequalize.STRING(255),
    },
    satisfAssessComm1m: {
      type: Sequalize.STRING(255),
    },
    receiveReport1m: {
      type: Sequalize.STRING(255),
    },
    satisfReport1m: {
      type: Sequalize.STRING(255),
    },
    reportUnderst1m: {
      type: Sequalize.STRING(255),
    },
    reportClear1m: {
      type: Sequalize.STRING(255),
    },
    activUseful1m: {
      type: Sequalize.STRING(255),
    },
    clearWhy1m: {
      type: Sequalize.STRING(255),
    },
    servReceived1m: {
      type: Sequalize.STRING(255),
    },
    reasonNot1m: {
      type: Sequalize.STRING(255),
    },
    reasonOther1m: {
      type: Sequalize.STRING(255),
    },
    typeServ1m: {
      type: Sequalize.STRING(255),
    },
    typeServComm1m: {
      type: Sequalize.STRING(255),
    },
    parentSuggest1m: {
      type: Sequalize.STRING(255),
    },
    parentSuggest1mComm: {
      type: Sequalize.STRING(255),
    },
    parentQs1m: {
      type: Sequalize.STRING(255),
    },
    parentQs1mComm: {
      type: Sequalize.STRING(255),
    },
    idPComm1m: {
      type: Sequalize.STRING(255),
    },
    referralComm1m: {
      type: Sequalize.STRING(255),
    },
    satisfSupport1m: {
      type: Sequalize.STRING(255),
    },
    supportUTDYN1m: {
      type: Sequalize.STRING(255),
    },
    refAgencyYN1m: {
      type: Sequalize.STRING(255),
    },
    reportComm1m: {
      type: Sequalize.STRING(255),
    },
    needsFUReport1m: {
      type: Sequalize.ENUM,
      values: ["Yes", "No"],
    },
    needsFUReport1mComm: {
      type: Sequalize.STRING(255),
    },
    call11mComm: {
      type: Sequalize.STRING(255),
    },
    call21mComm: {
      type: Sequalize.STRING(255),
    },
    call31mComm: {
      type: Sequalize.STRING(255),
    },
    call41mComm: {
      type: Sequalize.STRING(255),
    },
    call51mComm: {
      type: Sequalize.STRING(255),
    },
    recommUse1m: {
      type: Sequalize.STRING(255),
    },
    mostLike1m: {
      type: Sequalize.STRING(255),
    },
    leastLike1m: {
      type: Sequalize.STRING(255),
    },
    externalReferral: {
      type: Sequalize.STRING(255),
    },
    maxofRefDate: {
      type: Sequalize.DATE,
    },
    needsFUReferral1m: {
      type: Sequalize.STRING,
    },
    needsFUIDPFeedback1m: {
      type: Sequalize.STRING,
    },
    needsFUReferral1mComm: {
      type: Sequalize.STRING,
    },
    needsFUIDPFeedback1mComm: {
      type: Sequalize.STRING,
    },
  },
  { freezeTableName: true, updatedAt: false, createdAt: false }
);

module.exports = MoFUCallT;
