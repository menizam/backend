const caseManagementCallTDao = require("./../dao/case.management.callT.dao");

const createCaseManagementCallTForm = async (req, res) => {
  try {
    const form = req.body;

    const formInDbWithSession =
      await caseManagementCallTDao.getCaseManagementCallTFormByUserAndSessionId(
        form.chid,
        form.sessionID
      );

    if (formInDbWithSession) {
      //update
      const updatedForm =
        await caseManagementCallTDao.updateCaseManagementCallTForm(
          formInDbWithSession,
          form.chid,
          form
        );
      return res.send(updatedForm);
    }

    const createdForm =
      await caseManagementCallTDao.createCaseManagementCallTForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const getCaseManagementCallTForm = async (req, res) => {
  try {
    const emailId = req.params.chid;
    const form = await caseManagementCallTDao.fetchCaseManagementCallTForm(
      emailId
    );
    if (form) {
      return res.send(form);
    }
    return res.send({});
  } catch (ex) {
    return res.status(500).send(ex);
  }
};

const updateCaseManagementCallTForm = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;
    if (form) {
      const updatedForm =
        await caseManagementCallTDao.updateCaseManagementCallTForm(
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

const caseManagementCallTController = {
  createCaseManagementCallTForm,
  getCaseManagementCallTForm,
  updateCaseManagementCallTForm,
};

module.exports = caseManagementCallTController;
