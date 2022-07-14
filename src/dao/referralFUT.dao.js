const ReferralFUT = require("./../model/ReferralFUT");

const createReferralFUTForm = async (form) => {
  const createdForm = await ReferralFUT.create({ ...form });
  return createdForm.toJSON();
};

const fetchReferralFUTForm = async (emailId) => {
  const form = await ReferralFUT.findAll({ where: { chid: emailId } });
  if (form) {
    return form;
  }
  return null;
};

// const updateReferralFUTForm = async (form, emailId) => {
//   const nonUpdatingProperty = ["referralFUTID"];
//   const updatingKeys = Object.keys(form);

//   const isValidUpdate = updatingKeys.every(
//     (el) => !nonUpdatingProperty.includes(el)
//   );

//   if (!isValidUpdate) {
//     throw "Can not update";
//   }

//   const updatingForm = await fetchReferralFUTForm(emailId);

//   if (updatingForm) {
//     updatingKeys.forEach((key) => {
//       updatingForm[key] = form[key];
//     });

//     await ReferralFUT.update(updatingForm, {
//       where: { chid: emailId },
//     });
//     return updatingForm;
//   }

//   throw "form does not exists";
// };

const updateReferralFUTForm = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await ReferralFUT.update(formFromDb, {
      where: { chid: emailId, sessionID: form.sessionID },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const getReferralFUTFormByUserAndSessionId = async (emailId, sessionId) => {
  const form = await ReferralFUT.findOne({
    where: { chid: emailId, sessionID: sessionId },
  });
  if (form) {
    return form.toJSON();
  }
  return null;
};

const referralFUTFormDao = {
  createReferralFUTForm,
  fetchReferralFUTForm,
  updateReferralFUTForm,
  getReferralFUTFormByUserAndSessionId,
};

module.exports = referralFUTFormDao;
