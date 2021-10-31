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
    let winner = "";
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Tie! Play Again!");
            winner = "tie";
        } else if (computerSelection === "paper") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            winner = "computer";
        } else {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            winner = "user";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            console.log("Tie! Play Again!");
            winner = "tie";
        } else if (computerSelection === "scissor") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            winner = "computer";
        } else {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            winner = "computer";
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "scissor") {
            console.log("Tie! Play Again!");
            return "tie";
        } else if (computerSelection === "rock") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            winner = "computer";
        } else {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            winner = "computer";
        }
    } else {
        console.log("Wrong Choice! Choose only between Rock, Paper or Scissor");
        winner = "wrong";
    }
    return winner;
}

/* Game is played, it plays a round of the game, increments the score of the winner and at the end of 5 rounds the player with highest score wins the game.
 If tie or wrong choice by user -> repeat round */
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = "";
    for (let i = 1; i < 6; i++) {
        let round = "Round number: " + i;
        console.log(round)
        let winner = playRound(playerPlay(), computerPlay());
        if (winner === "computer") {
            computerScore++;
            console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
        } else if (winner === "user") {
            playerScore++;
            console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
        } else {
            i--;
        }
    }
    if (playerScore > computerScore) {
        gameWinner = "User wins the game!"
    } else {
        gameWinner = "Computer wins the game!"
    }
    return gameWinner;
}