const express = require("express");
const router = express.Router();
const moFUCallTController = require("./../controller/moFUCallT.controller");

router.post("/", moFUCallTController.createMoFUCallTForm);
router.get("/:chid", moFUCallTController.getMoFUCallTForm);
router.patch("/:chid", moFUCallTController.updateMoFUCallTForm);

module.exports = router;
