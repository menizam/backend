const express = require("express");
const router = express.Router();
const caseManagementCallTController = require("./../controller/caseManagementCallT.controller");

router.post("/", caseManagementCallTController.createCaseManagementCallTForm);
router.get("/:chid", caseManagementCallTController.getCaseManagementCallTForm);
router.patch(
  "/:chid",
  caseManagementCallTController.updateCaseManagementCallTForm
);

module.exports = router;
