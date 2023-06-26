const mongoose = require("mongoose");
const {Schema}= mongoose;

const DaySchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  Segment: {
    type: Object,
  },  
});

module.exports = mongoose.model("Days", DaySchema);
