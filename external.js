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
//create a function for single round game.
function singleRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Tie! ${playerSelection} equals ${computerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "paper" && computerSelection == " scissor") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection  == "scissor" && computerSelection == "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

const playerChoice = "rOck";
console.log(singleRound(playerChoice.toLowerCase(), getComputerChoice()));