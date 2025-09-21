const pools = {
  arms: {
    none: ["Push-ups", "Tricep Dips", "Plank Shoulder Taps"],
    dumbbells: ["Bicep Curls", "Overhead Press", "Hammer Curls"],
    machines: ["Tricep Pushdown (Machine)", "Bicep Curl (Machine)", "Shoulder Press (Machine)"]
  },
  legs: {
    none: ["Bodyweight Squats", "Lunges", "Wall Sit"],
    dumbbells: ["Goblet Squats", "Dumbbell Lunges", "Step-ups"],
    machines: ["Leg Press", "Leg Extension", "Hamstring Curl"]
  },
  full: {
    none: ["Burpees", "Mountain Climbers", "Jumping Jacks"],
    dumbbells: ["Thrusters", "Renegade Rows", "Suitcase Squats"],
    machines: ["Chest Press", "Lat Pulldown", "Seated Row"]
  }
};

const genBtn = document.getElementById("genBtn");
const bodySel = document.getElementById("body");
const equipSel = document.getElementById("equip");
const resultBox = document.getElementById("workoutResult");
const timerBox = document.getElementById("timerBox");
const timerBar = document.getElementById("timerBar");
const timerCount = document.getElementById("timerCount");

let queue = [];
let idx = 0;
let timerId = null;


function uniquePick(arr, n) {
  const a = [...new Set(arr)]; 
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, Math.min(n, a.length));
}

function generateWorkout() {
  const body = bodySel.value;
  const equip = equipSel.value;

 
  queue = uniquePick(pools[body][equip], 3);
  idx = 0;

  
  resultBox.innerHTML = "";
  queue.forEach((ex, i) => {
    const div = document.createElement("div");
    div.className = "workout-item";
    div.id = "witem-" + i;
    div.textContent = `${i + 1}. ${ex}`;
    resultBox.appendChild(div);
  });

  timerBox.classList.remove("hidden");
  startTimer();
}

function setActive(i) {
  document.querySelectorAll(".workout-item").forEach((el, k) => {
    el.classList.toggle("active", k === i);
  });
}

function startTimer() {
  if (!queue.length) return;
  if (idx >= queue.length) {
    setActive(-1);
    timerCount.textContent = "Workout Complete!";
    timerBar.style.width = "0%";
    return;
  }

  let duration = 20; 
  const total = duration;

  setActive(idx);
  timerCount.textContent = duration + "s";
  timerBar.style.width = "100%";

  clearInterval(timerId);
  timerId = setInterval(() => {
    duration--;
    timerCount.textContent = duration + "s";
    timerBar.style.width = (duration / total) * 100 + "%";

    if (duration <= 0) {
      clearInterval(timerId);
      idx++;
      startTimer();
    }
  }, 1000);
}

genBtn.addEventListener("click", generateWorkout);
