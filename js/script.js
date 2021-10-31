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
    console.log("Player choice: " + playerSelection);
    console.log("Computer choice: " + computerSelection);
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie! Play Again!";
        } else if (computerSelection === "paper") {
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Tie! Play Again!";
        } else if (computerSelection === "scissor") {
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "scissor") {
            return "Tie! Play Again!";
        } else if (computerSelection === "rock") {
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        } else {
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    } else {
        return("Wrong Choice! Choose only between Rock, Paper or Scissor");
    }
}

/* Game is played, it gets both computer and user choices and compares them to determine the winner, first to have 5 wins, wins the game */
