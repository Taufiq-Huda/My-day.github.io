const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const Day = require("../models/Day");


let today = new Date();
exports.today = today;
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





module.exports = router;
