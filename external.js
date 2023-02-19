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

console.log(getComputerChoice());