const express = require("express");
const router = express.Router();

const loginController = require("../controller/login.controller");

router.post("/", loginController.createUser);
router.get("/:username/:password", loginController.findByUsernameAndPassword);

module.exports = router;
