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
function playRound(playerSelection,computerSelection) {
    playerSelection = prompt("Choose paper,scissors or rock.");
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);

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

// if playRound returns a You win string return win
// if playRound returns a You lose string return lose
// otherwise return draw
function winLose(result) {
    if (result === "You win! Rock beats Scissors!" || result === "You win! Scissors beats Paper!" || result === "You win! Paper beats Rock!") {
        return "win";
    }
    else if (result === "You lose! Rock beats Scissors!" || result === "You lose! Scissors beats Paper!" || result === "You lose! Paper beats Rock!") {
        return "lose";
    }
    else {
        return "draw";
    }
}

// Play 5 rounds and keep score
// initialise a count for looping
// initialise a count for computer wins and player wins
// if playRound is a win add score to player count
// if playRound is a lose add score to player count
// if playRound is a draw do not add score

let playerSelection;
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let result = playRound(playerSelection,computerSelection)
console.log(result);
console.log(winLose(result));