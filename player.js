//==========
// Player Constructor Function
//==========
function Player(appellation, job, off, def) {
    this.name = appellation;
    this.position = job;
    this.offense = off;
    this.defense = def;

    //==========
    // goodGame() method
    // Coin Flip to determine goodGame points.
    // Heads: 0 increments the player offensive score by +1
    // Tails: 1 increments the player defensive score by +1
    // badGame() method
    // Coin Flip to determine badGame points.
    // Heads: 0 decrements the player offensive score by -1
    // Tails: 1 decrements the player defensive score by -1
    //==========
    this.goodGame = function(){
        if(Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + "'s offensive has increased by one point!\n====\n");
        } else {
            this.defense++;
            console.log(this.name + "'s offensive has increased by one point!\n====\n");
        }
    } 
    this.baddGame = function(){
        if(Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s offensive has decreased by one point!\n====\n");
        } else {
            this.defense--;
            console.log(this.name + "'s offensive has decreased by one point!\n====\n");
        }
    } 

    //==========
    // Print Player Statistics
    //==========
    this.printStats = function() {
        console.log(
        '\n====\n' +
        'Player: ' + this.name +
        '\n Position: ' + this.position +
        '\n Offense: ' + this.offense +
        '\n Defense: ' + this.defense +
        '\n====\n'
        )
    }

}

module.exports = Player;