const express = require("express");
const router = express.Router();
const concernController = require("./../controller/concern.controller");

router.post("/", concernController.createConcernForm);
router.get("/:chid", concernController.getConcernForm);
router.patch("/:chid", concernController.updateConcernForm);

module.exports = router;
