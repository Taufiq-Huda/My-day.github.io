const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const Day = require("../models/Day");

let today = new Date();
today = today.toISOString().split("T")[0];

const CATEGORY = {
  Economy: {
    field: "string",
    amount: "number",
    source: "string",
  },
  ReligiousEvaluation: {
    work: "string",
    rating: "number",
  },
  Prayer: {
    time: "string",
    state: "boolean",
  },
};


router.post("/new/:category", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const page = await Day.findOne({ date: today, user: userId });

    if (!page) {
      console.log("create");
      await Day.create({
        user: userId,
        date: today,
        Events: [
          {
            category: req.params.category,
            field: JSON.parse(req.header("fields")),
          },
        ],
      });
    } else {
      const evets = page.Events;
    //   console.log(JSON.parse(req.header("fields")), "kno");
      evets.push({
        category: req.params.category,
        field: JSON.parse(req.header("fields")),
      });
    //   console.log(evets, "after");
      await Day.findOneAndUpdate(
        { date: today, user: userId },
        { Events: evets }
      );
    }

    res.json({
      status: "ok",
      category: req.params.category,
      field: JSON.parse(req.header("fields")),
    });
  } catch (error) {
    console.error(error.message, "addpair");
    res.status(500).send("Internal Server Error");
  }
});

router.get("/fields/:category/", async (req, res) => {
  try {
    res.json({ status: "ok", fields: CATEGORY[req.params.category] });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


router.post("/update/:category/", fetchuser, async (req, res) => {
      const  {segment,block,index,type,value}=req.params
      try {
        userId = req.user.id;
        const page = await Day.findOne({ date: today, user: userId });
        if(!page){
            res.json({ status: "err" , msg : "Day didn't start yet"});
        }
        let events = page.Events;
        console.log(events)
        if(segments[`${segment}-${block}`].length==index){
          segments[`${segment}-${block}`].push({text:"",value:""});
          segments[`${segment}-${block}`][index][type]=value
        }else{
          segments[`${segment}-${block}`][index][type]=value
        }
  
        // await Day.findOneAndUpdate(
        //   { date: today, user: userId },
        //   { Segments: segments }
        // );
  
        res.json({ status: "ok" });
        
      } catch (error) {
        console.error(error.message,"updatepair");
        res.status(500).send("Internal Server Error");
      }
    }
  );

module.exports = router;
