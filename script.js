function updateClock() {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("day");

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  // Pad with 0s
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  // Display time
  clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Get day and date
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", options);

  dateElement.textContent = formattedDate;
}

updateClock();
setInterval(updateClock, 1000);
// Set target date and time (August 28, 2025 at 11:30 AM)
const targetDate = new Date("2025-07-28T11:30:00");

function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    document.getElementById("countdown").innerHTML = "✅ Time’s up!";
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

// Start updating every second
const timer = setInterval(updateCountdown, 1000);
