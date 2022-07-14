const asqsetDao = require("./../dao/asqset.dao");

const createAsqsetForm = async (req, res) => {
  try {
    const form = req.body;

    const formInDbWithSession = await asqsetDao.getAsqsetFormByUserAndSessionId(
      form.chid,
      form.sessionID
    );

    if (formInDbWithSession) {
      //update
      const updatedForm = await asqsetDao.updateAsqsetForm(
        formInDbWithSession,
        form.chid,
        form
      );
      return res.send(updatedForm);
    }

    const createdForm = await asqsetDao.createAsqsetForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const getAsqsetForm = async (req, res) => {
  try {
    const emailId = req.params.chid;
    const forms = await asqsetDao.fetchAsqsetForm(emailId);
    if (forms) {
      return res.send(forms);
    }
    return res.send({});
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const updateAsqsetForm = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;
    if (form) {
      await asqsetDao.updateAsqsetForm(form, emailId);
      return res.status(204).send();
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const asqsetController = { createAsqsetForm, getAsqsetForm, updateAsqsetForm };

module.exports = asqsetController;
