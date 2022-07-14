const express = require("express");
const router = express.Router();

const userController = require("./../controller/user.controller");

router.get("/", userController.findAllUsers);
router.get("/count", userController.getUserCounts);
router.get("/:uid", userController.findUserByUID);
router.patch("/:uid", userController.updateUser);
router.post("", userController.createUser);

module.exports = router;
