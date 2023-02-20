// Create a function to randomize rock, paper & scissor.
function getComputerChoice() {
    const wordIndex = Math.floor(Math.random() * 3);
    if (wordIndex == 0) {
        return "rock";
    } else if (wordIndex == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

let playerPoint = 0;
let computerPoint = 0;

//create a function for single round game.
function singleRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Tie! ${playerSelection} equals ${computerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerPoint += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        playerPoint += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerPoint += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == " scissor") {
        computerPoint += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection  == "scissor" && computerSelection == "rock") {
        computerPoint += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        playerPoint += 1;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}



//create a function to make a game last for 5 rounds.
function game() {
    for ( let i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper or Scissor?:", "");
        console.log(singleRound(playerChoice.toLowerCase(), getComputerChoice()));
    }
    if (playerPoint > computerPoint) {
        return `Winner : Player`;
    } else if (playerPoint < computerPoint) {
        return `Winner : Computer`;
    } else {
        return `Deuce!`;
    }
}

console.log(game());