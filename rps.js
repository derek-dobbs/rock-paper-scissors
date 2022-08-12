function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[randNum(0, 2)];
    return choice;
  }
  
let computer = getComputerChoice();
let rock = "ROCK";
let paper = "PAPER";
let scissors = "SCISSORS";

  function playRound(playerSelection, computerSelection){
    let playerLower = playerSelection.toLowerCase();

    if(playerLower === computerSelection){
        return "You both chose " + playerLower + ". It's a tie!";
    }

    if((playerLower === "rock" && computerSelection === "scissors") || (playerLower === "paper" && computerSelection === "rock") || (playerLower === "scissors" && computerSelection === "paper")){
        return playerLower + " beats " + computerSelection + ", you win!";
    }

    if((computerSelection === "rock" && playerLower === "scissors") || (computerSelection === "paper" && playerLower === "rock") || (computerSelection === "scissors" && playerLower === "paper")){
        return computerSelection + " beats " + playerLower + ", you lose.";
    }
  }

console.log(playRound(rock, computer));
console.log(playRound(paper, computer));
console.log(playRound(scissors, computer));

function game(){
    
}