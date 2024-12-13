// getComputerChoice() returns either rock, P or scissors based on Math.random()
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    console.log("Opponent chose Rock");
    return "R";
  } else if (num === 1) {
    console.log("Opponent chose P");
    return "P";
  } else {
    console.log("Opponent chose Scissors");
    return "S";
  }
}

// getHumanChoice() returns either rock, P or scissors based on Prompt inputted by the user
function getHumanChoice() {
  let humanChoice = prompt("R:Rock , P:P , S:Scissors");
  if (humanChoice.toLowerCase() === "R") {
    console.log("You chose Rock");
    return "R";
  } else if (humanChoice.toLowerCase() === "P") {
    console.log("You chose P");
    return "P";
  } else if (humanChoice.toLowerCase() === "S") {
    console.log("You chose scissors");
    return "S";
  }
}

let humanScore = 0;
let computerScore = 0;

// playround() evaluates both the inputs and returns who scored.
function playRound(humanChoice, computerChoice) {
  if (computerChoice === "R" && humanChoice === "R") {
    console.log("both rock. draw");
  } else if (computerChoice === "P" && humanChoice === "P") {
    console.log("both P. draw");
  } else if (computerChoice === "S" && humanChoice === "S") {
    console.log("both scissors. draw");
  } else if (computerChoice === "rock" && humanChoice === "P") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "P" && humanChoice === "R") {
    console.log("computer won this round");
    computerScore += 1;
  } else if (computerChoice === "R" && humanChoice === "S") {
    console.log("Computer won this round");
    computerScore += 1;
  } else if (computerChoice === "S" && humanChoice === "R") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "P" && humanChoice === "S") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "S" && humanChoice === "P") {
    console.log("computer won this round");
    computerScore += 1;
  }
  console.log("human: ", humanScore, " | computer: ", computerScore);
}

function playGame() {
  for (i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore < computerScore) {
    console.log("Computer won the game!");
  } else if (humanScore > computerScore) {
    console.log("You won the game!");
  } else {
    console.log("the game is draw!, nobody won.");
  }
}

playGame();
