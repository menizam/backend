const Asqset = require("./../model/Asqset");

const createAsqsetForm = async (form) => {
  const createdForm = await Asqset.create({ ...form });
  return createdForm.toJSON();
};

const fetchAsqsetForm = async (emailId) => {
  const form = await Asqset.findAll({ where: { chid: emailId } });
  if (form) {
    return form;
  }
  return null;
};

// const updateAsqsetForm = async (form, emailId) => {
//   const nonUpdatingProperty = ["asqSETID"];
//   const updatingKeys = Object.keys(form);

//   const isValidUpdate = updatingKeys.every(
//     (el) => !nonUpdatingProperty.includes(el)
//   );

//   if (!isValidUpdate) {
//     throw "Can not update";
//   }

//   const updatingForm = await fetchAsqsetForm(emailId);

//   if (updatingForm) {
//     updatingKeys.forEach((key) => {
//       updatingForm[key] = form[key];
//     });

//     await Asqset.update(updatingForm, {
//       where: { chid: emailId },
//     });
//     return updatingForm;
//   }

//   throw "form does not exists";
// };

const updateAsqsetForm = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await Asqset.update(formFromDb, {
      where: { chid: emailId, sessionID: form.sessionID },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const getAsqsetFormByUserAndSessionId = async (emailId, sessionId) => {
  const form = await Asqset.findOne({
    where: { chid: emailId, sessionID: sessionId },
  });
  if (form) {
    return form.toJSON();
  }
  return null;
};

const asqsetDao = {
  createAsqsetForm,
  fetchAsqsetForm,
  updateAsqsetForm,
  getAsqsetFormByUserAndSessionId,
};

module.exports = asqsetDao;
