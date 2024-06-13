const Event = require("./../model/eventModel");

exports.uploadEvent = async (req, res, next) => {
  try {
    console.log(req.body);
    const event = new Event(req.body);
    try {
      await event.save().then(() => console.log(event));
      res.status(201);
      // .send(event);
    } catch (error) {
      res.status(400).send(error);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getEvent = exports.uploadEvent = async (req, res, next) => {
  res.status(201).send("Hii");
};
