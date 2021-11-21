let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;


const playerChoice = document.querySelector('#playerSelection');
const computerChoice = document.querySelector('#computerSelection');
const round = document.querySelector('#roundCounter');
const score = document.querySelector('#score')

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.className, computerPlay());
    })
})

/* Computer makes a random choice between Rock, Paper and Scissor */
function computerPlay() {
    /* a random number between 1 and 100 is chosen*/
    let computerSelection = Math.round((Math.random() * 100) + 1);

    if (computerSelection < 34) {
        /* if number is lower than 34, computer choses Rock*/
        return "Rock";
    } else if (computerSelection > 66) {
        /* if number is higher than 66, computer choses Paper*/
        return "Paper"
    } else {
        /* if number is between 33 and 66, computer choses Scissor*/
        return "Scissor"
    }
}

/* One round of the game is played, computer vs player */
function playRound(playerSelection, computerSelection) {

    playerChoice.textContent = "Player Choice: " + playerSelection;
    computerChoice.textContent = "Computer Choice: " + computerSelection;

    const roundResult = document.querySelector('#roundResult');

    let winner = "";
    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Tie!';
        winner = "tie";
    } else if (playerSelection == "Rock") { //if player choses rock it compares it to the computer choice and sets the winner
        if (computerSelection == "Paper") {
            roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            winner = "computer";
            roundCounter++;
            computerScore++;
        } else {
            roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            winner = "user";
            roundCounter++;
            playerScore++;
        }
    } else if (playerSelection == "Paper") { //if player choses paper it compares it to the computer choice and sets the winner
        if (computerSelection == "Scissor") {
            roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            winner = "computer";
            roundCounter++;
            computerScore++;
        } else {
            roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            winner = "user";
            roundCounter++;
            playerScore++;
        }
    } else if (playerSelection == "Scissor") { //if player choses scissor it compares it to the computer choice and sets the winner
        if (computerSelection == "Rock") {
            roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            winner = "computer";
            roundCounter++;
            computerScore++;
        } else {
            roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            winner = "user";
            roundCounter++;
            playerScore++;
        }
    }
    game(winner);
}

/* Game is played, it plays a round of the game, increments the score of the winner and at the end of 5 rounds the player with highest score wins the game.
 If tie or wrong choice by user -> repeat round */
function game(roundWinner) {
    if (roundCounter < 5) {
        if (roundWinner === "computer") {
            score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
            round.textContent = 'Round: ' + roundCounter;
        } else if (roundWinner === "user") {
            score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
            round.textContent = 'Round: ' + roundCounter;
        } else {
            score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
        }
    } else {
        if (playerScore > computerScore) {
            alert('Final Score - Player: ' + playerScore + ' Computer Score: ' + computerScore);
            alert("User wins the game! Press Ok to start a New Game");
            roundCounter = 0;
            computerScore = 0;
            playerScore = 0
        } else {
            alert('Final Score - Player: ' + playerScore + ' Computer Score: ' + computerScore);
            alert("Computer wins the game! Press Ok to start a New Game");
            roundCounter = 0;
            computerScore = 0;
            playerScore = 0
        }
    }
}
