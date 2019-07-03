const path = require('path');

const express = require("express");

const router = express.Router();
router.get('/notfound', (req, res, next) =>{
    res.sendFile(path.join(__dirname, "../", "views", "notfound.html"));
});

module.exports = router;