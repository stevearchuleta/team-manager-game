//====
// Import dependencies.
//====
const Player = require('./player');
const inquirer = require('inquirer');

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
                } else {
                    substitutes.push(player);
                }
                players.push(player);

            promptCreationOfPlayer();     
        });   
        
    } else {
        console.log('\n====\n PLAYERS \n====\n', players);  
        console.log('\n====\n STARTERS \n====\n', starters);  
        console.log('\n====\n SUBSTITUTES \n====\n', substitutes);  
    }
}

promptCreationOfPlayer()
