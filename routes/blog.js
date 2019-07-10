const path = require('path');
const fs = require(`fs`);
const express = require('express');

const router = express.Router();

router.get('/blog', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
let blogDB = JSON.parse(fs.readFileSync('./DataB/blogDB.txt', 'utf8'));
res.render('blog', {
    title: blogDB.title,
    mainheader: blogDB.capture

});

});

module.exports = router;