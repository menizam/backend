const asq3tDao = require("./../dao/asq3t.dao");

const createAsq3tForm = async (req, res) => {
  try {
    const form = req.body;
    // if (form.asq3tId) {
    //   delete form.asq3tId;
    // }

    const formInDbWithSession = await asq3tDao.getAsq3tFormByUserAndSessionId(
      form.chid,
      form.sessionId
    );

    if (formInDbWithSession) {
      //update
      const updatedForm = await asq3tDao.updateAsq3tForm(
        formInDbWithSession,
        form.chid,
        form
      );
      return res.send(updatedForm);
    }

    const createdForm = await asq3tDao.createAsq3tForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(402).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const getAsq3tForm = async (req, res) => {
  try {
    const emailId = req.params.chid;
    const forms = await asq3tDao.fetchAsq3tForm(emailId);

    if (forms) {
      return res.send(forms);
    }
    return res.send({});
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const updateAsqtForm = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;
    if (form) {
      await asq3tDao.updateAsq3tForm(form, emailId);
      return res.status(204).send();
    }
    return res.status(401).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const asq3tController = { createAsq3tForm, getAsq3tForm, updateAsqtForm };

module.exports = asq3tController;
