let intervalId = null;

const input = document.querySelector(".time-input");
const screen = document.querySelector(".screen");
const startButton = document.querySelector(".button");
const cancelButton = document.querySelector(".cancel");

function updateScreen(text) {
  screen.textContent = text;
}

startButton.addEventListener("click", () => {
  const userInput = Number(input.value);

  if (!userInput || userInput <= 0) {
    updateScreen("Please enter a valid number.");
    return;
  }

  let remainingTime = userInput;
  updateScreen(`Time left: ${remainingTime}s`);

  clearInterval(intervalId); // stop any running timer first

  intervalId = setInterval(() => {
    remainingTime--;
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      updateScreen("Time's up!");
    } else {
      updateScreen(`Time left: ${remainingTime}s`);
    }
  }, 1000);
});

cancelButton.addEventListener("click", () => {
  clearInterval(intervalId);
  updateScreen("Timer Cancelled.");
});
