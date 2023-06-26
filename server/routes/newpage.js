const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET= "ygfysgui"

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

router.post("/SignIn/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.findOne({
        email: req.body.email,
    });
    
    if(!user) {
        return res.status (400).json ({error: "Please try to login with correct credentials"});
    }
    
    const passwordCompare = await bcrypt.compare (req.body.password, user.password);

    if(!passwordCompare) {
        return res.status (400).json ({error: "Please try to login with correct credentials"});
    }

    console.log(user, passwordCompare)
    const data = {
      user: {
        id: user.id,
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET);
    // user.then((user) => res.json(user));
    // user.catch((err) => {
    //   res.json(err);
    // });
    res.json({authtoken})
  }
);

module.exports = router;
