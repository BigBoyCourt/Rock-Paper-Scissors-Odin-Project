console.log("Hello World!");

function getComputerChoice() {
    const result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0 :
            return console.log("Rock");
        case 1 :
            return console.log("Paper");
        case 2 :
            return console.log("Scissors");
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

getComputerChoice();
getHumanChoice();