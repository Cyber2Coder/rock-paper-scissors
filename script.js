let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  let result = "";

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  updateUI(result);
}
function updateUI(result) {
  resultsDiv.textContent = result;
  scoreDiv.textContent = `Player: ${playerScore} — Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    declareWinner();
  }
}
function declareWinner() {
  const winner =
    playerScore === 5 ? "You win the game!" : "The computer wins the game!";
  resultsDiv.textContent = winner;

  // Disable buttons
  buttons.forEach(btn => btn.disabled = true);
}
