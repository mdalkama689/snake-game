const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

startBtn.addEventListener("click", () => {
  GAME_STARTED = true;
  restartGame(); // Restart logic already sets up everything
  startBtn.style.display = "none";
  restartBtn.style.display = "block";
});

restartBtn.addEventListener("click", () => {
  GAME_STARTED = true;
  restartGame();
});
