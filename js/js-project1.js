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

let humanScore = 0;
let computerScore = 0;

// playround() evaluates both the inputs and returns who scored.
function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("both rock. draw");
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("both paper. draw");
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("both scissors. draw");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("computer won this round");
    computerScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer won this round");
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("You won this round");
    humanScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
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
