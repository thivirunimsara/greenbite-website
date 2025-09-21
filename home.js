
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
  "https://cdn.discordapp.com/attachments/1053757772782633010/1418956776828571748/image.jpg?ex=68d001fa&is=68ceb07a&hm=37f91c347dcd9fd08905caf7ad794e5330555cc0e319eb40918548d84b7de269&",
  "https://cdn.discordapp.com/attachments/1053757772782633010/1418956881547755652/image.jpg?ex=68d00213&is=68ceb093&hm=332a5cc4fb89116a72c63de7db3cca160f2a6f2d858fcb314c26cf90500e93cf&",
  "https://cdn.discordapp.com/attachments/1053757772782633010/1418956992017600582/image.jpg?ex=68d0022d&is=68ceb0ad&hm=9748de3c9ab17654d8f9a59f127dfbbaad566d30a7e70b34ba6e5202c798347c&",
  "https://cdn.discordapp.com/attachments/1053757772782633010/1418957038742143018/image.jpg?ex=68d00238&is=68ceb0b8&hm=b82108733ee17912d8292d578df2596585bba2df85fb26558e66b8161daa4fdd&"
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






