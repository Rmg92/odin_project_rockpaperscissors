/* Computer choice is stored */
const computerSelection = computerPlay();
/* Player choice is stored */

/* Computer makes a random choice between Rock, Paper and Scissor */
function computerPlay() {
    let computerSelection = Math.round((Math.random()*100)+1);
    console.log(computerSelection);
    if (computerSelection < 34) {
        return "Rock";
    } else if (computerSelection > 66) {
        return "Paper"
    } else {
        return "Scissor"
    }
}
/* User makes a choice between Rock, Paper and Scissor */

/* Game is played, it gets both computer and user choices and compares them to determine the winner, first to have 5 wins, wins the game */