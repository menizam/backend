const Concern = require("./../model/Concern");

const createConcernForm = async (form) => {
  const createdForm = await Concern.create({ ...form });
  return createdForm.toJSON();
};

const fetchConcernForm = async (emailId) => {
  const form = await Concern.findAll({ where: { chid: emailId } });
  if (form) {
    return form;
  }
  return null;
};

const updateConcernForm = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await Concern.update(formFromDb, {
      where: { chid: emailId, sessionID: form.sessionID },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const getConcernFormByUserAndSessionId = async (emailId, sessionId) => {
  const form = await Concern.findOne({
    where: { chid: emailId, sessionID: sessionId },
  });

  if (form) {
    return form.toJSON();
  }
  return null;
};

const concernFormDao = {
  createConcernForm,
  fetchConcernForm,
  updateConcernForm,
  getConcernFormByUserAndSessionId,
};

module.exports = concernFormDao;
