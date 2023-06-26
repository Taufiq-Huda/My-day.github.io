const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const JWT_SECRET= "ygfysgui"

const defaultPage={
  Segment: {
    Economy: [
      {
        title: "Earning",
        NumInput: "Amount",
        TxtInput: "Source",
        type: "FVP",
      },
      {
        title: "Spending",
        NumInput: "Amount",
        TxtInput: "Field",
        type: "FVP",
      },
    ],
    Relegious: [
      {
        title: "Good Work",
        NumInput: "Amount",
        TxtInput: "Source",
        type: "FVP",
      },
      {
        title: "Bad Work",
        NumInput: "Amount",
        TxtInput: "Field",
        type: "FVP",
      },
      {
        title: "Prayer",
        list: [
          { title: "Fajar", checked: true },
          { title: "Johor", checked: true },
          { title: "Asar", checked: true },
          { title: "Magreb", checked: true },
          { title: "Esha", checked: true },
        ],
        type: "CL",
      },
    ],
  },
}

router.post( "/SignUp/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
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

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
      pageStructure : defaultPage,
    });

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
