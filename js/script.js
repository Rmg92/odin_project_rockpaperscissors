let playerScore = 0;
let computerScore = 0;

const playerChoice = document.querySelector('#playerSelection');
const computerChoice = document.querySelector('#computerSelection');
const score = document.querySelector('#score');
const roundResult = document.querySelector('#roundResult');

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
        return "rock";
    } else if (computerSelection > 66) {
        /* if number is higher than 66, computer choses Paper*/
        return "paper"
    } else {
        /* if number is between 33 and 66, computer choses Scissor*/
        return "scissor"
    }
}

function playerWin(playerSelection, computerSelection) {
    roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
    score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
    game();
}

function computerWin(playerSelection, computerSelection) {
    roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
    score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
    game();
}

function newGame() {
    computerScore = 0;
    playerScore = 0;
    score.textContent = "Player Score: " + playerScore + " Computer Score: " + computerScore;
}

/* One round of the game is played, computer vs player */
function playRound(playerSelection, computerSelection) {
    playerChoice.textContent = "Player Choice: " + playerSelection;
    computerChoice.textContent = "Computer Choice: " + computerSelection; 

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Tie!';
    } else if (playerSelection == "rock") { //if player choses rock it compares it to the computer choice and sets the winner
        if (computerSelection == "paper") {
            computerWin(playerSelection, computerSelection);
        } else {
            playerWin(playerSelection, computerSelection);
        }
    } else if (playerSelection == "paper") { //if player choses paper it compares it to the computer choice and sets the winner
        if (computerSelection == "scissor") {
            computerWin(playerSelection, computerSelection);
        } else {
            playerWin(playerSelection, computerSelection);
        }
    } else if (playerSelection == "scissor") { //if player choses scissor it compares it to the computer choice and sets the winner
        if (computerSelection == "rock") {
            computerWin(playerSelection, computerSelection);
        } else {
            playerWin(playerSelection, computerSelection);
        }
    }
}

/* Game is played, it plays a round of the game, increments the score of the winner and at the end of 5 rounds the player with highest score wins the game.
 If tie or wrong choice by user -> repeat round */
function game() {
    if (playerScore === 5) {
        alert('Final Score - Player: ' + playerScore + ' Computer Score: ' + computerScore);
        alert("You win the game! Press Ok to start a New Game");
        newGame();
    } else if (computerScore === 5) {
        alert('Final Score - Player: ' + playerScore + ' Computer Score: ' + computerScore);
        alert("Computer wins the game! Press Ok to start a New Game");
        newGame();
    }
}
