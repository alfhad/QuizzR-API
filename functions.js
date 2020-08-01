//jshint esversion: 6

const questions = require('./questions/index.json');

function randomQuestion()
{
    var randomIndex = Math.random()*questions.length;
    randomIndex = Math.floor(randomIndex);
    return questions[randomIndex];
}

function getDifficulty(level)
{
    var randomIndex = Math.random()*questions.length;
    randomIndex = Math.floor(randomIndex);
    var k = randomIndex;
    while(1)
    {
        if(questions[k].difficulty == level)
        {
            return questions[k];
        }

        k = (k+1)%(questions.length);
    }
}

//console.log(getDifficulty(2));

module.exports = {randomQuestion, getDifficulty};