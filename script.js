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
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Scissors";
        }
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper"
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    
}

const button = document.querySelectorAll('.button');

button.forEach(button => {
    button.addEventListener('click', event => {
        console.log(playRound(event.target.value, getComputerChoice()));
    })
})

game();