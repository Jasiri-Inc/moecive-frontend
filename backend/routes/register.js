const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.post("/", registerController);


// /* GET users listing. */
// router.get('/', function(req, res, next) {

// });

// module.exports = router;
