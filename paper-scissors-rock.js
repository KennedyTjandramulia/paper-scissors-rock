// get computer choice function
// initialise a computer choice variable
// let computer choice be a random number
// if random number is divisible by 3 computer is Paper
// if random number is divisible by 2 computer is Scissors
// else computer is Rock
function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 3 === 0) {
        computerChoice = "paper";
    }
    else if (randomNumber % 2 === 0) {
        computerChoice = "scissors";
    }
    else {
        computerChoice = "rock";
    }
    
    return computerChoice;
}

// playRound with an initilialised player selection variable
// if computer is paper
// output you lose if player is scissors
// output you win if player is 
// else print its a draw
// if computer is scissors
// then output you lose if player is paper
// output you win if player is rock
// else print its a draw
// if computer is rock
// then output you win if player is paper
// output you lose if player is scissors
// else print its a draw
//let playerSelection = "rock";
let playerSelection = "scissors";
let computerSelection = getComputerChoice();
console.log("Player chose " + playerSelection);
console.log("Computer chose " + computerSelection);
console.log(playRound(playerSelection,computerSelection));

function playRound(playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper!";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper!";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors!";
    }
    else {
        return "It's a Draw!";
    }
}
