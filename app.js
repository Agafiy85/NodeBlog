const express = require("express");

const path = require('path');
const fs = require(`fs`);
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "views");

const homePages = require('./routes/homePages');
app.use(homePages);

const about = require('./routes/about');
app.use(about);

const contact = require('./routes/contact');
app.use(contact);

app.use((req, res, next) => {
res.send('<h1>Not Found</h1>');
});


app.listen(3000);