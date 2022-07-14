const LUFUIncome = require("../../model/master/LUFUIncome");
const LUSite = require("./../../model/master/LUSite");
const LUReferralIn = require("./../../model/master/LUReferralIn");
const LUJCSite = require("./../../model/master/LUJCSite");
const LUEducation = require("./../../model/master/LUEducation");
const ASQ3FormsT = require("./../../model/master/ASQ3FormsT");
const LUQualRatingASQ3 = require("./../../model/master/LUQualRatingASQ3");
const LUQualRatingASQSE = require("./../../model/master/LUQualRatingASQSE");
const ASQSEFormsT = require("./../../model/master/ASQSEFormsT");
const LUCoordCall = require("./../../model/master/LUCoordCall");
const LULearningActivities = require("./../../model/master/LULearningActivities");
const LUReasonsN = require("./../../model/master/LUReasonsN");
const LUAgency = require("./../../model/master/LUAgency");
const LUNames = require("./../../model/master/LUNames");
const LUFUCallResult = require("./../../model/master/LUFUCallResult");
const LUFUSatisfied = require("./../../model/master/LUFUSatisfied");
const LUReferralOut = require("./../../model/master/LUReferralOut");
const Semester = require("./../../model/master/Semester");

const getLUFUIncome = async () => {
  const masterList = await LUFUIncome.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getLUSite = async () => {
  const masterList = await LUSite.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getLUReferralIn = async () => {
  const masterList = await LUReferralIn.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getLUJCSite = async () => {
  const masterList = await LUJCSite.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getLUEducation = async () => {
  const masterList = await LUEducation.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getASQ3FormsT = async () => {
  const masterList = await ASQ3FormsT.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getASQSEFormsT = async () => {
  const masterList = await ASQSEFormsT.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getLUQualRatingASQ3 = async () => {
  const masterList = await LUQualRatingASQ3.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getLUQualRatingASQSE = async () => {
  const masterList = await LUQualRatingASQSE.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLUCoordCall = async () => {
  const masterList = await LUCoordCall.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLULearningActivities = async () => {
  const masterList = await LULearningActivities.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLUReasonsN = async () => {
  const masterList = await LUReasonsN.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLUAgency = async () => {
  const masterList = await LUAgency.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLUNames = async () => {
  const masterList = await LUNames.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLUFUCallResult = async () => {
  const masterList = await LUFUCallResult.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLUFUSatisfied = async () => {
  const masterList = await LUFUSatisfied.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};
const getLUReferralOut = async () => {
  const masterList = await LUReferralOut.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const getSemester = async () => {
  const masterList = await Semester.findAll();
  if (!masterList) {
    return [];
  }
  return masterList;
};

const masterDao = {
  getLUFUIncome,
  getLUSite,
  getLUReferralIn,
  getLUJCSite,
  getLUEducation,
  getASQ3FormsT,
  getLUQualRatingASQ3,
  getLUQualRatingASQSE,
  getASQSEFormsT,
  getLUCoordCall,
  getLULearningActivities,
  getLUReasonsN,
  getLUAgency,
  getLUNames,
  getLUFUCallResult,
  getLUFUSatisfied,
  getLUReferralOut,
  getSemester,
};

module.exports = masterDao;
