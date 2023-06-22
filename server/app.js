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

let p=[false,true,true,false,true];
// app.get('/api', (req, res) => {
//     res.send({"res":p})
//     // res.send({"l":"ghruhguf"})
// })

app.get('/update/', (req, res) => {
    res.send({"res":p})
    // res.send({"l":"ghruhguf"})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
  

// const connectToMongo = require('./db');
// connectToMongo();

