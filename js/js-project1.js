// getComputerChoice() returns either rock, P or scissors based on Math.random()
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    console.log("Opponent chose Rock");
    return "r";
  } else if (num === 1) {
    console.log("Opponent chose P");
    return "p";
  } else {
    console.log("Opponent chose Scissors");
    return "s";
  }
}

// getHumanChoice() returns either rock, P or scissors based on Prompt inputted by the user
function getHumanChoice() {
  let humanChoice = prompt("R:Rock , P:P , S:Scissors");
  if (humanChoice.toLowerCase() === "r") {
    console.log("You chose Rock");
    return "r";
  } else if (humanChoice.toLowerCase() === "p") {
    console.log("You chose Paper");
    return "p";
  } else if (humanChoice.toLowerCase() === "s") {
    console.log("You chose scissors");
    return "s";
  }
}

let humanScore = 0;
let computerScore = 0;

// playround() evaluates both the inputs and returns who scored.
function playRound(humanChoice, computerChoice) {
  if (computerChoice === "r" && humanChoice === "r") {
    console.log("both rock. draw");
  } else if (computerChoice === "p" && humanChoice === "p") {
    console.log("both P. draw");
  } else if (computerChoice === "s" && humanChoice === "s") {
    console.log("both scissors. draw");
  } else if (computerChoice === "r" && humanChoice === "p") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "p" && humanChoice === "r") {
    console.log("computer won this round");
    computerScore += 1;
  } else if (computerChoice === "r" && humanChoice === "s") {
    console.log("Computer won this round");
    computerScore += 1;
  } else if (computerChoice === "s" && humanChoice === "r") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "p" && humanChoice === "s") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "s" && humanChoice === "P") {
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
