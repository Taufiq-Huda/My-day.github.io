const mongoose = require("mongoose");

const CATEGORY = {
  Economy: {
      field : "string",
      amount : "number",
      source : "string" 
  },
  ReligiousEvaluation : {
      work : "string",
      rating : "number"
  }, 
  Prayer : {
      time : "string",
      state : "boolean"
  },
}
class Event extends mongoose.SchemaType {
    constructor(key, options) {
      super(key, options, 'Event');
    }
  
    // `cast()` takes a parameter that can be anything. You need to validate the provided `val` and throw a `CastError` if you can't convert it.
    cast(val) {
      if(val.category){
        var i=0
        const che = Object.keys(CATEGORY[val.category]).reduce((acc, item)=>{
          var chekfield = (item== Object.keys(val.field)[i])
          var chektype = (Object.values(CATEGORY[val.category])[i]==typeof(Object.values(val.field)[i++]))
          // console.log(chekfield, chektype)
          return chekfield && chektype && acc
        }, true)
        if(!che){
          console.error("Event can't be recorded");
        }
        else{
          return val
        }
      }
    }
  }

module.exports = Event