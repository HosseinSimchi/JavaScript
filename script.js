// app.js

let moves = 10;
let computerWinners = 0, playerWinners = 0;
let playerC;
let computerC;

function Rock() { 
  moves--;
  if ( moves >= 0){
    document.querySelector(".yourchoice").innerHTML = 'yourchoice: ' +'Rock';
    document.querySelector(".movesleft").innerHTML = `Moves Left: ${moves}`;
    let computerchoice = Math.random();
    if ( computerchoice < 0.33){
      computerC = "Scissors";
    }else if ( 0.33 <= computerchoice <=0.66 ){
      computerC = "Rock";
    }
    else{
      computerC = "Paper";
    }
    switch ( computerC ){
      case "Scissors":
        playerWinners += 1;
        document.querySelector("#p-count").innerHTML = `${playerWinners}`
        if (playerWinners + computerWinners >= 10){
          alert("You have Won!!!!!!!")
        }
        break;
      case "Paper":
        computerWinners += 1;
        document.querySelector("#c-count").innerHTML = `${computerWinners}`
        if (computerWinners + playerWinners >= 10){
          alert("You have lost the game")
        }
        break;
      }
  }else{
    if (playerWinners >= computerWinners){
      alert("You have Won!!!!!!!")
    }else if (playerWinners === computerWinners){alert("You both are equal!!!")}
    else {alert("You have lost the game")}
  }
}

function Paper() { 
  moves--;
  if ( moves >= 0){
    document.querySelector(".yourchoice").innerHTML = 'yourchoice: ' +'Paper';
    document.querySelector(".movesleft").innerHTML = `Moves Left: ${moves}`;
    let computerchoice = Math.random();
    if ( computerchoice < 0.33){
      computerC = "Scissors";
    }else if ( 0.33 <= computerchoice <=0.66 ){
      computerC = "Rock";
    }
    else{
      computerC = "Paper";
    }
    switch ( computerC ){
      case "Scissors":
        computerWinners += 1;
        document.querySelector("#c-count").innerHTML = `${computerWinners}`
        if (computerWinners + playerWinners >= 10){
          alert("You have lost the game")
        }
        break;
      case "Rock":
        playerWinners += 1;
        document.querySelector("#p-count").innerHTML = `${playerWinners}`
        if (playerWinners + computerWinners >= 10){
          alert("You have Won!!!!!!!")
        }
        break;
      }
  }else{
    if (playerWinners >= computerWinners){
      alert("You have Won!!!!!!!")
    }else if (playerWinners === computerWinners){alert("You both are equal!!!")}
    else {alert("You have lost the game")}
  }
}

function Scissors() { 
  moves--;
  if ( moves >= 0){
    document.querySelector(".yourchoice").innerHTML = 'yourchoice: ' +'Scissors';
    document.querySelector(".movesleft").innerHTML = `Moves Left: ${moves}`;
    let computerchoice = Math.random();
    if ( computerchoice < 0.33){
      computerC = "Scissors";
    }else if ( 0.33 <= computerchoice <=0.66 ){
      computerC = "Rock";
    }
    else{
      computerC = "Paper";
    }
    switch ( computerC ){
      case "Rock":
        computerWinners += 1;
        document.querySelector("#c-count").innerHTML = `${computerWinners}`
        if (computerWinners + playerWinners >= 10){
          alert("You have lost the game")
        }
        break;
      case "Paper":
        playerWinners += 1;
        document.querySelector("#p-count").innerHTML = `${playerWinners}`
        if (playerWinners + computerWinners >= 10){
          alert("You have Won!!!!!!!")
        }
        break;
      }
  }else{
    if (playerWinners >= computerWinners){
      alert("You have Won!!!!!!!")
    }else if (playerWinners === computerWinners){alert("You both are equal!!!")}
    else {alert("You have lost the game")}
  }
}
