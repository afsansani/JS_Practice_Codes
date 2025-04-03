// Tutorial Source: https://www.youtube.com/watch?v=ec8vSKJuZTk
// Teacher: Ania Kubow
// Level 1 Adventurer: Amp47

// picking up SPANs by ids
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoicesDisplay = document.querySelectorAll("button");
// Vars for game logic function
let userChoice;
let computerChoice;
let result;

// Display Logic
possibleChoicesDisplay.forEach((possibleChoiceDisplay) =>
  possibleChoiceDisplay.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

//Game Logic-----------------------------------------------------------------------------------------------------
function generateComputerChoice() {
  const randomNumber =
    Math.floor(Math.random() * possibleChoicesDisplay.length) + 1;
  // + 1 because avoiding 0 as random number , length defines the total element number [3]
  // Logic, for 3 elements, there can be 3 ties, 3 wins, 3 loosing conditions for one player at a time.
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a tie! 👎";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win! 😃🎉";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lost! 😖";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost! 😖";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win! 😃🎉";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost! 😖";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win! 😃🎉";
  }

  resultDisplay.innerHTML = result;
}
//Game Logic-----------------------------------------------------------------------------------------------------
