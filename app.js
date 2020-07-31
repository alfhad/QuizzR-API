//jshint esversion: 6

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const https = require('https');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(4000, ()=>{
    console.log("Server Started.");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

