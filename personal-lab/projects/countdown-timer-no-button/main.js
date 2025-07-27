const targetDate = new Date("2025-11-28T11:30:00");

function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    document.getElementById("countdown").innerHTML = "Time’s up!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

const timer = setInterval(updateCountdown, 1000);
