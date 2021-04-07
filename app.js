//====
// Import dependencies.
//====
const Player = require('./player');
const inquirer = require('inquirer');

var score = 0;
var gameRound = 0;
var maxRounds = 5;
//====
// ARRAYS
//====
var players = [];
var starters = [];
var substitutes = [];
const questions = [
    {
        name: 'name',
        message: "What is the player's name?"
    },
    {
        name: 'position',
        message: "What is the player's position?"
    },
    {
        name: 'offense',
        message: 'How many offense points does this player contribute (0-10)?',
        validate: function(input){
            if(isNaN(input) === false && parseInt(input) > 0 && parseInt(input) < 11){
                return true;
            } else {
                return false;
            }
        }
    },
    {
        name: 'defense',
        message: 'How many defensive points does this player contribute (0-10)?',
        validate: function(input){
            if(isNaN(input) === false && parseInt(input) > 0 && parseInt(input) < 11){
                return true;
            } else {
                return false;
            }
        }
    }
];

//==========
// Prompt input using inquirer.
// Recursively...
// Instantiate a new Player() object.
//==========
function promptCreationOfPlayer() {
    if(players.length < 3) {

        console.log('\n====\n NEW PLAYER \n====\n');
        
        inquirer.prompt(questions).then(function(answers){
            const player = new Player(
                answers.name,
                answers.position,
                parseInt(answers.offense),
                parseInt(answers.defense)
                );
                if(starters.length < 2){
                    starters.push(player);
                    console.log(player.name + ' was added to the starting roster.');
                } else {
                    substitutes.push(player);
                    console.log(player.name + ' was addes to the subsitute roster.');
                    
                }
                players.push(player);

            promptCreationOfPlayer();  
        });   
        
    } else {
        console.log('\n====\n PLAYERS \n====\n', players);  
        console.log('\n====\n STARTERS \n====\n', starters);  
        console.log('\n====\n SUBSTITUTES \n====\n', substitutes);  
        playGame();   
    }
}

//====
// PLAY GAME FUNCTION
// Calls PlayRound() function
//====
function playGame(){
    console.log('\n====\n PLAY GAME \n====\n');
    if(gameRound < maxRounds) {
        playRound();
    } //else (
        //endGame();
    //)
}

//====
// PLAY ROUND FUNCTION
//====
function playRound() {
    gameRound++;

    let opponentOffense = Math.floor(Math.random() * 20 + 1);
    let opponentDefense = Math.floor(Math.random() * 20 + 1);

    let teamOffense = 0;
    let teamDefense = 0;
    for(var i = 0; i < starters.length; i++) {
        teamOffense += starters[i].offense;
    }
    for(var i = 0; i < starters.length; i++) {
        teamDefense += starters[i].defense;
    }
    console.log('My Offense Scored:' + teamOffense + ' points.');
    console.log('Opponent Defense Scored:' + opponentDefense + ' points.');
    console.log('My Defense Scored:' + teamDefense + ' points.');
    console.log('Opponent Offense Scored:' + opponentOffense + ' points.');

    if(opponentDefense < teamOffense) {
        score++;
        console.log("YOUR TEAM SCORED A POINT!");
    }
    if(opponentOffense > teamDefense) {
        score--;
        console.log("ONE POINT WAS SCORED AGAINST YOUR TEAM!");
    }
}

promptCreationOfPlayer();