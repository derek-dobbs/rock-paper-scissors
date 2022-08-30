"use strict";
$(document).ready(function () {
  function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function computerSelection(){
    let computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = computerChoices[randNum(0, 2)];
    return computerChoice;
  }

  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;
  let round = 0;

  $('#play-again-message').toggleClass('hide');

  function playRound(pChoice, cChoice){
    // $('#play-again').toggleClass('hide');
    $('#play-again-message').css('display', 'none');
    round += 1;
    $('#round').html(round);

    $('#player-choice').html(pChoice);
    $('#computer-choice').html(cChoice);

    if(pChoice == cChoice ){
      ties += 1;
      return "It's a tie";
    }

    if((pChoice == "rock" && cChoice == "scissors") || (pChoice == "paper" && cChoice == "rock") || (pChoice == "scissors" && cChoice == "paper")){
      playerWins += 1;
      return "Player Wins!"
    }

    if((cChoice == "rock" && pChoice == "scissors") || (cChoice == "paper" && pChoice == "rock") || (cChoice == "scissors" && pChoice == "paper")){
      computerWins += 1;
      
      return "Computer Wins"
    }
  }
  
  function reset(){
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    round = 0;
    $('#winner').html();
    $('#computer-wins').html();
    $('#player-wins').html();
    $('#ties').html();
    $('#final-winner').html();
    $('#round').html();
    $('#player-choice').html();
    $('#computer-choice').html();
    // $('#play-again').toggleClass('hide');
  }

  $(".weapon"). click(function() {
    $('#final-winner').html('');
    let playerChoice = $(this). val();
    let computerChoice = computerSelection();
    // alert(playerChoice + ", " + computerChoice);
    $('#winner').html(playRound(playerChoice, computerChoice));
    $('#computer-wins').html(computerWins);
    $('#player-wins').html(playerWins);
    $('#ties').html(ties);

    if(round == 5){
      // alert("Round 5");
      if(playerWins == computerWins){
        $('#final-winner').html("Final Winner: It's a tie");
        $('#play-again-message').toggleClass('hide');
        // $('#play-again').toggleClass('show');
      }

      if(playerWins > computerWins){
        $('#final-winner').html("Final Winner: Player");
        $('#play-again-message').toggleClass('hide');
        // $('#play-again').toggleClass('show');
      }

      if(playerWins < computerWins){
        $('#final-winner').html("Final Winner: Computer");
        $('#play-again-message').toggleClass('hide');
        // $('#play-again').toggleClass('show');
      }

      reset();
    }
    });

    // $('#play-again').click(function(){
    //   $('#round').html();
    //   $('#play-again').toggleClass('show');
    // });
});