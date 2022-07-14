const moFUCallTDao = require("./../dao/moFUCallT.dao");

const createMoFUCallTForm = async (req, res) => {
  try {
    const form = req.body;

    const formInDbWithSession =
      await moFUCallTDao.getMoFUCallTFormByUserAndSessionId(
        form.chid,
        form.sessionID
      );

    if (formInDbWithSession) {
      //update
      const updatedForm = await moFUCallTDao.updateMoFUCallTForm(
        formInDbWithSession,
        form.chid,
        form
      );
      return res.send(updatedForm);
    }

    const createdForm = await moFUCallTDao.createMoFUCallTForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const getMoFUCallTForm = async (req, res) => {
  try {
    const emailId = req.params.chid;
    const form = await moFUCallTDao.fetchMoFUCallTForm(emailId);
    if (form) {
      return res.send(form);
    }
    return res.send({});
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const updateMoFUCallTForm = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;
    if (form) {
      await moFUCallTDao.updateMoFUCallTForm(form, emailId);
      return res.status(204).send();
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const referralFUTController = {
  createMoFUCallTForm,
  getMoFUCallTForm,
  updateMoFUCallTForm,
};

module.exports = referralFUTController;
