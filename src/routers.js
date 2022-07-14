const express = require("express");
const router = express.Router();
const loginRoutes = require("./router/login.router");
const userRoutes = require("./router/user.router");
const formRouter = require("./router/form.router");
const authentication = require("./middleware/auth");
const asq3tRouter = require("./router/asq3t.router");
const asqsetRouter = require("./router/asqset.router");
const caseManagementCallTRouter = require("./router/caseManagementCallT.router");
const referralFUTRouter = require("./router/referralFUT.router");
const moFUCallTRouter = require("./router/moFUCallT.router");
const attendanceRouter = require("./router/attendance.router");
const masterRouter = require("./router/master/master.router");
const concernRouter = require("./router/concern.router");

router.use("/login", loginRoutes);
router.use("/user", authentication, userRoutes);
router.use("/demographic", authentication, formRouter);
router.use("/asq3t", authentication, asq3tRouter);
router.use("/asqset", authentication, asqsetRouter);
router.use("/casemanagementcallt", authentication, caseManagementCallTRouter);
router.use("/referralfut", authentication, referralFUTRouter);
router.use("/mofucallt", authentication, moFUCallTRouter);
router.use("/master", authentication, masterRouter);
router.use("/attendance", authentication, attendanceRouter);
router.use("/concern", authentication, concernRouter);

module.exports = router;
