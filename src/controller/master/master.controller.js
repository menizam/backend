const masterDao = require("../../dao/master/master.dao");

const getLUFUIncome = async (req, res) => {
  const list = await masterDao.getLUFUIncome();
  return res.send(list);
};

const getLUSite = async (req, res) => {
  const list = await masterDao.getLUSite();
  return res.send(list);
};

const getLUReferralIn = async (req, res) => {
  const list = await masterDao.getLUReferralIn();
  return res.send(list);
};

const getLUJCSite = async (req, res) => {
  const list = await masterDao.getLUJCSite();
  return res.send(list);
};

const getLUEducation = async (req, res) => {
  const list = await masterDao.getLUEducation();
  return res.send(list);
};

const allMaster = async (req, res) => {
  const lufUIncome = await masterDao.getLUFUIncome();
  const luSite = await masterDao.getLUSite();
  const luReferralIn = await masterDao.getLUReferralIn();
  const lujcSite = await masterDao.getLUJCSite();
  const luEducation = await masterDao.getLUEducation();
  const asq3FormsT = await masterDao.getASQ3FormsT();
  const luQualRatingASQ3 = await masterDao.getLUQualRatingASQ3();
  const luQualRatingASQSE = await masterDao.getLUQualRatingASQSE();
  const asqseFormsT = await masterDao.getASQSEFormsT();
  const luCoordCall = await masterDao.getLUCoordCall();
  const luLearningActivities = await masterDao.getLULearningActivities();
  const luReasonsN = await masterDao.getLUReasonsN();
  const luAgency = await masterDao.getLUAgency();
  const luNames = await masterDao.getLUNames();
  const luFUCallResult = await masterDao.getLUFUCallResult();
  const luFUSatisfied = await masterDao.getLUFUSatisfied();
  const luReferralOut = await masterDao.getLUReferralOut();
  const semester = await masterDao.getSemester();
  const response = {
    lufUIncome,
    luSite,
    luReferralIn,
    lujcSite,
    luEducation,
    asq3FormsT,
    luQualRatingASQ3,
    luQualRatingASQSE,
    asqseFormsT,
    luCoordCall,
    luLearningActivities,
    luReasonsN,
    luAgency,
    luNames,
    luFUCallResult,
    luFUSatisfied,
    luReferralOut,
    semester,
  };
  return res.send(response);
};

const masterController = {
  getLUFUIncome,
  getLUSite,
  getLUReferralIn,
  getLUJCSite,
  getLUEducation,
  allMaster,
};

module.exports = masterController;
