console.log("Hello World");


function game() {    
    let winner;
    function getComputerChoice() {
        let options = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * options.length);
        let randomResult = options[randomIndex];
        return randomResult;
}
    

    function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lose!");
        winner = -1;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        alert("You tied!");
        winner = 0;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You win!");
        winner = 1;   

    } else if (playerSelection == "paper" && computerSelection == "paper") {
        //alert("You tied!");
        winner = "tieGame";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        //alert("You win!");
        winner = "userWins";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        //alert("You lose!");
        winner = "computerWins";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        //alert("You win!");
        winner = "userWins";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        //alert("You lose!");
        winner = "computerWins";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        //alert("You tied!");
        winner = "tieGame";
    }
        return winner;     

    
} 
let returnValues = [];

let playerSelection = prompt("Choose your weapon (rock, paper, scissors).");
let computerSelection = getComputerChoice();
playRound();
console.log(playRound(playerSelection, computerSelection));

returnValues.push(playRound(playerSelection, computerSelection));

playerSelection = prompt("Choose your weapon (rock, paper, scissors).");
computerSelection = getComputerChoice();
playRound();
console.log(playRound(playerSelection, computerSelection));

returnValues.push(playRound(playerSelection, computerSelection));

playerSelection = prompt("Choose your weapon (rock, paper, scissors).");
computerSelection = getComputerChoice();
playRound();
console.log(playRound(playerSelection, computerSelection));

returnValues.push(playRound(playerSelection, computerSelection));

playerSelection = prompt("Choose your weapon (rock, paper, scissors).");
computerSelection = getComputerChoice();
playRound();
console.log(playRound(playerSelection, computerSelection));

returnValues.push(playRound(playerSelection, computerSelection));

playerSelection = prompt("Choose your weapon (rock, paper, scissors).");
computerSelection = getComputerChoice();
playRound();
console.log(playRound(playerSelection, computerSelection));

returnValues.push(playRound(playerSelection, computerSelection));

//console.log(playerSelection);
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
//console.log(winner);


console.log(returnValues);
    let sum = 0;    for (let i = 0; i < returnValues.length; i++) {
        sum += returnValues[i];
    
   }
console.log(sum);   

if (sum > 0) {
    alert("You are the champion!"); 
} else if (sum < 0) {
    alert("You are the LOSER, but feel free to try again");
} else {
    alert("We tied! I demand a rematch!");
}
}
game();