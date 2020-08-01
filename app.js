const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { randomQuestion, getDifficulty } = require('./functions');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server Started.");
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/random", (req, res) =>{
    res.json(randomQuestion());
});

app.get("/difficulty/1", (req, res)=>{
    res.json(getDifficulty(1));
});

app.get("/difficulty/2", (req, res)=>{
    res.json(getDifficulty(2));
});

app.get("/difficulty/3", (req, res)=>{
    res.json(getDifficulty(3));
});

app.get("/difficulty/4", (req, res)=>{
    res.json(getDifficulty(4));
});

app.get("/difficulty/5", (req, res)=>{
    res.json(getDifficulty(5));
});

//process.env.PORT || 5000
