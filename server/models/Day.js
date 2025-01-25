const mongoose = require("mongoose");
const {Schema}= mongoose;
const Event = require("../types/event")

// Don't forget to add `Int8` to the type registry
mongoose.Schema.Types.Event = Event;

const DaySchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: String,
    required: true,
  },
  Events : {
    type: [Event],
  },  
});

module.exports = mongoose.model("Days", DaySchema);
