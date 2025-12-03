// Change this to the date & time of your last proper talk
// Format: new Date(year, monthIndex, day, hour, minute, second)
// Month index: 0 = Jan, 11 = Dec
const lastTalk = new Date(2025, 10, 12, 20, 30, 0); // example: 28 Nov 2025, 8:30 PM

const dEl = document.getElementById("days");
const hEl = document.getElementById("hours");
const mEl = document.getElementById("minutes");
const sEl = document.getElementById("seconds");

function updateTimer() {
  const now = new Date().getTime();
  const diff = now - lastTalk.getTime(); // how long since you talked

  if (diff < 0) {
    dEl.textContent = "00";
    hEl.textContent = "00";
    mEl.textContent = "00";
    sEl.textContent = "00";
    return;
  }

  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minMs = 1000 * 60;

  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / minMs);
  const seconds = Math.floor((diff % minMs) / 1000);

  dEl.textContent = String(days).padStart(2, "0");
  hEl.textContent = String(hours).padStart(2, "0");
  mEl.textContent = String(minutes).padStart(2, "0");
  sEl.textContent = String(seconds).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);
