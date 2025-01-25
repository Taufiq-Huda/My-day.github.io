const express = require("express");
const app = express()
const port= 4000
const cors = require('cors');
const path = require("path");
const connectToMongo=require("./db")


app.use(cors());

app.use(express.json())

connectToMongo()

app.use("/api/auth", require(path.join(__dirname, "routes/auth.js")));

app.use("/api/newpage", require(path.join(__dirname, "routes/newpage.js")));

app.use("/api/history", require(path.join(__dirname, "routes/history.js")));

app.use("/api/event", require(path.join(__dirname, "routes/event.js")));

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
  

// const connectToMongo = require('./db');
// connectToMongo();

