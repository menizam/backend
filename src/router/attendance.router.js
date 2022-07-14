const express = require("express");
const router = express.Router();
const attendanceController = require("./../controller/attendance.controller");

router.post("/", attendanceController.createAttendanceForm);
router.get("/:chid", attendanceController.getAttendanceForm);
router.patch("/:chid", attendanceController.updateAttendanceForm);

module.exports = router;
