const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");

// get config vars
dotenv.config();
const secretToken = process.env.TOKEN_SECRET;

router.post("/", (req, res, next) => {
  const user = {
    user: "Bruno",
    password: 1234,
  };

  jwt.sign({ user }, secretToken, { expiresIn: "100000s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

module.exports = router;
