const express = require("express");
const router = express.Router();

const books = [
  { id: 1, name: "Chand", description: "this is a " },
  { id: 2, name: "Abort", description: "this is a " },
  { id: 3, name: "Rodger", description: "this is a " },
];

// Get books Page
router.get("/", (req, res, next) => {
  res.send(books);
});

module.exports = router;
