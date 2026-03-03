const express = require("express");
const router = express.Router();

const {
  saveSettings,
  getSettingsByModel,
  getLatestSettings
} = require("../controllers/Settings");

router.post("/", saveSettings);
router.get("/", getLatestSettings);
router.get("/:modelId", getSettingsByModel);

module.exports = router;