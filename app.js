const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { randomQuestion } = require('./functions');

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

//process.env.PORT || 5000
