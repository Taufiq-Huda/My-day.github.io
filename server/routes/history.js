const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const Day = require("../models/Day");


router.get("/all/", fetchuser, async (req, res) => {
    try {
      userId = req.user.id;
      const pages = await Day.find({ user: userId }).select("-user -_id -__v");
      res.send({ status: "ok", allpreviousday : pages });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});

router.get("/monthly/:year&:month", fetchuser, async (req, res) => {
    try {
      userId = req.user.id;
      const allpages = await Day.find({ user: userId }).select("-user -_id -__v");
      const pages=allpages.filter((Element)=>{
        return((Element.date.split("-")[1]==req.params.month)&&(Element.date.split("-")[0]==req.params.year))
      })
      res.send({ status: "ok",yeare: req.params.year,month: req.params.month, allinthismonth : pages });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});

router.get("/weekly/:year&:week", fetchuser, async (req, res) => {
    try {
      userId = req.user.id;
      const startDate = new Date(req.params.year, 0, 1);
      const allpages = await Day.find({ user: userId }).select("-user -_id -__v");
      const pages=allpages.filter((Element)=>{
        const pageDate= new Date(Element.date.split("-")[0],Element.date.split("-")[1]-1,Element.date.split("-")[2])
        return(Math.ceil((pageDate - startDate) /(24 * 60 * 60 * 1000*7))==req.params.week)
      })
      res.send({ status: "ok", allpreviousday : pages });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});

router.get("/daily/:year&:month&:day", fetchuser, async (req, res) => {
    try {
      userId = req.user.id;
      const startDate = new Date(req.params.year, 0, 1);
      const allpages = await Day.find({ user: userId }).select("-user -_id -__v");
      const pages=allpages.filter((Element)=>{
        return((Element.date.split("-")[1]==req.params.month)&&(Element.date.split("-")[0]==req.params.year))
      })
      res.send({ status: "ok", allpreviousday : pages });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
});

module.exports = router;