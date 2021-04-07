//==========
// Import dependencies.
//==========
const Player = require('./player');
const inquirer = require('inquirer');


//==========
// Prompt input using inquirer.
// Instantiate a new Player() object.
//==========
function promptCreationOfPlayer() {
    console.log('\n====\n NEW PLAYER \n====\n');
    
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

    inquirer.prompt(questions).then(function(answers){
        const player = new Player(
            answers.name,
            answers.position,
            parseInt(answers.offense),
            parseInt(answers.defense)
        );
    })        
}
