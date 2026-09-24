console.log("Hello World!");

let humanScore = 0;
let computerScore = 0;





function playRound(humanSelection, computerSelection){
    if (humanSelection === computerSelection) {
        return divResults.textContent = `It's a tie this round! | Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        return divResults.textContent = `You won this round, ${humanSelection} beats ${computerSelection}! | Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    } else {
        computerScore++;
        return divResults.textContent = `You lost this round, ${computerSelection} beats ${humanSelection}! | Human Score: ${humanScore} | Computer Score: ${computerScore}`;
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

function endGame() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    rematchBtn.disabled = false;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    divResults.textContent = `${humanScore} | ${computerScore}`;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    rematchBtn.disabled = true;
}





const  rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    divResults.textContent = `${humanScore} | ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        divResults.textContent = "Game Over!";
        endGame();
    }
});

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
scissorsBtn.addEventListener("click", () => {
   const humanSelection = "scissors";
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);
   divResults.textContent = `${humanScore} | ${computerScore}`;
   if (humanScore === 5 || computerScore === 5) {
        divResults.textContent = "Game over!";
        endGame();
    }
});

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    divResults.textContent = `${humanScore} | ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        divResults.textContent = "Game Over!";
        endGame();
    }
});

const rematchBtn = document.createElement("button");
rematchBtn.textContent = "Rematch!"
rematchBtn.disabled = true;
        
rematchBtn.addEventListener("click", () => {
            resetGame();
});

const divResults = document.createElement("div");
divResults.textContent = `${humanScore} | ${computerScore}`;


document.body.append(rockBtn);
document.body.append(scissorsBtn);
document.body.append(paperBtn);
document.body.append(divResults);
document.body.append(rematchBtn);



