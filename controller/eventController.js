const Event = require("./../model/eventModel");

exports.uploadEvent = async (req, res, next) => {
  // console.log(req.body);
  const event = new Event(req.body);
  try {
    await event.save();
    res.status(200).json({
      status: "Success",
      message: "Your Event Saved Successfully",
      event: req.body,
    });
    // .send(event);
  } catch (error) {
    res
      .status(400)
      .json({
        status: "Failed",
        message: "Something went wrong",
      })
      .then(() => console.log(error));
  }
};

exports.getEvent = async (req, res, next) => {
  try {
    const eventDetails = await Event.find({
      eventName: `${req.params.eventName}`,
    });

    res.status(200).json({
      status: "success",
      eventDetails,
    });
  } catch (err) {
    console.log(err);
  }
};
