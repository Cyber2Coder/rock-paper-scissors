/* =========================================================
   GAME STATE
   ========================================================= */
let playerScore = 0;
let computerScore = 0;

const scoreDiv = document.getElementById("score");
const resultsDiv = document.getElementById("results");
const scoreboard = document.getElementById("scoreboard");


/* =========================================================
   COMPUTER CHOICE
   ========================================================= */
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}


/* =========================================================
   PERSONALITY LINES
   ========================================================= */
function getPersonalityLine(choice, outcome) {
  const lines = {
    rock: {
      select: "Rock reporting for duty!",
      win: "Rock solid victory!",
      lose: "Oof… I need a polish!"
    },
    paper: {
      select: "Paper’s got this covered!",
      win: "Smooth move! I win!",
      lose: "I’ll fold… this time."
    },
    scissors: {
      select: "Snip snip! Let’s go!",
      win: "Cutting through the competition!",
      lose: "Blunt moment… I’ll be back!"
    }
  };

  return lines[choice][outcome];
}


/* =========================================================
   KID-FRIENDLY RESULT MESSAGES
   ========================================================= */
function getResultMessage(outcome) {
  const messages = {
    win: [
      "You did it! Great job!",
      "Winner winner! High-five!",
      "Awesome move! You win!",
      "Boom! You’re unstoppable!",
      "You’re on a roll!"
    ],
    lose: [
      "Nice try! Want to go again?",
      "So close! You’ve got this!",
      "No worries — try another round!",
      "You’re learning! Keep going!",
      "Good effort! Let’s play again!"
    ],
    tie: [
      "It’s a tie! Great minds think alike!",
      "Same move! Try again!",
      "Twinsies! Go again!",
      "Tie game! Let’s break it!",
      "Whoa! You matched!"
    ]
  };

  const pool = messages[outcome];
  return pool[Math.floor(Math.random() * pool.length)];
}


/* =========================================================
   UPDATE SCOREBOARD
   ========================================================= */
function updateScoreboard() {
  scoreDiv.textContent = `Player: ${playerScore}  ⚡  Computer: ${computerScore}`;
}


/* =========================================================
   CONFETTI CELEBRATION
   ========================================================= */
function launchConfetti() {
  const duration = 3000;
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


/* =========================================================
   FLOATING SHAPES GENERATOR
   ========================================================= */
function createFloatingShapes() {
  for (let i = 0; i < 15; i++) {
    const shape = document.createElement("div");
    shape.classList.add("floating-shape");

    const size = Math.random() * 40 + 20;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    shape.style.left = Math.random() * 100 + "vw";
    shape.style.animationDuration = 12 + Math.random() * 12 + "s";

    document.body.appendChild(shape);
  }
}
createFloatingShapes();


/* =========================================================
   CLOUD GENERATOR
   ========================================================= */
function createClouds() {
  const cloudCount = 8;

  for (let i = 0; i < cloudCount; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    const scale = Math.random() * 0.6 + 0.7;
    cloud.style.transform = `scale(${scale})`;

    cloud.style.top = Math.random() * 60 + "vh";

    cloud.style.animationDuration = 30 + Math.random() * 25 + "s";
    cloud.style.animationDelay = Math.random() * -20 + "s";

    document.body.appendChild(cloud);
  }
}
createClouds();


/* =========================================================
   FLOATING HEARTS GENERATOR
   ========================================================= */
function createHearts() {
  const heartCount = 12;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = Math.random() * 25 + 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 10 + Math.random() * 15 + "s";
    heart.style.animationDelay = Math.random() * -20 + "s";

    document.body.appendChild(heart);
  }
}
createHearts();


/* =========================================================
   FLOATING STARS GENERATOR
   ========================================================= */
function createStars() {
  const starCount = 15;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 20 + 10;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = 12 + Math.random() * 15 + "s";
    star.style.animationDelay = Math.random() * -20 + "s";

    document.body.appendChild(star);
  }
}
createStars();


/* =========================================================
   FLOATING SPARKLES GENERATOR
   ========================================================= */
function createSparkles() {
  const sparkleCount = 25;

  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 8 + Math.random() * 10 + "s";
    sparkle.style.animationDelay = Math.random() * -15 + "s";

    document.body.appendChild(sparkle);
  }
}
createSparkles();


/* =========================================================
   EXTRA FLOATING SHAPES GENERATOR
   ========================================================= */
function createExtraShapes() {
  const shapeCount = 20;

  for (let i = 0; i < shapeCount; i++) {
    const shape = document.createElement("div");
    shape.classList.add("extra-shape");

    const size = Math.random() * 30 + 15;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    shape.style.left = Math.random() * 100 + "vw";
    shape.style.animationDuration = 10 + Math.random() * 12 + "s";
    shape.style.animationDelay = Math.random() * -20 + "s";

    document.body.appendChild(shape);
  }
}
createExtraShapes();


/* =========================================================
   GAME OVER SCREEN — EPIC MODE
   ========================================================= */
function showGameOverScreen(playerWon) {
  const screen = document.getElementById("gameOverScreen");
  const title = document.getElementById("gameOverTitle");
  const message = document.getElementById("gameOverMessage");

  resultsDiv.textContent = "";

  if (playerWon) {
    title.textContent = "YOU WIN!";
    message.textContent = "Legendary move! You're unstoppable! 🌟🦄";
    launchConfetti();
  } else {
    title.textContent = "GOOD TRY!";
    message.textContent = "You fought bravely! Ready for redemption? ⚔️🦄";
  }

  screen.classList.add("show");
}


/* =========================================================
   PLAY ONE ROUND
   ========================================================= */
function playRound(playerSelection) {

  if (playerScore >= 5 || computerScore >= 5) return;

  const computerSelection = computerPlay();

  resultsDiv.textContent = getPersonalityLine(playerSelection, "select");

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    scoreboard.classList.add("win");
    scoreboard.classList.remove("lose");

    resultsDiv.textContent =
      getPersonalityLine(playerSelection, "win") +
      "  " +
      getResultMessage("win");

    if (playerScore === 5) {
      showGameOverScreen(true);
    }

  } else if (playerSelection === computerSelection) {
    resultsDiv.textContent = getResultMessage("tie");
    scoreboard.classList.remove("win", "lose");

  } else {
    computerScore++;
    scoreboard.classList.add("lose");
    scoreboard.classList.remove("win");

    resultsDiv.textContent =
      getPersonalityLine(playerSelection, "lose") +
      "  " +
      getResultMessage("lose");

    if (computerScore === 5) {
      showGameOverScreen(false);
    }
  }

  updateScoreboard();
}


/* =========================================================
   RAINBOW TRAIL FUNCTION
   ========================================================= */
function spawnRainbowPiece(x, y) {
  const piece = document.createElement("div");
  piece.classList.add("rainbow-piece");

  piece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
  piece.style.left = x + "px";
  piece.style.top = y + "px";

  document.body.appendChild(piece);

  setTimeout(() => piece.remove(), 800);
}


/* =========================================================
   RESET + PLAY AGAIN BUTTON
   ========================================================= */
document.getElementById("reset").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  scoreboard.classList.remove("win", "lose");
  resultsDiv.textContent = "";
  updateScoreboard();
});

document.getElementById("playAgainBtn").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  scoreboard.classList.remove("win", "lose");
  resultsDiv.textContent = "";
  updateScoreboard();

  const screen = document.getElementById("gameOverScreen");
  screen.classList.remove("show");

  // Wait for fade-out so unicorn appears over clean background
  setTimeout(() => {
    const unicorn = document.createElement("div");
    unicorn.textContent = "🦄 Let's play again!";
    unicorn.style.position = "fixed";
    unicorn.style.bottom = "20vh";
    unicorn.style.left = "50%";
    unicorn.style.transform = "translateX(-50%)";
    unicorn.style.fontSize = "2.8rem";
    unicorn.style.zIndex = "3000";
    unicorn.style.pointerEvents = "none";
    unicorn.style.opacity = "0";
    document.body.appendChild(unicorn);

    void unicorn.offsetWidth;

    unicorn.style.animation = "unicornJump 1.5s ease-out";

    let trailInterval = setInterval(() => {
      const rect = unicorn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      spawnRainbowPiece(x, y);
    }, 60);

    setTimeout(() => {
      clearInterval(trailInterval);
      unicorn.remove();
    }, 1500);
  }, 400); // match fade-out
});


/* =========================================================
   BUTTON EVENT LISTENERS
   ========================================================= */
document.querySelectorAll("#buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    playRound(choice);
  });
});
