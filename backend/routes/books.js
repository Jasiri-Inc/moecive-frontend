const express = require("express")
const router = express.Router();

// Get books Page
router.get('/', (req, res, next) => {
    res.send('Welcome to Books Page')
})

module.exports = router;