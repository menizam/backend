const concernDao = require("./../dao/concern.dao");

const createConcernForm = async (req, res) => {
  try {
    const form = req.body;

    const formInDbWithSession =
      await concernDao.getConcernFormByUserAndSessionId(
        form.chid,
        form.sessionID
      );

    if (formInDbWithSession) {
      //update
      const updatedForm = await concernDao.updateConcernForm(
        formInDbWithSession,
        form.chid,
        form
      );
      return res.send(updatedForm);
    }

    const createdForm = await concernDao.createConcernForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const getConcernForm = async (req, res) => {
  try {
    const emailId = req.params.chid;
    const forms = await concernDao.fetchConcernForm(emailId);
    if (forms) {
      return res.send(forms);
    }
    return res.send({});
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const updateConcernForm = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;
    if (form) {
      await concernDao.updateConcernForm(form, emailId);
      return res.status(204).send();
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const concernController = {
  createConcernForm,
  getConcernForm,
  updateConcernForm,
};

module.exports = concernController;
