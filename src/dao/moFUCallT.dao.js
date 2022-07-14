const MoFUCallT = require("./../model/MoFUCallT");

const createMoFUCallTForm = async (form) => {
  const createdForm = await MoFUCallT.create({ ...form });
  return createdForm.toJSON();
};

const fetchMoFUCallTForm = async (emailId) => {
  const form = await MoFUCallT.findAll({ where: { chid: emailId } });
  if (form) {
    return form;
  }
  return null;
};

// const updateMoFUCallTForm = async (form, emailId) => {
//   const nonUpdatingProperty = ["moFUCallID"];

//   const updatingKeys = Object.keys(form);

//   const isValidUpdate = updatingKeys.every(
//     (el) => !nonUpdatingProperty.includes(el)
//   );

//   if (!isValidUpdate) {
//     throw "Can not update";
//   }

//   const updatingForm = await fetchMoFUCallTForm(emailId);

//   if (updatingForm) {
//     updatingKeys.forEach((key) => {
//       updatingForm[key] = form[key];
//     });

//     await MoFUCallT.update(updatingForm, {
//       where: { chid: emailId },
//     });
//     return updatingForm;
//   }

//   throw "form does not exists";
// };

const updateMoFUCallTForm = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await MoFUCallT.update(formFromDb, {
      where: { chid: emailId, sessionID: form.sessionID },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const getMoFUCallTFormByUserAndSessionId = async (emailId, sessionId) => {
  const form = await MoFUCallT.findOne({
    where: { chid: emailId, sessionID: sessionId },
  });
  if (form) {
    return form.toJSON();
  }
  return null;
};

const moFUCallTDao = {
  createMoFUCallTForm,
  fetchMoFUCallTForm,
  updateMoFUCallTForm,
  getMoFUCallTFormByUserAndSessionId,
};

module.exports = moFUCallTDao;
