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

/**
 * Plays 5 games in a row with the user and then prints to the console the result
 * of each round.
 */
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Will you choose: Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();