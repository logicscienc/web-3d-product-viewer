const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { uploadModel } = require("../controllers/Upload");

router.post(
  "/upload",
  upload.single("file"),
  uploadModel
);

module.exports = router;