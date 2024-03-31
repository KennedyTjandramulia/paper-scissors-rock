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
        computerChoice = "Paper";
    }
    else if (randomNumber % 2 === 0) {
        computerChoice = "Scissors";
    }
    else {
        computerChoice = "Rock";
    }
    
    return computerChoice + randomNumber;
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
