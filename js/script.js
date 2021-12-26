let playerScore = 0;
let computerScore = 0;

const playerChoice = document.querySelector('#playerSelection');
const computerChoice = document.querySelector('#computerSelection');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const roundResult = document.querySelector('#roundResult');
const playButtons = document.querySelector('#playButtons');

const newGameButton = document.querySelector('.newGame').addEventListener('click', () => {
    newGame();
});

/* If New game button is clicked, function new game is run, if rock, paper or scissor buttons are clicked, playRound function is run */
const buttons = document.getElementById('playButtons').querySelectorAll("img");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.className, computerPlay());
    })
})

/* Computer makes a random choice between Rock, Paper and Scissor */
function computerPlay() {
    let computerSelection = Math.random() * (3 - 0) + 0;

    if (computerSelection < 1) {
        return "rock";
    } else if (computerSelection >= 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

/* function is run when player beats computer, updates the round result and scores */
function playerWin(playerSelection, computerSelection) {
    roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    game();
}

/* function is run when computer beats player, updates the round result and scores */
function computerWin(playerSelection, computerSelection) {
    roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    game();
}

/* Resets all the scores and selections and starts a new game */
function newGame() {
    computerScore = 0;
    playerScore = 0;
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;
    computerChoice.setAttribute("src", "./images/question.svg");
    playerChoice.setAttribute("src", "./images/question.svg");
    roundResult.textContent = 'Select Rock, Paper or Scissor to Play!'
    playButtons.style.display = "flex";
}

/* One round of the game is played, computer vs player */
function playRound(playerSelection, computerSelection) {
    playerChoice.setAttribute("src", `./images/${playerSelection}.svg`);
    computerChoice.setAttribute("src", `./images/${computerSelection}.svg`);

    if (playerSelection === computerSelection) {
        roundResult.textContent = 'Tie!';
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWin(playerSelection, computerSelection);
        } else {
            playerWin(playerSelection, computerSelection);
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissor") {
            computerWin(playerSelection, computerSelection);
        } else {
            playerWin(playerSelection, computerSelection);
        }
    } else if (playerSelection == "scissor") {
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
        playButtons.style.display = "none";
        roundResult.textContent = "Player wins the game! Press New Game Button to start a New Game"
    } else if (computerScore === 5) {
        playButtons.style.display = "none";
        roundResult.textContent = "Computer wins the game! Press New Game Button to start a New Game";
    }
}