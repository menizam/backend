const Sequelize = require("sequelize");
const db = require("./../database/db");

const Demographics = db.define(
  "demographic",
  {
    chid: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    sessionID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    demographicsTID: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    hasASQforIRBS19: {
      type: Sequelize.STRING(255),
    },
    jCRegDay: {
      type: Sequelize.DATE,
    },
    lateReg: {
      type: Sequelize.STRING(255),
    },
    lateRegWeeks: {
      type: Sequelize.STRING(255),
    },
    currentlyInJC: {
      type: Sequelize.STRING(255),
    },
    previouslyEnrolledSemester: {
      type: Sequelize.STRING(255),
    },
    jCSite: {
      type: Sequelize.STRING(255),
    },
    accAd: {
      type: Sequelize.STRING(255),
    },
    relChi: {
      type: Sequelize.STRING(255),
    },
    jCAdBefore: {
      type: Sequelize.STRING(255),
    },
    reasonReturn: {
      type: Sequelize.STRING(255),
    },
    birthWeight: {
      type: Sequelize.STRING(255),
    },
    premieYN: {
      type: Sequelize.STRING(255),
    },
    premieWks: {
      type: Sequelize.INTEGER,
    },
    gender: {
      type: Sequelize.STRING(255),
    },
    ethnicity: {
      type: Sequelize.STRING(255),
    },
    ethnicityOtherSpecify: {
      type: Sequelize.STRING(255),
    },
    homeLanguage: {
      type: Sequelize.STRING(255),
    },
    homeLangOtherSpecify: {
      type: Sequelize.STRING(255),
    },
    incomingReferralSource: {
      type: Sequelize.STRING(255),
    },
    incomingReferralSourceSpecify: {
      type: Sequelize.STRING(255),
    },
    incomingReferralReason: {
      type: Sequelize.STRING(255),
    },
    jCSource: {
      type: Sequelize.STRING(255),
    },
    jCSourceSchDay: {
      type: Sequelize.STRING(255),
    },
    jCReasonEnr: {
      type: Sequelize.STRING(255),
    },
    otherProgram: {
      type: Sequelize.STRING(255),
    },
    otherProgramSpecify: {
      type: Sequelize.STRING(255),
    },
    b4Program: {
      type: Sequelize.STRING(255),
    },
    medicalExam: {
      type: Sequelize.STRING(255),
    },
    medicalDate: {
      type: Sequelize.DATE,
    },
    medicalLocat: {
      type: Sequelize.STRING(255),
    },
    pedName: {
      type: Sequelize.STRING(255),
    },
    insurance: {
      type: Sequelize.STRING(255),
    },
    insuranceType: {
      type: Sequelize.STRING(255),
    },
    momAge: {
      type: Sequelize.STRING(255),
    },
    dadAge: {
      type: Sequelize.STRING(255),
    },
    contactNumber1: {
      type: Sequelize.INTEGER,
    },
    contactNumber2: {
      type: Sequelize.INTEGER,
    },
    momEmail: {
      type: Sequelize.STRING(255),
    },
    dadEmail: {
      type: Sequelize.STRING(255),
    },
    street: {
      type: Sequelize.STRING(255),
    },
    apt: {
      type: Sequelize.STRING(255),
    },
    city: {
      type: Sequelize.STRING(255),
    },
    zipcode: {
      type: Sequelize.STRING(255),
    },
    maritalStatus: {
      type: Sequelize.STRING(255),
    },
    matEd: {
      type: Sequelize.STRING(255),
    },
    patEd: {
      type: Sequelize.STRING(255),
    },
    workHours: {
      type: Sequelize.STRING(255),
    },
    hhnb: {
      type: Sequelize.INTEGER,
    },
    inprYr: {
      type: Sequelize.STRING(255),
    },
    knowsScreen: {
      type: Sequelize.STRING(255),
    },
    pastEval: {
      type: Sequelize.STRING(255),
    },
    pastEvalDate: {
      type: Sequelize.DATE,
    },
    pastEvalLocat: {
      type: Sequelize.STRING(255),
    },
    pastEvalLocatOther: {
      type: Sequelize.STRING(255),
    },
    pastEvalLocatSchDay: {
      type: Sequelize.STRING(255),
    },
    pastEvalReslt: {
      type: Sequelize.STRING(255),
    },
    comments: {
      type: Sequelize.STRING(255),
    },
    jCSourceOther: {
      type: Sequelize.STRING(255),
    },
    transport: {
      type: Sequelize.STRING(255),
    },
    transportOther: {
      type: Sequelize.STRING(255),
    },
    hasInsurance: {
      type: Sequelize.STRING(255),
    },
    insuranceIdNbr: {
      type: Sequelize.STRING(255),
    },
  },
  {
    updatedAt: false,
    createdAt: false,
    initialAutoIncrement: 1000,
  }
);

module.exports = Demographics;
