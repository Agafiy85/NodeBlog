const path = require('path');
const fs = require(`fs`);
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
let homeDB = JSON.parse(fs.readFileSync('./DataB/homeDB.txt', 'utf8'));
res.render('home', {
    title: homeDB.title,
    mainheader: homeDB.capture

});

});

module.exports = router;