const express = require("express");
const router = express.Router();

const formController = require("./../controller/form.controller");

router.post("/", formController.createDemographicForm);
router.get("/:chid", formController.getDemographicFormByEmail);
router.patch("/:chid", formController.updateDemographicFormByEmail);

module.exports = router;
