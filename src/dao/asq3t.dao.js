const Asq3t = require("./../model/Asq3t");

const createAsq3tForm = async (form, user) => {
  const createdForm = await Asq3t.create({ ...form });
  return createdForm.toJSON();
};

const fetchAsq3tForm = async (emailId) => {
  const form = await Asq3t.findAll({ where: { chid: emailId } });
  if (form) {
    return form;
  }
  return null;
};

// const updateAsq3tForm = async (form, emailId) => {
//   const nonUpdatingProperty = ["asq3tId"];
//   const updatingKeys = Object.keys(form);

//   const isValidUpdate = updatingKeys.every(
//     (el) => !nonUpdatingProperty.includes(el)
//   );

//   if (!isValidUpdate) {
//     throw "Can not update";
//   }

//   const updatingForm = await fetchAsq3tForm(emailId);
//   if (updatingForm) {
//     updatingKeys.forEach((key) => {
//       updatingForm[key] = form[key];
//     });
//     await Asq3t.update(updatingForm, {
//       where: { chid: emailId },
//     });
//     return updatingForm;
//   }
//   throw "form does not exists";
// };

const updateAsq3tForm = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await Asq3t.update(formFromDb, {
      where: { chid: emailId, sessionId: form.sessionId },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const getAsq3tFormByUserAndSessionId = async (emailId, sessionId) => {
  const form = await Asq3t.findOne({
    where: { chid: emailId, sessionId },
  });
  if (form) {
    return form.toJSON();
  }
  return null;
};

const asq3tDao = {
  createAsq3tForm,
  fetchAsq3tForm,
  updateAsq3tForm,
  getAsq3tFormByUserAndSessionId,
};

module.exports = asq3tDao;
