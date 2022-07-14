const attendanceDao = require("./../dao/attendance.dao");

const createAttendanceForm = async (req, res) => {
  try {
    const form = req.body;

    const formInDbWithSession =
      await attendanceDao.geAttendanceFormByUserAndSessionId(
        form.chid,
        form.sessionID
      );

    if (formInDbWithSession) {
      //update
      const updatedForm = await attendanceDao.updateAttendanceForm(
        formInDbWithSession,
        form.chid,
        form
      );
      return res.send(updatedForm);
    }

    const createdForm = await attendanceDao.createAttendanceForm(form);
    if (createdForm) {
      return res.status(201).send(createdForm);
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const getAttendanceForm = async (req, res) => {
  try {
    const emailId = req.params.chid;
    const forms = await attendanceDao.fetchAttendanceForm(emailId);
    if (forms) {
      return res.send(forms);
    }
    return res.send({});
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const updateAttendanceForm = async (req, res) => {
  try {
    const form = req.body;
    const emailId = req.params.chid;
    if (form) {
      await attendanceDao.updateAttendanceForm(form, emailId);
      return res.status(204).send();
    }
    return res.status(400).send();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }
};

const attendanceController = {
  createAttendanceForm,
  getAttendanceForm,
  updateAttendanceForm,
};

module.exports = attendanceController;
