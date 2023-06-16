const express = require("express");
const app = express()
const port= 4000
const cors = require('cors');


app.use(cors());

let p=[false,true,true,false,true];
app.get('/api', (req, res) => {
    res.send({"res":p})
    // res.send({"l":"ghruhguf"})
})

app.get('/update/', (req, res) => {
    res.send({"res":p})
    // res.send({"l":"ghruhguf"})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
  