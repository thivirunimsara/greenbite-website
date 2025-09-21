
let dailyTips = [
  "Start your day with a glass of water.",
  "Stretch for 5 minutes to wake up your body.",
  "Choose fruits instead of sugary snacks.",
  "Take the stairs instead of the elevator.",
  "Practice deep breathing for relaxation.",
  "Get at least 7-8 hours of sleep.",
  "Go for a short walk after meals."
];

let day = new Date().getDate(); 
let tipIndex = day % dailyTips.length; 
document.getElementById("daily-tip").innerText = dailyTips[tipIndex];



let images = [
  "drinking.jpg",
  "yoga.jpg",
  "eating healthy.jpg",
  "walking"
];
let today = new Date().getDate();
let imgIndex = today % images.length;
document.getElementById("health-image").src = images[imgIndex];


const form = document.getElementById("newsletter");
const emailInput = document.getElementById("nl-email");
const message = document.getElementById("nl-msg");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let email = emailInput.value.trim();
    if (email && email.includes("@")) {
      localStorage.setItem("newsletterEmail", email);
      message.innerText = "Subscribed ✓ (saved in your browser)";
      message.style.color = "lightgreen";
      form.reset();
    } else {
      message.innerText = "Please enter a valid email.";
      message.style.color = "red";
    }
  });
}






