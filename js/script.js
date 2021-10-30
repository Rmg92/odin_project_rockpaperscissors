/* Computer choice is stored */
const computerSelection = computerPlay();
/* Player choice is stored */
const playerSelection = playerPlay();

/* Computer makes a random choice between Rock, Paper and Scissor */
function computerPlay() {
    /* a random number between 1 and 100 is chosen*/
    let computerSelection = Math.round((Math.random() * 100) + 1);

    if (computerSelection < 34) {
        /* if number is lower than 34, computer choses Rock*/
        return "rock";
    } else if (computerSelection > 66) {
        /* if number is higher than 66, computer choses Paper*/
        return "paper"
    } else {
        /* if number is between 33 and 66, computer choses Scissor*/
        return "scissor"
    }
}

/* User makes a choice between Rock, Paper and Scissor */
function playerPlay() {
    let playerSelection = prompt("Select rock, paper or scissor!")
    return playerSelection.toLowerCase();
}

/* One round of the game is played, computer vs player */
function playRound(playerSelection, computerSelection) {
    
}

/* Game is played, it gets both computer and user choices and compares them to determine the winner, first to have 5 wins, wins the game */