const Demographics = require("./../model/Demographics");

const createDemographicForm = async (form) => {
  const createdUser = await Demographics.create({ ...form });
  return createdUser.toJSON();
};

const updateDemographicFormByUser = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await Demographics.update(formFromDb, {
      where: { chid: emailId, sessionID: form.sessionID },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const getDemographicFormByUser = async (emailId) => {
  const form = await Demographics.findAll({ where: { chid: emailId } });

  if (form) {
    return form;
  }
  return null;
};

const getDemographicFormByUserAndSessionId = async (emailId, sessionId) => {
  const form = await Demographics.findOne({
    where: { chid: emailId, sessionId },
  });
  if (form) {
    return form.toJSON();
  }
  return null;
};

const formDao = {
  createDemographicForm,
  getDemographicFormByUser,
  updateDemographicFormByUser,
  getDemographicFormByUserAndSessionId,
};

module.exports = formDao;
