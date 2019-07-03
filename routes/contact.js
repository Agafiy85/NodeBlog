const path = require('path');
const fs = require(`fs`);
const express = require('express');

const router = express.Router();

router.get('/contact', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
let contactDB = JSON.parse(fs.readFileSync('./DataB/contactDB.txt', 'utf8'));
res.render('contact', {
    title: contactDB.title,
    mainheader: contactDB.capture

});

});

module.exports = router;