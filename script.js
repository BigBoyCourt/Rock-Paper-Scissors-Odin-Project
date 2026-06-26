console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;





function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection) {
        return console.log(`It's a tie this round! | Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        return console.log(`You won this round, ${humanSelection} beats ${computerSelection}! | Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    } else {
        computerScore++;
        return console.log(`You lost this round, ${computerSelection} beats ${humanSelection}! | Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
}

function getComputerChoice() {
    const result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt(`Rock, Paper, or Scissors?`);
    return choice ? choice.toLowerCase() : "";
}

function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`You won the game!`)
    } else if (humanScore < computerScore) {
        console.log(`You lost the game!`)
    } else console.log(`The game is a tie!`)
}

playGame(playRound);