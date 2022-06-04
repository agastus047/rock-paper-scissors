function computerPlay() {
    let randInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (randInt === 1) {
        return "Rock";
    }
    else if (randInt === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    if (!(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS")) {
        return "Wrong Input";
    }
    if (computerSelection===playerSelection) {
        return "Tie";
    }
    else if (computerSelection === "ROCK") {
        if (playerSelection === "PAPER") {
            return "You Win! Paper beats Rock";
        }
        else if (playerSelection === "SCISSORS") {
            return "You Lose! Rock beats Scissors";
        }
    }
    else if (computerSelection === "PAPER") {
        if (playerSelection === "SCISSORS") {
            return "You Win! Scissors beat paper";
        }
        else if (playerSelection === "ROCK") {
            return "You Lose! Paper beats Rock";
        }
    }
    else if (computerSelection === "SCISSORS") {
        if (playerSelection === "ROCK") {
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection === "PAPER") {
            return "You Lose! Scissors beat Rock";
        }
    }

}

function game() {
    let userInput = prompt("Enter Rock, Paper or Scissors");
    let result = playRound(userInput, computerPlay());
    console.log(result);
}