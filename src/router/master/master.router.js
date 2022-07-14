const express = require("express");
const router = express.Router();
const masterController = require("./../../controller/master/master.controller");

router.get("/lufuincome", masterController.getLUFUIncome);
router.get("/lusite", masterController.getLUSite);
router.get("/lureferralin", masterController.getLUReferralIn);
router.get("/lujcsite", masterController.getLUJCSite);
router.get("/lueducation", masterController.getLUEducation);
router.get("/all", masterController.allMaster);

module.exports = router;
