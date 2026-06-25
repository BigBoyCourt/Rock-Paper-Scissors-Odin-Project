console.log("Hello World!");

function getComputerChoice() {
    const result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0 :
            return console.log("rock");
        case 1 :
            return console.log("paper");
        case 2 :
            return console.log("scissors");
    }
}



getComputerChoice();