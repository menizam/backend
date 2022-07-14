//const Asqset = require("./../model/Asqset");
const Attendance = require("./../model/Attendance");

const createAttendanceForm = async (form) => {
  const createdForm = await Attendance.create({ ...form });
  return createdForm.toJSON();
};

const fetchAttendanceForm = async (emailId) => {
  const form = await Attendance.findAll({ where: { chid: emailId } });
  if (form) {
    return form;
  }
  return null;
};

const updateAttendanceForm = async (formFromDb, emailId, form) => {
  const updateKeys = Object.keys(form);

  if (form) {
    updateKeys.forEach((key) => {
      formFromDb[key] = form[key];
    });

    await Attendance.update(formFromDb, {
      where: { chid: emailId, sessionID: form.sessionID },
    });
    return formFromDb;
  }
  throw "form does not exists";
};

const geAttendanceFormByUserAndSessionId = async (emailId, sessionId) => {
  const form = await Attendance.findOne({
    where: { chid: emailId, sessionID: sessionId },
  });

  if (form) {
    return form.toJSON();
  }
  return null;
};

const attendanceFormDao = {
  createAttendanceForm,
  fetchAttendanceForm,
  updateAttendanceForm,
  geAttendanceFormByUserAndSessionId,
};

module.exports = attendanceFormDao;
