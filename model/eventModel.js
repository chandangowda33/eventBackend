const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventTheme: String,
  eventItems: [String],
  eventPrice: String,
  eventImageUrls: [String],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
