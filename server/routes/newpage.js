const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");

router.get( "/pagestructure/",fetchuser,
   async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("pageStructure")
        res.send({status:"ok",pageStructure:user.pageStructure})
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
  }
);

router.get("/getpairs/:segment/:block",fetchuser,
  async (req, res) => {
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("pageStructure")
      res.json({status: "ok", pairs:["","","","",""]})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/updatepair/:segment/:block/:index/:type&:value",fetchuser,
  async (req, res) => {
    console.log(req.params)
    res.json({status: "ok"})
  }
);

module.exports = router;
