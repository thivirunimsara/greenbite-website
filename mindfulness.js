
const breathBtn = document.getElementById("breathBtn");
const stopBreathBtn = document.getElementById("stopBreathBtn");
const breathBar = document.getElementById("breathBar");
const breathText = document.getElementById("breathText");
let breathing = false;

breathBtn.addEventListener("click", () => {
  if (breathing) return;
  breathing = true;
  breathCycle();
});

stopBreathBtn.addEventListener("click", () => {
  breathing = false;
  breathText.textContent = "Stopped";
  breathBar.style.height = "0%";
});

function breathCycle() {
  breathText.textContent = "Inhale...";
  breathBar.style.height = "100%";

  setTimeout(() => {
    breathText.textContent = "Exhale...";
    breathBar.style.height = "0%";
    setTimeout(() => {
      if (breathing) breathCycle();
    }, 4000);
  }, 4000);
}


const timerSelect = document.getElementById("timerSelect");
const startTimer = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");

let timerInterval;

startTimer.addEventListener("click", () => {
  let timeLeft = parseInt(timerSelect.value);
  clearInterval(timerInterval);
  updateDisplay(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      saveSession(timerSelect.value);
    }
  }, 1000);
});

function updateDisplay(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  timerDisplay.textContent = `${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
}


const rain = new Audio("assets/sounds/calming-rain.mp3");
rain.loop = true;

document.getElementById("playRain").addEventListener("click", () => {
  rain.play();
});

document.getElementById("stopRain").addEventListener("click", () => {
  rain.pause();
  rain.currentTime = 0; 
});


const waves = new Audio("assets/sounds/calming-waves.mp3"); 
waves.loop = true;

document.getElementById("playWaves").addEventListener("click", () => {
  waves.play();
});

document.getElementById("stopWaves").addEventListener("click", () => {
  waves.pause();
  waves.currentTime = 0; 
});


// Completed Sessions with localStorage
const sessionList = document.getElementById("sessionList");

function saveSession(duration) {
  let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
  const date = new Date().toLocaleString();
  sessions.push({duration, date});
  localStorage.setItem("sessions", JSON.stringify(sessions));
  renderSessions();
}

function renderSessions() {
  let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
  sessionList.innerHTML = "";
  sessions.forEach(s => {
    let li = document.createElement("li");
    li.textContent = `${s.duration/60} min session on ${s.date}`;
    sessionList.appendChild(li);
  });
}

renderSessions();
