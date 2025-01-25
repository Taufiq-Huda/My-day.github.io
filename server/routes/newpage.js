const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const Day = require("../models/Day");


let today = new Date();
today = today.toISOString().split("T")[0];

const CATGORY = {
  Economy : ["Earning" , "Sending"]
}
router.get("/pagestructure/", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("pageStructure");
    const page = await Day.findOne({ date: today, user: userId });
    if (page == null) {
      let segment = {init:"test"};
      Day.create({
        user: userId,
        date: today,
        Segments: segment,
      });
    } 
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

    // console.log(page.Segments[`${req.params.segment}-${req.params.block}`])
    if (page.Segments[`${req.params.segment}-${req.params.block}`]) {
      res.json({
        status: "ok",
        pairs: page.Segments[`${req.params.segment}-${req.params.block}`],
      });
    } else {
      let segment = page.Segments;
      if(req.params.segment == "Economy"){
        segment[`${req.params.segment}-${req.params.block}`] = [{text:"",value:""}];
      }
      console.log("hello")
      segment[`${req.params.segment}-${req.params.block}`] = [{text:"",value:""}];
      // await Day.findOneAndUpdate(
      //   { date: today, user: userId },
      //   { Segments: segment }
      // );
      res.json({ status: "ok", pairs: [{text:"",value:""}] });
    }
  } catch (error) {
    console.error(error.message,"get pair");
    res.status(500).send("Internal Server Error");
  }
});

router.get("/getchecklist/:segment/:block", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const page = await Day.findOne({ date: today, user: userId });

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
  } catch (error) {
    console.error(error.message,"get pair");
    res.status(500).send("Internal Server Error");
  }
});



router.get("/updatepair/:segment/:block/:index/:type&:value",fetchuser,
  async (req, res) => {
    const  {segment,block,index,type,value}=req.params
    try {
      userId = req.user.id;
      const page = await Day.findOne({ date: today, user: userId });
      let segments = page.Segments;
      if(segments[`${segment}-${block}`].length==index){
        segments[`${segment}-${block}`].push({text:"",value:""});
        segments[`${segment}-${block}`][index][type]=value
      }else{
        segments[`${segment}-${block}`][index][type]=value
      }

      await Day.findOneAndUpdate(
        { date: today, user: userId },
        { Segments: segments }
      );

      res.json({ status: "ok" });
      
    } catch (error) {
      console.error(error.message,"updatepair");
      res.status(500).send("Internal Server Error");
    }
  }
);



module.exports = router;
