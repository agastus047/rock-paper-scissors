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

function playRound(e) {
    let computerSelection = computerPlay();
    computerSelection = computerSelection.toUpperCase();
    let playerSelection = this.value;
    playerSelection = playerSelection.toUpperCase();
    let returnValue = '';
    if (!(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS")) {
        returnValue = "Wrong Input";
    }
    if (computerSelection===playerSelection) {
        ties++;
        returnValue = "Tie";
    }
    else if (computerSelection === "ROCK") {
        if (playerSelection === "PAPER") {
            wins++;
            returnValue = "You Win! Paper beats Rock";
        }
        else if (playerSelection === "SCISSORS") {
            loses++;
            returnValue = "You Lose! Rock beats Scissors";
        }
    }
    else if (computerSelection === "PAPER") {
        if (playerSelection === "SCISSORS") {
            wins++;
            returnValue = "You Win! Scissors beat paper";
        }
        else if (playerSelection === "ROCK") {
            loses++;
            returnValue = "You Lose! Paper beats Rock";
        }
    }
    else if (computerSelection === "SCISSORS") {
        if (playerSelection === "ROCK") {
            wins++;
            returnValue = "You Win! Rock beats Scissors";
        }
        else if (playerSelection === "PAPER") {
            loses++;
            returnValue = "You Lose! Scissors beat Rock";
        }
    }
    console.log(`${returnValue}\nWins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);

}

//function game() {
    /*for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter Rock, Paper or Scissors");
        let result = playRound(userInput, computerPlay());
        console.log(result);
    }
    console.log("End of Round");
    console.log(`Wins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    wins = 0;
    loses = 0;
    ties = 0;*/
//}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playRound);
});
