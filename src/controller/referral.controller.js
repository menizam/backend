const referralFUTDao = require("./../dao/referralFUT.dao");

const createReferralFUTForm = async (req, res) => {
  try {
    const form = req.body;

    const formInDbWithSession =
      await referralFUTDao.getReferralFUTFormByUserAndSessionId(
        form.chid,
        form.sessionID
      );

    if (formInDbWithSession) {
      //update
      const updatedForm = await referralFUTDao.updateReferralFUTForm(
        formInDbWithSession,
        form.chid,
        form
      );
      return res.send(updatedForm);
    }

    const createdForm = await referralFUTDao.createReferralFUTForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(400).send();
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const getReferralFUTForm = async (req, res) => {
  try {
    const emailId = req.params.chid;
    const form = await referralFUTDao.fetchReferralFUTForm(emailId);
    if (form) {
      return res.send(form);
    }
    return res.send({});
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const updatereferralFUTForm = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;
    if (form) {
      await referralFUTDao.updateReferralFUTForm(form, emailId);
      return res.status(204).send();
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const referralFUTController = {
  createReferralFUTForm,
  getReferralFUTForm,
  updatereferralFUTForm,
};

module.exports = referralFUTController;
