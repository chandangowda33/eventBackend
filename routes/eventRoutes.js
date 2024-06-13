const express = require("express");
const eventController = require("./../controller/eventController");

const router = express.Router();

router.route("/event").post(eventController.uploadEvent);
router.route("/event").get(eventController.getEvent);

module.exports = router;
