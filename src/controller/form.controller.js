const formDao = require("./../dao/form.dao");

const createDemographicForm = async (req, res) => {
  try {
    const form = req.body;
    if (form.demographicsTID) {
      delete form.demographicsTID;
    }

    const formInDbWithSession =
      await formDao.getDemographicFormByUserAndSessionId(
        form.chid,
        form.sessionID
      );

    if (formInDbWithSession) {
      //update
      const updatedForm = await formDao.updateDemographicFormByUser(
        formInDbWithSession,
        form.chid,
        form
      );
      return res.send(updatedForm);
    }

    const createdForm = await formDao.createDemographicForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const getDemographicFormByEmail = async (req, res) => {
  try {
    const user = req.params.chid;
    const form = await formDao.getDemographicFormByUser(user);

    if (form) {
      return res.send(form);
    }
    return res.send({});
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const updateDemographicFormByEmail = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;

    if (form) {
      const updatedForm = await formDao.updateDemographicFormByUser(
        form,
        emailId
      );
      return res.send(updatedForm);
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const formController = {
  createDemographicForm,
  getDemographicFormByEmail,
  updateDemographicFormByEmail,
};

module.exports = formController;
