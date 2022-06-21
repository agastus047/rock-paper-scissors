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
    if (computerSelection===playerSelection) {
        ties++;
        returnValue = "Tie";
    }
    else if (computerSelection === "ROCK") {
        if (playerSelection === "PAPER") {
            wins++;
            returnValue = "Paper beats Rock";
        }
        else if (playerSelection === "SCISSORS") {
            loses++;
            returnValue = "Rock beats Scissors";
        }
    }
    else if (computerSelection === "PAPER") {
        if (playerSelection === "SCISSORS") {
            wins++;
            returnValue = "Scissors beat paper";
        }
        else if (playerSelection === "ROCK") {
            loses++;
            returnValue = "Paper beats Rock";
        }
    }
    else if (computerSelection === "SCISSORS") {
        if (playerSelection === "ROCK") {
            wins++;
            returnValue = "Rock beats Scissors";
        }
        else if (playerSelection === "PAPER") {
            loses++;
            returnValue = "Scissors beat Rock";
        }
    }
   
    console.log(`${returnValue}\nWins: ${wins}\nLoses: ${loses}\nTies: ${ties}`);
    round.textContent='';
    playerChoice.textContent = `Player Choice: ${playerSelection}`;
    computerChoice.textContent = `Computer Choice: ${computerSelection}`;
    result.textContent = returnValue;
    if (wins === 5) {
        playerChoice.textContent = ``;
        computerChoice.textContent = ``;
        result.textContent = ``;
        round.textContent = `You Win!!\nPlayer Points: ${wins}\nComputer Points: ${loses}\nTies: ${ties}`;
        wins=0;
        loses=0;
        ties=0;
    }
    else if (loses === 5) {
        playerChoice.textContent = ``;
        computerChoice.textContent = ``;
        result.textContent = ``;
        round.textContent = `You Lose!!\nPlayer Points: ${wins}\nComputer Points: ${loses}\nTies: ${ties}`;
        wins=0;
        loses=0;
        ties=0;
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', playRound);
});
const container = document.createElement('div');
document.body.appendChild(container);
const playerChoice = document.createElement('div');
container.appendChild(playerChoice);
const computerChoice = document.createElement('div');
container.appendChild(computerChoice);
const result = document.createElement('div');
container.appendChild(result);
const round = document.createElement('div');
container.appendChild(round);
