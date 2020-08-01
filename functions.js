//jshint esversion: 6

const questions = require('./questions/index.json');

function randomQuestion()
{
    var randomIndex = Math.random()*questions.length;
    randomIndex = Math.floor(randomIndex);
    return questions[randomIndex];
}

//console.log(randomQuestion());

module.exports = {randomQuestion};