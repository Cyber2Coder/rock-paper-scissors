let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".choice");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const scoreboard = document.querySelector("#scoreboard");
const resetBtn = document.querySelector("#reset");

/* ===== BUTTON EVENTS ===== */
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.dataset.choice;

    // Click animation
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 100);

    playRound(playerSelection);
  });
});

/* ===== GAME LOGIC ===== */
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  let result = "";

  // Clear scoreboard glow
  scoreboard.classList.remove("win", "lose");

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
    flashResult("flash-tie");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    flashResult("flash-win");
    scoreboard.classList.add("win");
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    flashResult("flash-lose");
    scoreboard.classList.add("lose");
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

/* ===== END GAME ===== */
function declareWinner() {
  const winner =
    playerScore === 5 ? "You win the game!" : "The computer wins the game!";
  resultsDiv.textContent = winner;

  buttons.forEach(btn => (btn.disabled = true));

  if (playerScore === 5) {
    launchConfetti();   // CONFETTI FIXED
  }
}

/* ===== UI EFFECTS ===== */
function flashResult(type) {
  resultsDiv.classList.remove("flash-win", "flash-lose", "flash-tie");
  resultsDiv.classList.add(type);

  setTimeout(() => {
    resultsDiv.classList.remove(type);
  }, 300);
}

function launchConfetti() {
  const duration = 3000;   // was 1000 — now 3 seconds
  const end = Date.now() + duration;

  (function frame() {
    const particle = document.createElement("div");
    particle.classList.add("confetti");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 3000);

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}


/* ===== RESET ===== */
resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;

  resultsDiv.textContent = "Game reset. Play again!";
  scoreDiv.textContent = `Player: ${playerScore} — Computer: ${computerScore}`;

  scoreboard.classList.remove("win", "lose");

  buttons.forEach(btn => (btn.disabled = false));
});
