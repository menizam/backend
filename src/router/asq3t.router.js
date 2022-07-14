const express = require("express");
const router = express.Router();
const asq3tController = require("./../controller/asq3t.controller");

router.post("/", asq3tController.createAsq3tForm);
router.get("/:chid", asq3tController.getAsq3tForm);
router.patch("/:chid", asq3tController.updateAsqtForm);

module.exports = router;
