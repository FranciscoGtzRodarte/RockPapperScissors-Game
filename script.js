//Variable declarations
var wins = 0;
var losses = 0;
var ties = 0;
var choices = ["R", "P", "S"];

play();
//starts the game

/////////function declarations

//funtion that makes the game playable
function play() {
  var userChoice = prompt("Choose R , P or S");

  var computerChoice = getComputerChoice(3);
  //Expected R, P or S
  function getComputerChoice(max) {
    var finalChoice = Math.floor(Math.random() * max);
    //expected 0, 1 or 2
    return (finalChoice = choices[finalChoice]);
    //returns R, P or S
  }
  
  console.log("this is userChoice: " + userChoice);
  //Expected output user prompt choice
  console.log("this is computerChoice: " + computerChoice);
  //Expected output computer choice

  var result = checkWinner(userChoice, computerChoice);
  //Expected the result of function checkWinner passing userChoice and computerChoice as arguments

  if (result === "ties") {
    ties++;
    alert("You tie");
  } else if (result === "wins") {
    wins++;
    alert("You Won");
  } else if (result === "losses") {
    losses++;
    alert("You Losse Buuuuu!");
  }
  //Adds to counters number of wins, losses or ties and displays a win, tie or lose message

  alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
  //Shows the number of wins, losses and ties

  if (confirm("Play again!?\nEither OK or Cancel.")) {
    playAgain();
  } else {
    alert("Bye bye!");
  }
  //Asks if you want to play again, if truthy calls playAgain function if not GoodBye baby
}


//function that uses a if conditional to check the values of userChoice and computerChoice to decide if it wins, losses or is a tie
function checkWinner(userChoice, computerChoice) {
  userChoice = userChoice.toUpperCase();
  var ties = "ties";
  var wins = "wins";
  var los = "losses";

  //else if conditionals to check who wins
  if (userChoice === computerChoice) {
    console.log("Ties");
    return ties;
  } else if (userChoice === "R" && computerChoice === "S") {
    console.log("User wins with Rock");
    return wins;
  } else if (userChoice === "P" && computerChoice === "R") {
    console.log("User wins with Paper");
    return wins;
  } else if (userChoice === "S" && computerChoice === "P") {
    console.log("User wins with Scissors");
    return wins;
  } else if (userChoice === "S" && computerChoice === "R") {
    console.log("Computer wins with Rock");
    return los;
  } else if (userChoice === "R" && computerChoice === "P") {
    console.log("Computer wins with Paper");
    return los;
  } else if (userChoice === "P" && computerChoice === "S") {
    console.log("Computer wins with Scissors");
    return los;
  } else {
    console.log("still not working");
  }

  //returns the value of wins, ties or losses
}

function playAgain() {
  play();
}
//function that that plays the game again
