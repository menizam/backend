const express = require("express");
const router = express.Router();
const referralFUTController = require("./../controller/referral.controller");

router.post("/", referralFUTController.createReferralFUTForm);
router.get("/:chid", referralFUTController.getReferralFUTForm);
router.patch("/:chid", referralFUTController.updatereferralFUTForm);

module.exports = router;
