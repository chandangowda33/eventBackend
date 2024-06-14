const express = require("express");
const eventController = require("./../controller/eventController");

const router = express.Router();

router.route("/event").post(eventController.uploadEvent);

module.exports = router;
