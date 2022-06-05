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

let wins = 0;
let loses = 0;
let ties = 0;

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    if (!(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS")) {
        return "Wrong Input";
    }
    if (computerSelection===playerSelection) {
        ties++;
        return "Tie";
    }
    else if (computerSelection === "ROCK") {
        if (playerSelection === "PAPER") {
            wins ++;
            return "You Win! Paper beats Rock";
        }
        else if (playerSelection === "SCISSORS") {
            loses ++;
            return "You Lose! Rock beats Scissors";
        }
    }
    else if (computerSelection === "PAPER") {
        if (playerSelection === "SCISSORS") {
            wins++;
            return "You Win! Scissors beat paper";
        }
        else if (playerSelection === "ROCK") {
            loses++;
            return "You Lose! Paper beats Rock";
        }
    }
    else if (computerSelection === "SCISSORS") {
        if (playerSelection === "ROCK") {
            wins++;
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection === "PAPER") {
            loses++;
            return "You Lose! Scissors beat Rock";
        }
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter Rock, Paper or Scissors");
        let result = playRound(userInput, computerPlay());
        console.log(result);
    }
    console.log("End of Round");
    console.log(`Wins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    wins = 0;
    loses = 0;
    ties = 0;
}