const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const Day = require("../models/Day");


let today = new Date();
today = today.toISOString().split("T")[0];

const CATGORY = {
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
        state : "bool"
    },
}
router.post("/new/", fetchuser, async (req, res) => {
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
      console.error(error.message,"addpair");
      res.status(500).send("Internal Server Error");
    }
});

router.get("/fields/:category/", async(req , res) => {
    try {
        res.json({ status: "ok" , fields : CATGORY[req.params.category]});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// router.get("/updatepair/:segment/:block/:index/:type&:value",fetchuser,
//   async (req, res) => {
//     const  {segment,block,index,type,value}=req.params
//     try {
//       userId = req.user.id;
//       const page = await Day.findOne({ date: today, user: userId });
//       let segments = page.Segments;
//       if(segments[`${segment}-${block}`].length==index){
//         segments[`${segment}-${block}`].push({text:"",value:""});
//         segments[`${segment}-${block}`][index][type]=value
//       }else{
//         segments[`${segment}-${block}`][index][type]=value
//       }

//       await Day.findOneAndUpdate(
//         { date: today, user: userId },
//         { Segments: segments }
//       );

//       res.json({ status: "ok" });
      
//     } catch (error) {
//       console.error(error.message,"updatepair");
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

module.exports = router;