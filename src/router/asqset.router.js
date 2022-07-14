const express = require("express");
const router = express.Router();
const asqsetController = require("./../controller/asqset.controller");

router.post("/", asqsetController.createAsqsetForm);
router.get("/:chid", asqsetController.getAsqsetForm);
router.patch("/:chid", asqsetController.updateAsqsetForm);

module.exports = router;
