// getComputerChoice() returns either rock, paper or scissors based on Math.random()
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    console.log("Opponent chose Rock");
    return "rock";
  } else if (num === 1) {
    console.log("Opponent chose Paper");
    return "paper";
  } else {
    console.log("Opponent chose Scissors");
    return "scissors";
  }
}

// getHumanChoice() returns either rock, paper or scissors based on Prompt inputted by the user
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors");
  if (humanChoice.toLowerCase() === "rock") {
    console.log("You chose Rock");
    return "rock";
  } else if (humanChoice.toLowerCase() === "paper") {
    console.log("You chose Paper");
    return "paper";
  } else {
    console.log("You chose scissors");
    return "scissors";
  }
}

// playround() evaluates both the inputs and returns who scored.
function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("both rock. draw");
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("both paper. draw");
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("both scissors. draw");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("human won");
    return "humanWon";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("computer won");
    return "computerWon";
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer won");
    return "computerWon";
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("human won");
    return "humanWon";
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("human won");
    return "humanWon";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("computer won");
    return "computerWon";
  }
}
playRound();
