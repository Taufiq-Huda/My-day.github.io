const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://taufiq2002:TPaZwBbNunY58zp9@playground.tlr8hkg.mongodb.net/MyDay?retryWrites=true&w=majority";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI).then(()=>{
    
  }).catch((err)=>{
    console.log(err)
  });
};

module.exports = connectToMongo;
