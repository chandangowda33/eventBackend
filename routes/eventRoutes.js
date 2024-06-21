const express = require("express");
const eventController = require("./../controller/eventController");

const router = express.Router();

router.route("/upload").post(eventController.uploadEvent);
router.route("/getEventByTheme/:eventName").get(eventController.getEventByName);
router.route("/getEventByID/:ID").get(eventController.getEventByID);

module.exports = router;
