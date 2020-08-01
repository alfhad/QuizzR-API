const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")));

const { randomQuestion, getDifficulty } = require('./functions');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server Started.");
});

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

//app.use(app.router);

app.use(function(req, res, next){
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.sendFile(__dirname + "/404.html");
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

//process.env.PORT || 5000
