/**
 * This function returns the choice of the computer.
 */
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    }
    if (computerChoice === 1) {
        return "paper";
    }
    if (computerChoice === 2) {
        return "scissors";
    }
}

/**
 * Given both choices from the player and the computer, returns a string
 * that declares the winner for this round.
 * 
 * @param {*} playerSelection The choice of the player
 * @param {*} computerSelection The choice of the computer
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "Tie";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            computerSpan.textContent = computerScore;
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection === "scissors") {
            playerScore++;
            playerSpan.textContent = playerScore;
            return "You Win! Rock beats Scissors"
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            playerSpan.textContent = playerScore;
            return "You Win! Paper beats Scissors";
        }
        if (computerSelection === "scissors") {
            computerScore++;
            computerSpan.textContent = computerScore;
            return "You Lose! Scissors beats Paper"
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            computerSpan.textContent = computerScore;
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === "paper") {
            playerScore++;
            playerSpan.textContent = playerScore;
            return "You Win! Scissors beats Paper";
        }
    }
}

function eventFunction(event) {
    currentResult.textContent = playRound(event.target.value, getComputerChoice());
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            finalResult.textContent = "You won the game!";
        } else {
            finalResult.textContent = "You lost the game. Opponent won!";
        }
        button.forEach(button => button.removeEventListener('click', eventFunction));
    }
}

const button = document.querySelectorAll('.button');
const playerSpan = document.querySelector('#player-score');
const computerSpan = document.querySelector('#computer-score');
const currentResult = document.querySelector('#current-result');
const finalResult = document.querySelector('#final-result');

let playerScore = 0;
let computerScore = 0;

button.forEach(button => {
    button.addEventListener('click', eventFunction);
})