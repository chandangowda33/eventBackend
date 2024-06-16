const express = require("express");
const eventController = require("./../controller/eventController");

const router = express.Router();

router.route("/upload").post(eventController.uploadEvent);
router.route("/getEvent/:eventName").get(eventController.getEvent);

module.exports = router;
