const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res, next) => {
  const user = {
    user: "Bruno",
    password: 1234,
  };

  jwt.sign({ user }, "bruno", (err, token) => {
    res.json({
      token,
    });
  });
});

module.exports = router;
