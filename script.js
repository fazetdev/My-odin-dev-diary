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
