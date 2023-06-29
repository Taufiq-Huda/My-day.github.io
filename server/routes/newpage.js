const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const Day = require("../models/Day");


console.log("ata gase tota pathi")

let today = new Date();
today = today.toISOString().split("T")[0];

router.get("/pagestructure/", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("pageStructure");
    res.send({ status: "ok", pageStructure: user.pageStructure });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getpairs/:segment/:block", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const page = await Day.findOne({ date: today, user: userId });
    if (page == null) {
      let segment = {};
      segment[`${req.params.segment}-${req.params.block}`] = [{text:"",value:""}];
      Day.create({
        user: userId,
        date: today,
        Segments: segment,
      });
      res.json({ status: "ok", pairs: [{text:"",value:""}] });
    } else {
      if (page.Segments[`${req.params.segment}-${req.params.block}`]) {
        res.json({
          status: "ok",
          pairs: page.Segments[`${req.params.segment}-${req.params.block}`],
        });
      } else {
        let segment = page.Segments;
        segment[`${req.params.segment}-${req.params.block}`] = [{text:"",value:""}];
        await Day.findOneAndUpdate(
          { date: today, user: userId },
          { Segments: segment }
        );
        res.json({ status: "ok", pairs: [{text:"",value:""}] });
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/addpairs/:segment/:block", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const page = await Day.findOne({ date: today, user: userId });

    let segments = page.Segments;
    segments[`${req.params.segment}-${req.params.block}`].push({text:"",value:""});

    await Day.findOneAndUpdate(
      { date: today, user: userId },
      { Segments: segments }
    );
    res.json({ status: "ok", pairs: [{text:"",value:""}] });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get(
  "/updatepair/:segment/:block/:index/:type&:value",
  fetchuser,
  async (req, res) => {
    const  {segment,block,index,type,value}=req.params
    try {
      userId = req.user.id;
      const page = await Day.findOne({ date: today, user: userId });

      let segments = page.Segments;
      
      console.log(segments)
      segments[`${segment}-${block}`][index][type]=value

      console.log(segments)
      await Day.findOneAndUpdate(
        { date: today, user: userId },
        { Segments: segments }
      );
     
      // console.log(a,{ date: today, user: userId },)
      res.json({ status: "ok" });
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);



module.exports = router;
