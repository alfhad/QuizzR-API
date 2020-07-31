const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.listen(5000, ()=>{
    console.log("Server Started.");
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/web/index.html");
});
