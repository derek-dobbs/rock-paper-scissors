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
  
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  function playRound(playerSelection, computerSelection){

    let playerLower = playerSelection.toLowerCase();

    if(playerLower === computerSelection){
        ties += 1;
        return "You both chose " + playerLower + ". It's a tie!";
    }

    if((playerLower === "rock" && computerSelection === "scissors") || (playerLower === "paper" && computerSelection === "rock") || (playerLower === "scissors" && computerSelection === "paper")){
        playerWins += 1;
        return playerLower + " beats " + computerSelection + ", you win!";
    }

    if((computerSelection === "rock" && playerLower === "scissors") || (computerSelection === "paper" && playerLower === "rock") || (computerSelection === "scissors" && playerLower === "paper")){
        computerWins += 1;
        return computerSelection + " beats " + playerLower + ", you lose.";
    }
  }

// console.log(playRound(rock, computer));
// console.log(playRound(paper, computer));
// console.log(playRound(scissors, computer));

function game(){
  // let computer = getComputerChoice();
  let rock = "ROCK";
  let paper = "PAPER";
  let scissors = "SCISSORS";
  
    for(let i = 1; i <=5; i++){
      let playerChoice = prompt("Enter rock, paper, or scissors: ");
      let computer = getComputerChoice();
      console.log("Round " + i);
      console.log(playRound(playerChoice, computer));
    }
    // console.log("You won " + playerWins + " rounds, Computer won " + computerWins + ". There were " + ties + " ties.");
    console.log("------------");
    console.log("Final Score:");
    console.log("Your score: " + playerWins + " | Computer Score: " + computerWins + " | " + "Ties: " + ties);
    if(playerWins > computerWins){
      console.log("You Win :)");
    }

    if(playerWins < computerWins){
      console.log("You lose :(");
    }

    if(playerWins == computerWins){
      console.log("It's a tie!");
    }
}

game();