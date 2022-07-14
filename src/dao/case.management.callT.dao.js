const CaseManagementCallT = require("./../model/CaseManagementCallT");

const createCaseManagementCallTForm = async (form) => {
  const createdForm = await CaseManagementCallT.create({ ...form });
  return createdForm.toJSON();
};

const fetchCaseManagementCallTForm = async (emailId) => {
  const form = await CaseManagementCallT.findAll({ where: { chid: emailId } });
  if (form) {
    return form;
  }
  return null;
};

// const updateCaseManagementCallTForm = async (form, emailId) => {
//   const nonUpdatingProperty = ["caseMgmtCallTID"];
//   const updatingKeys = Object.keys(form);

//   const isValidUpdate = updatingKeys.every(
//     (el) => !nonUpdatingProperty.includes(el)
//   );

//   if (!isValidUpdate) {
//     throw "Can not update";
//   }

//   const updatingForm = await fetchCaseManagementCallTForm(emailId);

//   if (updatingForm) {
//     updatingKeys.forEach((key) => {
//       updatingForm[key] = form[key];
//     });

//     await CaseManagementCallT.update(updatingForm, {
//       where: { chid: emailId },
//     });
//     return updatingForm;
//   }

//   throw "form does not exists";
// };

const updateCaseManagementCallTForm = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await CaseManagementCallT.update(formFromDb, {
      where: { chid: emailId, sessionID: form.sessionID },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const getCaseManagementCallTFormByUserAndSessionId = async (
  emailId,
  sessionId
) => {
  const form = await CaseManagementCallT.findOne({
    where: { chid: emailId, sessionID: sessionId },
  });
  if (form) {
    return form.toJSON();
  }
  return null;
};

const caseManagementCallTFormDao = {
  createCaseManagementCallTForm,
  fetchCaseManagementCallTForm,
  updateCaseManagementCallTForm,
  getCaseManagementCallTFormByUserAndSessionId,
};

module.exports = caseManagementCallTFormDao;
