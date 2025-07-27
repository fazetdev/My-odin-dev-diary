const countdownDisplay = document.getElementById("countdown");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const cancelBtn = document.getElementById("cancelBtn");
const datetimeInput = document.getElementById("datetime");

let countdownInterval;

function updateCountdown() {
  const storedTargetTime = localStorage.getItem("targetTime");
  if (!storedTargetTime) return;

  const targetTime = new Date(storedTargetTime).getTime();
  const now = new Date().getTime();
  const diff = targetTime - now;

  if (diff <= 0) {
    clearInterval(countdownInterval);
    countdownDisplay.innerHTML = "Countdown ended";
    localStorage.removeItem("targetTime");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startCountdown() {
  const targetTime = new Date(datetimeInput.value).getTime();
  if (!datetimeInput.value || isNaN(targetTime)) return;

  localStorage.setItem("targetTime", datetimeInput.value);
  clearInterval(countdownInterval);
  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

function resetCountdown() {
  datetimeInput.value = "";
  countdownDisplay.innerHTML = "";
  clearInterval(countdownInterval);
  localStorage.removeItem("targetTime");
}

function cancelCountdown() {
  clearInterval(countdownInterval);
  countdownDisplay.innerHTML = "Cancelled";
  localStorage.removeItem("targetTime");
}

startBtn.addEventListener("click", startCountdown);
resetBtn.addEventListener("click", resetCountdown);
cancelBtn.addEventListener("click", cancelCountdown);

if (localStorage.getItem("targetTime")) {
  countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}
